import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PeopleService } from '../../services/services.service';
import { Person } from '../../models/person';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../../../shared/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {

  @Input() person$: Person[] = [];

  displayedColumns: string[] = ['id', 'name', 'email'];

  constructor(
    private peolpleService: PeopleService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  removerPeople(curse: Person) {
    this.peolpleService.deletePeople(curse.id as number).pipe(
      catchError((error) => {
        this.onError(`${error.status}|${error.error.error}`);
        return of([]);
      })
    ).subscribe(() => {
      this.person$ = this.person$.filter((c) => c.id !== curse.id);
    });
  }

}
