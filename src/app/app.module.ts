import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ItemComponent } from './pages/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomePageComponent,
    ItemComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
