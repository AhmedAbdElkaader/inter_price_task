import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth-component/login/login.component';
import { PageNotFoundComponent } from './auth-component/page-not-found/page-not-found.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './auth-component/login/login.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersInterceptor } from './interceptor-service/users.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: UsersInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
