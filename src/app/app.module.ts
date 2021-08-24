import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { GameLayoutModule } from './layouts/game-layout/game-layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { GameLayoutComponent } from './layouts/game-layout/game-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GameComponentsModule } from './gameComponents/game-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponentsModule } from './adminComponents/admin-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { DirectivesModule } from './directives/directives.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    GameLayoutComponent,
    AdminLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    DirectivesModule,

    GameComponentsModule,
    AdminComponentsModule,
    AppRoutingModule,
    GameLayoutModule,
    AdminLayoutModule,
    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),
    
    // CoreThemeCustomizerModule,

    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
