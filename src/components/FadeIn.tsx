import React, {
  PropsWithChildren,
  useEffect,
  useState,
  ElementType,
} from "react";

interface FadeInProps {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: ElementType;
  childTag?: ElementType;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => void;
}

export default function FadeIn({
  delay = 50,
  transitionDuration = 400,
  wrapperTag: WrapperTag = "div",
  childTag: ChildTag = "div",
  className,
  childClassName,
  visible = true,
  onComplete,
  children,
}: PropsWithChildren<FadeInProps>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);

  const childCount = React.Children.count(children);

  useEffect(() => {
    const targetCount = visible ? childCount : 0;

    if (maxIsVisible === targetCount) {
      const timeout = setTimeout(() => {
        onComplete?.();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const increment = targetCount > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible((prev) => prev + increment);
    }, delay);

    return () => clearTimeout(timeout);
  }, [childCount, visible, maxIsVisible, delay, transitionDuration, onComplete]);

  return (
    <WrapperTag className={className}>
      {React.Children.map(children, (child, i) => (
        <ChildTag
          className={childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
            transform: maxIsVisible > i ? "none" : "translateY(20px)",
            opacity: maxIsVisible > i ? 1 : 0,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
