import React, { useEffect, useRef } from 'react';
import taloStanding from '../assets/talo-character.png';
import taloFalling from '../assets/talo-falling.png';
import taloEnd from '../assets/talo_end.png';
import './FallingCharacter.css';

// Talo, fixé à l'écran, "tombe" au fur et à mesure du scroll de la page,
// à partir de la section Formation (debout au départ -> pose de chute
// pendant le scroll).
const FALL_START = 0.03;
const HORIZONTAL_EASE = 0.08; // lissage du déplacement horizontal

export default function FallingCharacter() {
  const trackRef = useRef(null);
  const figureRef = useRef(null);
  const isFallingRef = useRef(false);
  const isLandedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const wobbleRef = useRef(0);
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const targetYRef = useRef(0);
  const currentYRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const figure = figureRef.current;
    if (!track || !figure) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Talo n'apparaît que sur la version navigateur (desktop).
    if (window.matchMedia('(max-width: 640px)').matches) {
      return;
    }

    let ticking = false;
    let rafId = null;
    let isDragging = false;

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
      wobbleRef.current = progress >= 1 ? 0 : Math.sin(progress * 14) * 12; // tournoiement léger pendant la chute, stoppé à l'atterrissage
      const falling = progress > FALL_START;

      if (falling !== isFallingRef.current) {
        isFallingRef.current = falling;
        figure.classList.toggle('is-falling', falling);
      }

      // Une fois le bas de page atteint, Talo est "allongé" au sol.
      const landed = progress >= 1;
      if (landed !== isLandedRef.current) {
        isLandedRef.current = landed;
        figure.classList.toggle('is-landed', landed);
      }

      // Le scroll ne pilote la position verticale que si Talo n'est pas en
      // train d'être déplacé à la main : sinon on écraserait le glisser-déposer.
      if (!isDragging) {
        currentYRef.current = fallEase * trackHeight;
      }
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Le plan de déplacement (track) couvre tout l'écran : on borne juste la
    // position pour que Talo ne sorte pas de la fenêtre visible.
    const clampPosition = (clientX, clientY) => {
      const trackRect = track.getBoundingClientRect();
      const halfW = figure.offsetWidth / 2;
      const halfH = figure.offsetHeight / 2;
      const margin = 10;

      const minX = -trackRect.left + margin;
      const maxX = window.innerWidth - trackRect.left - figure.offsetWidth - margin;
      const minY = -trackRect.top + margin;
      const maxY = trackRect.height - figure.offsetHeight - margin;

      const x = Math.min(Math.max(clientX - trackRect.left - halfW, minX), maxX);
      const y = Math.min(Math.max(clientY - trackRect.top - halfH, minY), maxY);
      return { x, y };
    };

    // Talo ne se déplace que si on clique dessus et qu'on maintient le clic
    // enfoncé pendant la chute (glisser-déposer, dans toute la fenêtre).
    const onFigureMouseDown = (e) => {
      if (!isFallingRef.current) return;
      isDragging = true;
      figure.classList.add('is-dragging');
      const { x, y } = clampPosition(e.clientX, e.clientY);
      targetXRef.current = x;
      targetYRef.current = y;
      e.preventDefault();
    };

    const onWindowMouseMove = (e) => {
      if (!isDragging) return;
      const { x, y } = clampPosition(e.clientX, e.clientY);
      targetXRef.current = x;
      targetYRef.current = y;
    };

    const stopDragging = () => {
      if (!isDragging) return;
      isDragging = false;
      figure.classList.remove('is-dragging');
    };

    const render = () => {
      if (isDragging) {
        currentXRef.current += (targetXRef.current - currentXRef.current) * 0.35;
        currentYRef.current += (targetYRef.current - currentYRef.current) * 0.35;
      } else {
        currentXRef.current += (targetXRef.current - currentXRef.current) * HORIZONTAL_EASE;
        // currentYRef est mis à jour par update() (scroll) tant qu'on ne glisse pas.
      }
      figure.style.transform =
        `translate(${currentXRef.current}px, ${currentYRef.current}px) rotate(${wobbleRef.current}deg)`;
      rafId = requestAnimationFrame(render);
    };

    update();
    render();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    figure.addEventListener('mousedown', onFigureMouseDown);
    window.addEventListener('mousemove', onWindowMouseMove, { passive: true });
    window.addEventListener('mouseup', stopDragging);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      figure.removeEventListener('mousedown', onFigureMouseDown);
      window.removeEventListener('mousemove', onWindowMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="falling-character-track" ref={trackRef} aria-hidden="true">
      <div className="falling-character" ref={figureRef}>
        <img className="fc-figure fc-figure-standing" src={taloStanding} alt="" draggable={false} />
        <img className="fc-figure fc-figure-falling" src={taloFalling} alt="" draggable={false} />
        <img className="fc-figure fc-figure-end" src={taloEnd} alt="" draggable={false} />
      </div>
    </div>
  );
}
