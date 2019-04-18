import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  {
    path: 'app-test' ,
    component: TestComponent
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SharedComponent, HeaderComponent, FooterComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
