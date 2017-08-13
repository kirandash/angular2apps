import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClassifiedService } from './services/classified.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassifiedListComponent } from './components/classified-list/classified-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassifiedListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule    
  ],
  providers: [ClassifiedService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
