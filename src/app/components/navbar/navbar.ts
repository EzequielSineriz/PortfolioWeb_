import { Component, Input, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { Lang } from '../../i18n/translations';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() currentSection: string = 'about';

  private langService = inject(LanguageService);

  // Signals compartidas (se leen en el HTML como lang() y t())
  readonly lang = this.langService.lang;
  readonly t = this.langService.t;

  changeLanguage(l: Lang): void {
    this.langService.setLang(l);
  }

  descargarCV(): void {
    const file = this.t().nav.cvFile;
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop() ?? 'CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
