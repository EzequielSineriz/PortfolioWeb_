import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-studies',
  imports: [],
  templateUrl: './studies.html',
  styleUrl: './studies.css',
})
export class Studies {
  readonly t = inject(LanguageService).t;
}
