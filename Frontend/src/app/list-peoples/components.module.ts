import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './components/forms/forms.component'
import { TableComponent } from './components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsComponent,
    TableComponent,
    FooterComponent
  ],
  exports: [
    FormsComponent,
    TableComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
