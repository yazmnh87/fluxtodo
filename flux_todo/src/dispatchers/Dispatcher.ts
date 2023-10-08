import {EventEmitter} from 'events'
import {Todo} from '../types'

class TodoDispatcher extends EventEmitter {
  dispatch(action: {type: string; todo?: Todo; todos?: Todo[], todoId?: string}) {
    this.emit('dispatch', action)
  }
}

export default new TodoDispatcher()
