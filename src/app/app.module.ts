import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsListComponent } from './components/skillsList/skillsList.component';

import { SkillsComponent } from './pages/skills/skills.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { ArticleComponent } from './pages/blog/article/article.component';
import { PanelAdminComponent } from './pages/panel-admin/panel-admin.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { CategoriaComponent } from './pages/blog/categoria/categoria.component';
import { TagComponent } from './pages/blog/tag/tag.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SkillsListComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AdminComponent,
    BlogComponent,
    ProjectCardComponent,
    ProjectComponent,
    ArticleComponent,
    PanelAdminComponent,
    ArticleCardComponent,
    BlogHeaderComponent,
    CategoriaComponent,
    TagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
