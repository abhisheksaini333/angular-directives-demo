import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MycustomdirectiveDirective } from './directives/mycustomdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    MycustomdirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
