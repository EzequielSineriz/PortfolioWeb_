import { Component, inject } from '@angular/core';
import { PROJECTS } from './project';
import { ProjectsCard } from './projects-card/projects-card';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectsCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects = PROJECTS;
  readonly t = inject(LanguageService).t;
}
