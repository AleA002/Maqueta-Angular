import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    SobreMiComponent,
    SkillsComponent,
    CurriculumComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
