import React, { useState } from 'react';
import { Course, Module } from '../domain/models';
import { getAbsoluteShareableUrl, shareCourseContent, LearningTab } from '../hooks/useUrlRouting';

interface ShareModalProps {
  course: Course;
  module: Module;
  tab: LearningTab;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  course,
  module,
  tab,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedMd, setCopiedMd] = useState(false);

  const directUrl = getAbsoluteShareableUrl(course.id, module.id, tab);
  const shareText = `📚 Estoy estudiando ${course.title} (Módulo ${module.id}: ${module.title}) en Master Class QuimiSell. ¡100% interactivo, con simuladores visuales y código en vivo!`;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    directUrl
  )}&bgcolor=0f172a&color=38bdf8`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(directUrl);
      setCopied(true);
      onShowToast('¡Enlace directo copiado al portapapeles!');
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      onShowToast('Error al copiar enlace');
    }
  };

  const handleCopyMarkdown = async () => {
    const md = `[Master Class QuimiSell: ${course.shortTitle} - Módulo ${module.id}: ${module.title}](${directUrl})`;
    try {
      await navigator.clipboard.writeText(md);
      setCopiedMd(true);
      onShowToast('¡Enlace en formato Markdown copiado!');
      setTimeout(() => setCopiedMd(false), 2000);
    } catch (e) {
      onShowToast('Error al copiar');
    }
  };

  const handleNativeShare = async () => {
    const result = await shareCourseContent({
      courseTitle: course.title,
      moduleTitle: module.title,
      url: directUrl,
    });
    if (result === 'copied') {
      onShowToast('¡Enlace copiado al portapapeles!');
    } else if (result === 'shared') {
      onShowToast('¡Compartido con éxito!');
    }
  };

  const encodedUrl = encodeURIComponent(directUrl);
  const encodedText = encodeURIComponent(shareText);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden text-slate-800 dark:text-slate-100">
        
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              🔗 Enlace Directo Compartible
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>{course.icon}</span>
              <span className="truncate">{course.shortTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Módulo {module.id}: {module.title.split(': ')[1] || module.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* URL Box with Quick Copy */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            URL directa (lleva a cualquier persona directo aquí):
          </label>
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-950 p-2 rounded-2xl border border-slate-200 dark:border-slate-800">
            <input
              type="text"
              readOnly
              value={directUrl}
              className="bg-transparent flex-1 text-xs font-mono text-slate-700 dark:text-slate-300 px-2 outline-none select-all"
            />
            <button
              onClick={handleCopyLink}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer shrink-0 shadow-sm ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95'
              }`}
            >
              {copied ? '✓ ¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>

        {/* Native Mobile Share / Social Share */}
        <div className="space-y-3">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Compartir en redes o dispositivo:
          </label>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 hover:opacity-95 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>📲</span>
              <span>Abrir Hoja de Compartir Nativa (iPhone / Android)</span>
            </button>
          )}

          <div className="grid grid-cols-4 gap-2 pt-1">
            <a
              href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/60 transition group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-110 transition">💬</span>
              <span className="text-[10px] font-bold mt-1">WhatsApp</span>
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800/60 transition group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-110 transition">𝕏</span>
              <span className="text-[10px] font-bold mt-1">Twitter</span>
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800/60 transition group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-110 transition">💼</span>
              <span className="text-[10px] font-bold mt-1">LinkedIn</span>
            </a>

            <a
              href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800/60 transition group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-110 transition">✈️</span>
              <span className="text-[10px] font-bold mt-1">Telegram</span>
            </a>
          </div>
        </div>

        {/* QR Code and Markdown copy */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={qrUrl}
              alt="QR Code"
              className="w-14 h-14 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm shrink-0"
            />
            <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              <span className="font-bold block text-slate-700 dark:text-slate-300">Código QR al instante</span>
              Escanea desde la cámara de tu teléfono para abrirlo al momento.
            </div>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="px-3 py-2 rounded-xl text-[11px] font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer shrink-0"
          >
            {copiedMd ? '✓ Copiado' : 'Copiar Markdown'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShareModal;
