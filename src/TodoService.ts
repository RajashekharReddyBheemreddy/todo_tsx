import TodoTypes from "./todo";

const LOCALSTORAGEKEY = 'todos';

const TodoService = {
    // get todos
    getTodos:():TodoTypes[] => {
        const todoStr = localStorage.getItem(LOCALSTORAGEKEY);
        return todoStr ? JSON.parse(todoStr): [];
    },

    // Adding todos
    addTodos: (text: string): TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = {id: todos.length + 1, text, completed: false};

        const updatedTodo = [...todos, newTodo];
        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedTodo));
        return newTodo;
    },

    // Update todo
    updateTodo: (todo: TodoTypes): TodoTypes => {
        const todos = TodoService.getTodos();
        const updatedTodo = todos.filter((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedTodo));
        return todo
    },

    // Delete todo
    deleteTodo: (id: number): void => {
        const todos = TodoService.getTodos();
        const deletedTodo = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(deletedTodo))
    }
}

export default TodoService
