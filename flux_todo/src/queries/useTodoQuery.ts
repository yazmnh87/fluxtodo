import {useQuery} from '@tanstack/react-query'
import {fetchTodos} from '../api/todos/fetchTodos'

const useTodoQuery = () => {
  const result = useQuery(['todos'], fetchTodos)
  console.log(`query result ${result.data}`)
  console.log(`query result ${Object.keys(result)}`)
  console.log(`query result ${Object.values(result)}`)
  return result
}

export default useTodoQuery
