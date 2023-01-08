import { AnimationProps, motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  className?: string;
}

function RoundedDecoration({ className }: Props) {
  const circleRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();

  const drawDecoration: AnimationProps['variants'] = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.div
      animate
      onViewportEnter={() => controls.start('visible')}
      className={className}
    >
      <motion.svg
        width={300}
        height={200}
        viewBox="0 0 600 600"
        initial="hidden"
        animate={controls}
        ref={circleRef}
      >
        <motion.circle
          cx={200}
          cy={0}
          r="50%"
          stroke="var(--sage-500)"
          variants={drawDecoration}
          custom={1}
          style={{
            strokeWidth: '2px',
            strokeLinecap: 'round',
            fill: 'transparent',
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

RoundedDecoration.defaultProps = { className: '' };

export default RoundedDecoration;
