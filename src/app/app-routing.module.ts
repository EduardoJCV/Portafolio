import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { ArticleComponent } from './pages/blog/article/article.component';
import { AdminComponent } from './pages/admin/admin.component';

import { AdminGuard } from './guards/admin.guard';
import { PanelAdminComponent } from './pages/panel-admin/panel-admin.component';

import { CategoriaComponent } from './pages/blog/categoria/categoria.component';
import { TagComponent } from './pages/blog/tag/tag.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'sobremi', component: AboutComponent },
  { path: 'proyectos', component: ProjectsComponent},
  { path: 'proyectos/:id', component: ProjectComponent },
  { path: 'contactar', component: ContactComponent },

  { path: 'blog', component: BlogComponent},
  { path: 'blog/categoria/:id', component: CategoriaComponent },
  { path: 'blog/tag/:id', component: TagComponent},
  { path: 'blog/articulo/:id', component: ArticleComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
