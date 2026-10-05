import { Injectable, computed, effect, signal } from '@angular/core';
import { Lang, TRANSLATIONS } from './translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  /** Idioma activo */
  readonly lang = signal<Lang>(this.initialLang());

  /** Diccionario del idioma activo (se recalcula solo al cambiar `lang`) */
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const l = this.lang();
      document.documentElement.lang = l; // accesibilidad / SEO
      try {
        localStorage.setItem('lang', l); // recuerda la elección al recargar
      } catch {
        /* localStorage no disponible: se ignora */
      }
    });
  }

  setLang(l: Lang): void {
    this.lang.set(l);
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'es' || saved === 'en') return saved;
    } catch {
      /* se ignora */
    }
    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
  }
}
