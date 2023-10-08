import axios from '../../axios'

export const fetchTodos = async () => {
  console.log('running fetch')
  await new Promise(resolve => setTimeout(resolve, 5000))
  try {
    const response = await axios.get('/todos')
    console.log(`fetch res?${response.data[0].title}`)
    console.log(`STATUS?? ${response.status}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    console.log(`error ${e}`)
  }
}
