import React, { useEffect } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'warning';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: '✅',
    info: 'ℹ️',
    warning: '⚠️',
  };

  const borders = {
    success: 'border-emerald-500/40 bg-emerald-950/90 text-emerald-200',
    info: 'border-indigo-500/40 bg-indigo-950/90 text-indigo-200',
    warning: 'border-amber-500/40 bg-amber-950/90 text-amber-200',
  };

  return (
    <div className="fixed top-5 right-5 z-[100] max-w-sm animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border ${borders[type]}`}
      >
        <span className="text-lg shrink-0">{icons[type]}</span>
        <span className="text-xs sm:text-sm font-bold tracking-tight">{message}</span>
        <button
          onClick={onClose}
          type="button"
          className="ml-2 text-xs opacity-70 hover:opacity-100 p-1 cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;
