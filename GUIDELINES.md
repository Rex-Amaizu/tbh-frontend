# Things to note

<hr />

![TBH logo](./tbh-Logo.png 'TBH logo')

<hr /><br>

These guidelines are based on the following:

- To ensure consistency
- To ensure code quality and performance are preserved
- To ensure compatibility
- To ensure ease of onboarding
- To ensure codebase scalability and maintainability

- [Coding Style](#coding-style)
  - [References](#references)
- [Directory Structure](#directory-structure)
- [General Coding Guidelines](#general-coding-guidelines)
  - [CSS rules](#css-rules)
  - [Naming conventions](#naming-conventions)
  - [Start with architecture design](#start-with-architecture-design)
  - [Use an updated stable Library or Framework](#use-an-updated-stable-library-or-framework)
  - [Leverage Automation](#leverage-automation)
  - [State Management](#state-management)
  - [Set error monitoring and reporting tools](#set-error-monitoring-and-reporting-tools)
  - [Write unit tests](#write-unit-tests)
- [References](#references)

## Coding Style

As a team, it is important to write code in industry standards coding style, which allows for easy maintenance and
onboarding of new team members to the project.

As a best practice, always code in the recommended style guide of a particular stack. Below are the
coding standards recommended for the project and its members.

- [JavaScript](https://standardjs.com/)
- [React/JSX](https://github.com/airbnb/javascript/tree/master/react)
- [Rules of hooks](https://reactjs.org/docs/hooks-rules.html)

### References

- [Learn more](https://bookdown.org/joshuah40/qa_code/Coding-Guidelines.html)

## Directory Structure

Components should be placed in the components folder, while business logic should be placed in the lib folder. Assets
should be placed in the assets folder and should be clearly categorized in the public folder.

## General Coding Guidelines

To achieve a harmonized approach to how this software is developed by TBH developers, we use the
following best practices

### css rules

Do NOT use inline styles. use css modules or tailwind CSS classnames.
global styles go into the styles/globals.css directory

Always specify color of font.

### Naming conventions

Please refer to the documentation for the naming conventions

- commits should have a meaningful description after prefixing them accordingly. For example,

  ```bash
  git commit -m "fix: fixed the bug with the image carousel"
  ```

  Kindly check the `commitlint.config.js` file for more information on the right prefix for your commit.

- Components should have so meaningful words that it will instantly inform one of the component that is being built.
  for example

  `Accordion,BannerSection,ArticleSection` etc.

- For creating a new branch please name the branch with the same conventions as stated above. For example:

  `git checkout -b feat/zendesk_integration`
  `git checkout -b refactor/authentication_hooks`
  `git checkout -b fix/login_issue`
  etc.

  NOTE: Your PR won't be merged if these conventions are not followed.

### Start with architecture design

Before you begin writing code, start by requesting the design architecture of the intended application
feature/UI/component of the project to be developed. Each must show its own appropriate architecture
design, that fulfills the underlying technical needs. As such, you should spearhead efforts in identifying
which architecture style fits best.

For example, before developing a homepage component layout, ensure you see its design on for desktop, tablet and mobile.

All components developed, must be responsive.

### Use an updated stable Library or Framework

Use libraries/frameworks as technology stack of choice for a given programming language, software and/or libraries.

### Leverage Automation

Building software involves doing repetitive tasks such as deployments, testing, and finding bugs. For
high-quality output, tasks should be automated wherever possible.

Repetitive manual tasks that should be automated are:

- Deployment automation: All deployments should be automated, that includes tests, development,
  staging, and production server deployments.
- Use react testing library for unit testing.

### State Management

Use Redux for state management, particularly redux toolkit (RTK). The state management is a central part of the
application architecture. Redux is also a library that helps you manage the state of your application. Redux is a predictable
state container for JavaScript apps. Redux helps you manage the state of your application.

### Set error monitoring and reporting tools

For proper management of errors/bugs, use automatic tracking tools. The error monitoring tool used of choice is Azure
insights or any monitoring tool unique to azure or [Sentry](https://sentry.io/)

### Write unit tests

Code is written by humans and humans are good at making mistakes. To avoid introducing any bug in the codebase by mistake,
write unit tests for every feature. Add test coverage to the entire codebase to make sure that no functionality goes without
being covered by unit tests. The desired test coverage percentage is above 80%, but the higher the better.

Please follow the AAA (Arrange-Act-Assert) pattern when building tests:

- Arrange: describes whatever setup is needed.
- Act: describes the subject's behavior that's under test (and typically only describes a single line
  needed to invoke that behavior).
- Assert: describes the verification that the subject's behavior had the desired effect by evaluating
  its return value or measuring a side-effect (with a spy or mock).
- Please ensure to write unit tests for features.

Reference:

- [Intoducing react testing library](https://kentcdodds.com/blog/introducing-the-react-testing-library)
- [How to Write Testable Code and Why it Matters](https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters)
- [AAA pattern](https://github.com/testdouble/contributing-tests/wiki/Arrange-Act-Assert)
- [How to test custom hooks](https://kentcdodds.com/blog/how-to-test-custom-react-hooks)

## Reference

Learn more about coding guidelines and best practices.

- [Typescript](https://www.typescriptlang.org/assets/typescript-handbook.pdf)
- [Model-View-controller MVC](https://developer.chrome.com/apps/app_frameworks)
- [Model-View-controller MVC](https://www.educative.io/blog/mvc-tutorial)
- [Model–view–viewmodel MVVM](https://www.codeproject.com/articles/100175/model-view-viewmodel-mvvm-explained)
- [Microservices](https://microservices.io/)
- [Microservices](https://medium.com/hashmapinc/the-what-why-and-how-of-a-microservices-architecture-4179579423a9)
- [Document backend APIs](https://swagger.io/)
- [How to document your API](https://apiguide.readthedocs.io/en/latest/build_and_publish/documentation.html)
- [Why we document our APIs](https://swagger.io/resources/ebooks/api-documentation-the-secret-to-a-great-api-developer-experience/)

## Authors

- <a href="mailto:chinedu.eke2@sterling.ng">Chinedu K. Eke</a>

<br />
<hr />

![Sterling logo](./Sterling-Bank-Logo.png 'Sterling logo')

<hr />
