import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDirectiveDirective } from './Directives/employee-directive.directive';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitDirectiveDirective } from './Directives/fruit-directive.directive';
import { FruitPipePipe } from './Pipes/fruit-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDirectiveDirective,
    FruitsComponent,
    FruitDirectiveDirective,
    FruitPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
