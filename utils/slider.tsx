import React from 'react';
import { SizeContext } from './sizeObserver';
import useAnimationFrame from '../hooks/useAnimationFrame';

interface Props {
  initialOffsetX: number;
  className: string;
  contentWidth: number;
  children: React.ReactNode;
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffsetX,
  className,
  contentWidth,
}) => {
  const { innerWidth } = React.useContext(SizeContext);
  const refScrollX = React.useRef<number>(initialOffsetX);
  const refContainer = React.useRef<HTMLDivElement>(null);
  const refContent = React.useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    React.useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none  ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
      <div className={enabled ? 'inline-block' : 'hidden'}>{children}</div>
    </div>
  );
};

interface ItemProps {
  width: number;
  children: React.ReactNode;
}

export const SliderItem: React.FC<ItemProps> = ({ children, width }) => (
  <div
    className="inline-flex justify-center items-center mx-4"
    style={{ width }}
  >
    {children}
  </div>
);

export default SliderContainer;
