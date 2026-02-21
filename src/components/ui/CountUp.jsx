import { useEffect, useState } from "react";

export default function CountUp({
  to = 5781,
  duration = 2500, // 4.5s
  className = "",
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    // easeOutExpo: very fast start, slow finish
    const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -20 * x));

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      setCount(Math.floor(eased * to));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [to, duration]);

  return <span className={className}>{count.toLocaleString()}</span>;
}