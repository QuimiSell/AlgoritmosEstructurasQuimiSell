/**
 * Zero-dependency lightweight canvas confetti burst.
 * Perfect for celebration moments (quizzes, milestones, exam pass).
 */
export function fireConfetti(durationMs = 2500): void {
  if (typeof document === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const colors = ['#6366f1', '#a855f7', '#ec4899', '#10b981', '#f59e0b', '#38bdf8', '#ef4444'];
  const particleCount = 100;
  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
  }> = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width * 0.5 + (Math.random() - 0.5) * 150,
      y: height * 0.4 + (Math.random() - 0.5) * 80,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.9) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
    });
  }

  let startTime = performance.now();

  function animate(now: number) {
    const elapsed = now - startTime;
    if (elapsed > durationMs) {
      canvas.remove();
      return;
    }

    ctx!.clearRect(0, 0, width, height);
    const progress = elapsed / durationMs;
    const globalFade = 1 - Math.pow(progress, 2);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.4; // gravity
      p.vx *= 0.98; // air drag
      p.rotation += p.rotationSpeed;

      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate((p.rotation * Math.PI) / 180);
      ctx!.globalAlpha = p.opacity * globalFade;
      ctx!.fillStyle = p.color;
      ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      ctx!.restore();
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
