import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import gsap, { TimelineMax } from "gsap";

gsap.registerPlugin(TimelineMax);

const fade = ({ exit: { length }, node, direction }) => {
  const duration = direction === "out" ? length + length / 4 : length;
  const opacity = direction === "in" ? 1 : 0;

  const holdPosition =
    direction === "out"
      ? {
          // 					overflowY: 'hidden',
          // 					height: '100vh',
          // 					scrollTop: scrollTop,
        }
      : {};

  return new TimelineMax()
    .set(node, holdPosition)
    .fromTo(node, duration, { opacity: !opacity }, { opacity: opacity });
};

export default function Fade({
  exit,
  entry,
  fade: removedProp,
  duration,
  ...props
}) {
  const length = duration || 0.8;

  return (
    <TransitionLink
      exit={{
        length: length,
        trigger: ({ exit, node }) => fade({ exit, node, direction: "out" }),
      }}
      entry={{
        length: 0,
        trigger: ({ exit, node }) => fade({ exit, node, direction: "in" }),
      }}
      {...props}
    >
      {props.children}
    </TransitionLink>
  );
}
