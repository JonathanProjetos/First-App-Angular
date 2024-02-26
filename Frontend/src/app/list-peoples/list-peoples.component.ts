import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from './components.module'
import { Person } from './models/person';
import { PeopleService } from './services/services.service';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-list-peoples',
  standalone: true,
  imports: [
   ComponentsModule
  ],
  templateUrl: './list-peoples.component.html',
  styleUrl: './list-peoples.component.css'
})

export class ListPeoplesComponent implements OnInit {

    person$:Person[] = [];

    constructor(
        private peolpleService:PeopleService,
        public dialog: MatDialog,
    ) {}

    onError(errorMessage: string) {
        this.dialog.open(ErrorDialogComponent, {
          data: errorMessage
        });
    }
    
    ngOnInit(): void {
      this.allPerson();
    }

    attListPeoples() {
      this.allPerson();
    }

    allPerson() {
      this.peolpleService.findAll().pipe(
        catchError((error) => {
          this.onError(`${error.status}|${error.error.error}`);
          return of([]);
        })
      ).subscribe((person) => {
        this.person$ = person
    });
    }
}
