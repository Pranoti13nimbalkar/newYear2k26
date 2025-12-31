import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
    import {MatTabsModule} from '@angular/material/tabs';
    import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
