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
  showTodos = false; // set false!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  constructor(
    private planetsService: ImmediatelyService,
    private todosService: ClickservService
  ) {}

  ngOnInit(): void {
    this.planets = this.planetsService.GetPlanets();
  }

  GetOnClickServ(): void {
    this.todos = this.todosService.GetTodos();
    this.showTodos = true;
  }

  removeTodo(id: number): void {
    this.todosService.RemoveTodo(id);
    this.todos = this.todosService.GetTodos();
  }

  addTodo(title: string): void {
    if (!title) {
      return;
    }
    this.todosService.AddTodo(title);
    this.todos = this.todosService.GetTodos();
  }

}
