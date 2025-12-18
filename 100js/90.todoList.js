class TodoList {
  todos = [];

  add(id, task) {
    const todo = this.getItem(id);

    if (todo) {
      throw new Error('There is already a todo item with this id.');
    }

    const newTask = {
      id,
      task,
      done: false,
    };

    this.todos = [...this.todos, newTask];
  }

  remove(id) {
    const filteredTodos = this.todos.filter((item) => item.id !== id);

    this.todos = [...filteredTodos];
  }

  markAsDone(id) {
    const todo = this.getItem(id);

    if (!todo) {
      throw new Error('There is no todo item with this id.');
    }

    const markedTodo = { ...todo, done: true };

    this.remove(id);
    this.todos = [...this.todos, markedTodo];
  }

  getItem(id) {
    const todo = this.todos.filter((item) => item.id === id)[0];

    return todo || null;
  }

  getAll() {
    return [...this.todos].sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

export { TodoList };
