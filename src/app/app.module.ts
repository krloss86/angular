import { ResaltadoV2Directive } from './directivas/resaltado-v2.directive';
import { AppCommonsModule } from './app-commons/app-commons.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AuthenticationService } from './services/authentication.service';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ResaltadoV2Directive,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    UserModule,
    AppRoutingModule,
    AppCommonsModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
