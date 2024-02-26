import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPeoplesComponent } from './list-peoples/list-peoples.component';
import { ComponentsModule } from './list-peoples/components.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListPeoplesComponent,
    ComponentsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
