'use client';

import { useEffect, useRef } from 'react';

import styles from './HeroTitle.module.css';

export function HeroTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let frame = 0;

    function updateBlur() {
      frame = 0;
      const title = titleRef.current;

      if (!title) {
        return;
      }

      const revealDistance = title.getBoundingClientRect().height * 0.75;
      const progress =
        revealDistance > 0
          ? Math.min(1, Math.max(0, window.scrollY / revealDistance))
          : 1;

      title.style.setProperty('--hero-blur', `${0.06 * (1 - progress)}em`);
    }

    function scheduleUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(updateBlur);
      }
    }

    updateBlur();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <h1 className={styles.heroTitle} id="hero-title" ref={titleRef}>
      I’m Francesco, a developer and designer. <br /> I build apps and websites
      for myself and clients.
    </h1>
  );
}
