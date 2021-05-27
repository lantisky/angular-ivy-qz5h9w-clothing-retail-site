import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ItemComponent } from './pages/item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CheckOutPageComponent } from './pages/checkout-page/checkout-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

// import { MaterialModule } from './material-module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomePageComponent,
    ItemComponent,
    TopBarComponent,
    CheckOutPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
