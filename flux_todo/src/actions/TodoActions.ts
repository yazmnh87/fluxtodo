import Dispatcher from '../dispatchers/Dispatcher'
import {Todo} from '../types/Todo'

const TodoActions = {
  addTodo: (todo: Todo) => {
    Dispatcher.dispatch({
      type: 'ADD_TODO',
      todo,
    })
  },
  setTodos: (todos: Todo[]) => {
    Dispatcher.dispatch({
      type: 'SET_TODOS',
      todos,
    })
  },
  deleteTodo: (todoId: string) => {
    Dispatcher.dispatch({
      type: 'DELETE_TODO',
      todoId
    })
},
  fetchAllTodos: (): Todo[] => {
   Dispatcher.dispatch({
      type: 'FETCH_TODOS'
    })
  }
}

export default TodoActions
