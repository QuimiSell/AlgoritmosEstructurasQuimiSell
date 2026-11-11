import React, { useState, useEffect, useMemo, useRef } from 'react';
import { COURSES } from '../courses';
import { Course, Module } from '../domain/models';

interface SearchResult {
  courseId: string;
  courseTitle: string;
  courseIcon: string;
  moduleId: number;
  moduleTitle: string;
  matchSnippet: string;
  category: string;
}

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (courseId: string, moduleId: number) => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onSelect,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Index all courses and modules for instant searching
  const allSearchItems: SearchResult[] = useMemo(() => {
    const list: SearchResult[] = [];
    for (const course of COURSES) {
      for (const mod of course.modules) {
        list.push({
          courseId: course.id,
          courseTitle: course.title,
          courseIcon: course.icon,
          moduleId: mod.id,
          moduleTitle: mod.title,
          matchSnippet: mod.description || mod.items.slice(0, 2).join(', '),
          category: course.shortTitle,
        });
      }
    }
    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) {
      // Default: show first few popular modules
      return allSearchItems.slice(0, 8);
    }
    const q = query.toLowerCase().trim();
    return allSearchItems
      .filter(item => {
        return (
          item.moduleTitle.toLowerCase().includes(q) ||
          item.courseTitle.toLowerCase().includes(q) ||
          item.matchSnippet.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
      .slice(0, 10);
  }, [allSearchItems, query]);

  // Keyboard navigation inside command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, results.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % Math.max(1, results.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          onSelect(results[selectedIndex].courseId, results[selectedIndex].moduleId);
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onSelect, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100 flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <span className="text-xl opacity-60">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Buscar algoritmos, conceptos, cursos (ej: QuickSort, Docker, SQL, Grafos)..."
            className="w-full bg-transparent border-none outline-none text-base sm:text-lg font-bold text-slate-900 dark:text-white placeholder:text-slate-400 placeholder:font-normal"
          />
          <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto overscroll-contain p-2 space-y-1">
          {results.length === 0 ? (
            <div className="text-center py-12 text-slate-400 dark:text-slate-500">
              <span className="text-3xl block mb-2">🔎</span>
              <p className="text-sm font-semibold">No se encontraron resultados para "{query}"</p>
              <p className="text-xs mt-1">Prueba con palabras como "Big-O", "Hash", "Git", "Kotlin", "IA" o "Árboles"</p>
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={`${item.courseId}-${item.moduleId}`}
                  onClick={() => {
                    onSelect(item.courseId, item.moduleId);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left px-4 py-3 rounded-2xl flex items-center justify-between gap-3 transition cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-100 shadow-sm ring-1 ring-indigo-200 dark:ring-indigo-800'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0 p-1 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-100 dark:border-slate-700">
                      {item.courseIcon}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                          {item.category} · Módulo {item.moduleId}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold truncate text-slate-900 dark:text-white">
                        {item.moduleTitle}
                      </h4>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                        {item.matchSnippet}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-bold shrink-0 ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'opacity-0'}`}>
                    Ir ↵
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑ ↓ para navegar</span>
            <span>↵ para seleccionar</span>
          </div>
          <span>13 Cursos Universitarios QuimiSell</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPaletteModal;
