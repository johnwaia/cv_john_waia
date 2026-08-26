import React, { useEffect, useRef } from 'react';
import taloStanding from '../assets/talo-character.png';
import taloFalling from '../assets/talo-falling.png';
import './FallingCharacter.css';

// Talo, fixé à l'écran, "tombe" au fur et à mesure du scroll de la page,
// à partir de la section Formation (debout au départ -> pose de chute
// pendant le scroll).
const FALL_START = 0.03;

export default function FallingCharacter() {
  const trackRef = useRef(null);
  const figureRef = useRef(null);
  const isFallingRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const figure = figureRef.current;
    if (!track || !figure) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const startEl = document.getElementById('formation');
      const startY = startEl ? startEl.offsetTop : 0;
      const fallRange = maxScroll - startY;

      const visible = fallRange > 0 && window.scrollY >= startY;
      if (visible !== isVisibleRef.current) {
        isVisibleRef.current = visible;
        track.classList.toggle('is-visible', visible);
      }

      if (!visible) return;

      const progress = Math.min(Math.max((window.scrollY - startY) / fallRange, 0), 1);

      const trackHeight = track.clientHeight - figure.offsetHeight;
      const fallEase = Math.pow(progress, 1.4); // accélère comme une chute
      const translateY = fallEase * trackHeight;
      const wobble = Math.sin(progress * 14) * 12; // tournoiement léger pendant la chute
      const falling = progress > FALL_START;

      if (falling !== isFallingRef.current) {
        isFallingRef.current = falling;
        figure.classList.toggle('is-falling', falling);
      }

      figure.style.transform = `translateY(${translateY}px) rotate(${wobble}deg)`;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <div className="falling-character-track" ref={trackRef} aria-hidden="true">
      <div className="falling-character" ref={figureRef}>
        <img className="fc-figure fc-figure-standing" src={taloStanding} alt="" />
        <img className="fc-figure fc-figure-falling" src={taloFalling} alt="" />
      </div>
    </div>
  );
}
