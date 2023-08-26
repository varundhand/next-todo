import { prisma } from "@/db"
import Link from "next/link"
import { TodoItem } from "@/components/TodoItem"

const getTodos = () => {
  return prisma.todo.findMany()
}

const toggleTodo = async (id: string, complete:boolean) => {
  'use server'

  await prisma.todo.update({ where: {id} , data: {complete}})
}

const Home = async () => {
  
  const todos = await getTodos();
  console.log(todos)

  // await prisma.todo.create({data: {title: 'test', complete: false}})

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-white-300 text-slate-200 hover:text-green-400 hover:bg-slate-700 focus-within:bg-slate-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out" href='/new'>New</Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/> // spread operator is alter for passing props the usual way i.e. todo={todo}
        ))}
      </ul>
    </>
  )
}

export default Home
