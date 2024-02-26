import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { catchError, concatMap, of } from 'rxjs';
import { Person } from '../../models/person';
import { PeopleService } from '../../services/services.service';
import { ErrorDialogComponent } from '../../../shared/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent implements OnInit {

  @Input() person$: Person[] = [];

  
  @Output() attListPeoples = new EventEmitter();

  inputEmail: string = '';
  inputName: string = '';


  constructor(
    private peolpleService: PeopleService,
    public dialog: MatDialog,
  ) { }


  ngOnInit(): void {

  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  onChangeName(event: any) {
    event.preventDefault();
    this.inputName = event.target.value;
  }

  onChangeEmail(event: any) {
    event.preventDefault();
    this.inputEmail = event.target.value;
  }

  createPeople() {
    const person = {
      name: this.inputName,
      email: this.inputEmail
    } as Person;

    this.peolpleService.createPeople(person).pipe(
      catchError((error) => {
        this.onError(`${error.status} | ${error.error.error}`);
        return of([]);
      }),
    ).subscribe(() => {
      this.inputName = '';
      this.inputEmail = '';
      this.attListPeoples.emit();
    });
  }
}
