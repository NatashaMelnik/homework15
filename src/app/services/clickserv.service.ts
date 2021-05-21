import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// Несколько сервисов для запросов. Некоторые сразу, а некоторые по клику.
export class ClickservService {
  idNext = 8;
  todosArr = [
    {
      id: 1,
      title: 'delectus aut autem',
    },
    {
      id: 2,
      title: 'quis ut nam facilis et officia qui',
    },
    {
      id: 3,
      title: 'fugiat veniam minus',
    },
    {
      id: 4,
      title: 'et porro tempora',
    },
    {
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    },
    {
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    },
    {
      id: 7,
      title: 'illo expedita consequatur quia in',
    },
  ];

  public GetTodos() {
    return this.todosArr;
  }

  public RemoveTodo(id: number) {
    return (this.todosArr = this.todosArr.filter((todo) => todo.id !== id));
  }

  public AddTodo(title: string) {
    this.todosArr.push({ id: this.idNext, title: title });
    this.idNext = this.idNext + 1;
  }



  
}
