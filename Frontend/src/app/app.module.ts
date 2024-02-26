import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeoplesComponent } from './list-peoples/list-peoples.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ListPeoplesComponent,
    ErrorDialogComponent,
    ReactiveFormsModule
  ]
})
export class AppModule { }
