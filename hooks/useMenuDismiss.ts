import { useEffect, type RefObject } from 'react';

/** Cierra menús con Escape o clic fuera — O(1) por evento, sin polling. */
export function useMenuDismiss(
  isOpen: boolean,
  onClose: () => void,
  containerRef?: RefObject<HTMLElement | null>
): void {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (containerRef?.current?.contains(target)) return;
      onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [isOpen, onClose, containerRef]);
}
