import { prisma } from "@/db"
import Link from "next/link"



const Home = async () => {
  
  const todos = await prisma.todo.findMany()
  await prisma.todo.create({data: {title: 'test', complete: false}})
  console.log(todos)

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-white-300 text-slate-200 hover:text-red-400 hover:bg-slate-700 focus-within:bg-slate-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out" href='/new'>New</Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Home
