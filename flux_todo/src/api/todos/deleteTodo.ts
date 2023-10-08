import axios from '../../axios'

export const deleteTodos = async (id: string) => {
  console.log('running delete')
  try {
    const response = await axios.delete(`/todos?id=${id}`)
    console.log(`fetch res?${response.data[0].title}`)
    console.log(`STATUS?? ${response.status}`)
    if (response.status === 200) {
      return true
    }
  } catch (e) {
    console.log(`error ${e}`)
  }
}
