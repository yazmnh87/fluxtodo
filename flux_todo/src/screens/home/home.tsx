import React, {useEffect, useState} from 'react'
import BaseSafeAreaView from '../../components/atoms/containers/BaseSafeAreaView/index'
import BaseFlatList from '../../components/organisms/Flatlist/index'
import TodoStore from '../../stores/TodoStore'
import { ActivityIndicator, Text } from "react-native";
import useTodoQuery from '../../queries/useTodoQuery'
import TodoActions from '../../actions/TodoActions'
import BottomActionBar from "../../components/atoms/containers/BottomActionBar";
import { Todo } from "../../types";

export default function Home(): JSX.Element {
  const {data, error, isLoading} = useTodoQuery()
  const [todos, setTodos] = useState<Todo[]|null>(null)

  useEffect(() => {
    console.log(`isLoading ${isLoading}`)
  }, [isLoading]);


  useEffect(() => {
    if (data) {
      console.log(`DATA ${Object.keys(data)}`)
      console.log(`DATA ${data}`)
      TodoActions.setTodos(data)
      updateLocalTodos()
    }
  }, [data])

  useEffect(() => {
    console.log(`todos!!${todos}`)
  }, [todos])

  function updateLocalTodos() {
    setTodos(TodoActions.fetchAllTodos())
  }

  useEffect(() => {
    TodoStore.addChangeListener(updateLocalTodos)

    return () => {
      TodoStore.removeChangeListener(updateLocalTodos)
    }
  }, [])

  //const handleAddTodo

  return (
    <BaseSafeAreaView>
      {todos !== null && todos.length === 0 && !isLoading ? (
          <Text>No Todos</Text>
      ): isLoading ?
      (
        <ActivityIndicator size={"large"} style={{ margin: "auto", border: "1px solid red" }} />
      ) : (
        <BaseFlatList data={todos} />
      )}
      <BottomActionBar />
    </BaseSafeAreaView>
  )
}
