import React from 'react'
import { FlatList, StyleSheet } from "react-native";
import styled from 'styled-components/native'
import {Todo} from '../../../types'
import ListViewItemText from '../../atoms/text/ListViewItemText'
import ListViewItemContainer from '../../atoms/containers/ListViewItemContainer'
import Icon from '../../atoms/icon'
import useDeleteTodoMutation from '../../../mutations/deleteTodoMutation'

const StyledBaseFlatList = styled(FlatList)`
  height: 100%;
  background-color: aqua;
  border: 1px solid saddlebrown;
`


const StyledFlatListContainer = styled.View`
  padding: 10px;
  border: 1px solid blue;
`

const styles = StyleSheet.create({
  contentContainer: {
    alignContent: 'center',
    paddingVertical: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
  },
})

export interface ListItemProps {
  id: string
  index: number
  title: string
  desription: string
  priority: number
  onPress: () => void
}

const ListItem: React.FC<ListItemProps> = (item): JSX.Element => {
  console.log(`IMPORTANT!!${item.title}`)
  const deleteTodoMutation = useDeleteTodoMutation();
  return (
    <ListViewItemContainer index={item.index}>
      <ListViewItemText>{item.title}</ListViewItemText>
      <Icon name="trash-outline" color={"red"} size={30} onPress={()=> deleteTodoMutation.mutate(item.id)}/>
    </ListViewItemContainer>
  )
}

type BaseFlatListProps = {
  data: Todo[]
}
const BaseFlatList: React.FC<BaseFlatListProps> = ({data}): JSX.Element => {
  const renderItem = ({item, index}: {item: Todo, index: number}) => (
    <ListItem
        id={ item.id }
        index={index}
        title={ item.title }
        desription={ item.description }
        priority={ item.priority }
        />
  )

  return (
    <StyledBaseFlatList
      data={data}
      renderItem={(item) => renderItem(item)}
      keyExtractor={(item: Todo) => item.id}
      contentContainerStyle={styles.contentContainer}
      scrollEnabled={true}
    />
  )
}

export default BaseFlatList
