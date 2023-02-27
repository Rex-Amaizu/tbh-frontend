# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

# copying source files
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# comment online 26 in case you want to enable telemetry during the build.
# i disabled abled because i don't what information they collect, so i am not sharing any.
ENV NEXT_TELEMETRY_DISABLED 1

# builds the app
RUN yarn build
#RUN mkdir -p build/cache/images
#RUN chmod -R 666 build/cache/images

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# comment on line 37 in case you want to enable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 tbh
RUN adduser --system --uid 1001 chinedu

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
#COPY --from=builder /app/styles ./styles
#COPY --from=builder /app/pages ./pages
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=chinedu:tbh /app/.next/standalone ./
COPY --from=builder --chown=chinedu:tbh /app/.next/static ./.next/static

COPY . .

USER chinedu
#RUN mkdir -p chinedu:tbh /app/.next/cache/images
#RUN chmod -R 666 chinedu:tbh build/cache/images
#RUN chown -R chinedu:tbh ./.next

EXPOSE 3000
ENV PORT 3000

#running the app
CMD [ "node", "server.js" ]
