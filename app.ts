import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { ControlFlow } from './components/control-flow/control-flow';
import { Attribute } from './components/attribute/attribute';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, DataBinding, Signal, ControlFlow, Attribute],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('my-app');
}
