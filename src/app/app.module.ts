import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './layout/private/principal/contenido.component';
import { SessionComponent } from './layout/public/session.component';
import { HeaderComponent } from "./layout/private/header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        SessionComponent,
        ContenidoComponent,
        HeaderComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        // * MATERIAL IMPORTS
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,

    ]
})
export class AppModule { }
