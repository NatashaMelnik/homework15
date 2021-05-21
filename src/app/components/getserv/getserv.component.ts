import { Component, OnInit } from '@angular/core';
import { ImmediatelyService } from '../../services/immediately.service';
import { ClickservService } from '../../services/clickserv.service';

@Component({
  selector: 'app-getserv',
  templateUrl: './getserv.component.html',
  styleUrls: ['./getserv.component.scss'],
})
export class GetservComponent implements OnInit {
  public planets;
  public todos;
  showTodos = true; // set false!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  constructor(
    private planetsService: ImmediatelyService,
    private todosService: ClickservService
  ) {}

  ngOnInit(): void {
    this.planets = this.planetsService.GetPlanets();
    // console.log(this.planets);
  }

  GetOnClickServ(): void {
    this.todos = this.todosService.GetTodos();
    this.showTodos = true;
    // console.log(this.todos);
  }

  removeTodo(id: number) {
    this.todosService.RemoveTodo(id);
    this.todos = this.todosService.GetTodos();
  }

  addTodo(title: string) {
    if (!title) {
      return;
    }
    this.todosService.AddTodo(title);
    this.todos = this.todosService.GetTodos();
  }
}
