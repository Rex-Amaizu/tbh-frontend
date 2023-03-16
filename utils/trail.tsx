import React from 'react';
import { useTrail, a } from 'react-spring';

type Tprops = {
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

function Trail({ open, children, ...props }: Tprops) {
  const items: any = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 40,
    height: open ? 80 : 0,
    from: { opacity: 0, x: 40, height: 0 },
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default Trail;
