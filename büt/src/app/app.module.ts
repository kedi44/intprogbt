import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoruComponent } from './soru/soru.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CevapComponent } from './cevap/cevap.component';
import { HomeComponent } from './home/home.component';
import { PsComponent } from './ps/ps.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { YöneticiComponent } from './yönetici/yönetici.component';
import { SorusilmeComponent } from './sorusilme/sorusilme.component';


@NgModule({
  declarations: [											
    AppComponent,
      SoruComponent,
      RegisterComponent,
      LoginComponent,
      CevapComponent,
      HomeComponent,
      PsComponent,
      YöneticiComponent,
      SorusilmeComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,


  
  ],
  providers: [
    
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
