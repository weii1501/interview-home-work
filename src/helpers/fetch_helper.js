export const fetchPost = async (query = '') => {
  const todos = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  )

  return [...filteredTodos]
}
