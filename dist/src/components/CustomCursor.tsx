import { useEffect, useState } from "react";

interface CursorState {
  x: number;
  y: number;
  visible: boolean;
  isDown: boolean;
  isInteractive: boolean;
}

export function CustomCursor() {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );

  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    isDown: false,
    isInteractive: false,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setState((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));
    };

    const handleMouseEnter = () => {
      setState((prev) => ({ ...prev, visible: true }));
    };

    const handleMouseLeave = () => {
      setState((prev) => ({ ...prev, visible: false }));
    };

    const handleMouseDown = (event: MouseEvent) => {
      setState((prev) => ({ ...prev, isDown: true }));
      setClicks((prev) => [
        ...prev,
        { id: Date.now(), x: event.clientX, y: event.clientY },
      ]);
    };

    const handleMouseUp = () => {
      setState((prev) => ({ ...prev, isDown: false }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const selector =
      "a, button, [role='button'], [data-cursor='interactive'], input[type='submit'], .cursor-interactive";
    const interactive = document.querySelectorAll<HTMLElement>(selector);

    const handleEnter = () => {
      setState((prev) => ({ ...prev, isInteractive: true }));
    };

    const handleLeave = () => {
      setState((prev) => ({ ...prev, isInteractive: false }));
    };

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  const { x, y, visible, isDown, isInteractive } = state;

  // Dont render the custom cursor on touch-only devices
  if (typeof window !== "undefined" && window.matchMedia) {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return null;
  }

  const ringScale = isDown ? 0.9 : isInteractive ? 1.6 : 1;
  const dotScale = isDown ? 0.7 : isInteractive ? 1.2 : 1;

  const commonStyle: React.CSSProperties = {
    left: x,
    top: y,
    opacity: visible ? 1 : 0,
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen">
      <div
        className="cursor-ring"
        style={{
          ...commonStyle,
          transform: `translate(-50%, -50%) scale(${ringScale})`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          ...commonStyle,
          transform: `translate(-50%, -50%) scale(${dotScale})`,
        }}
      />

      {clicks.map((click) => (
        <div
          key={click.id}
          className="cursor-click-effect"
          style={{
            left: click.x,
            top: click.y,
            transform: "translate(-50%, -50%)",
          }}
          onAnimationEnd={() => {
            setClicks((prev) => prev.filter((c) => c.id !== click.id));
          }}
        />
      ))}
    </div>
  );
}
