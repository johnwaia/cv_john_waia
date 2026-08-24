import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

/**
 * Wraps its children and reveals them (fade/slide) the first time
 * they scroll into the viewport.
 *
 * Usage:
 *   <ScrollReveal direction="up" delay={150}>
 *     <MyComponent />
 *   </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  as: Tag = 'div',
  className = '',
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'fade'
  delay = 0,
  threshold = 0.15,
  once = true,
  style: styleProp,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: if IntersectionObserver isn't available, just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...styleProp }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
