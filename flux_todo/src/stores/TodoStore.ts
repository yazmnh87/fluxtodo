import {EventEmitter} from 'events'
import Dispatcher from '../dispatchers/Dispatcher'
import {Todo} from '../types/Todo'
import { deleteTodos } from "../api/todos/deleteTodo";
interface ITodoStore {
  handleActions: (action: any) => void
  addTodo: (todo: Todo) => void
  getAll: () => Todo[]
}

class TodoStore extends EventEmitter implements ITodoStore {
  private todos: Todo[] = []
  constructor(initialTodos: Todo[] = []) {
    super()
    this.todos = initialTodos
    Dispatcher.on('dispatch', this.handleActions.bind(this))
  }

  handleActions = (action: {type: string; todos?: Todo[]; todo?: Todo, todoId?: string}) => {
    switch (action.type) {
      case 'SET_TODOS':
        if (action.todos) {
          this.todos = action.todos
          this.emit('change')
        }
        break
      case "DELETE_TODO":
        if(action.todoId){
          deleteTodos(action.todoId)
          this.emit('change')
        }
        break
      case "FETCH_TODOS":
        return this.getAll()
      default:
        break
    }
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo)
    this.emit('change')
  }

  deleteTodo = (id: string) => {
    this.todos = this.todos.filter(todo=> todo.id === id)
    this.emit('change')
  }

  setTodos = (todos: Todo[]) => {
    this.todos = todos
    this.emit('change')
  }

  addAllTodos = (todos: Todo[]) => {
    this.todos = todos
    this.emit('change')
  }

  getAll = () => {
    return this.todos
  }

  addChangeListener = (callback: () => void) => {
    this.on('change', callback)
  }

  removeChangeListener = (callback: () => void) => {
    this.removeListener('change', callback)
  }
}

export default new TodoStore()
