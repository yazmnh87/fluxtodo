import { useMutation } from '@tanstack/react-query'
import { deleteTodos} from "../api/todos/deleteTodo";
import TodoStore from "../stores/TodoStore";

const useDeleteTodoMutation = () =>{
  return useMutation({
    mutationFn: (id: string) => {
      const res = deleteTodos(id)
      if(res === true){
        TodoStore.deleteTodo(id)
      }
    }
  })
}

export default useDeleteTodoMutation
