import { prisma } from "@/db"
import Link from "next/link"
import { TodoItem } from "@/components/TodoItem"

export async function getStaticProps(){
  const todos = await prisma.todo.findMany();
  console.log(todos);
  
  return {
    props: {todos},
    revalidate: 10,
  };
}


// const getTodos = () => {
//   return prisma.todo.findMany()
// }

const toggleTodo = async (id: string, complete:boolean) => {
  // 'use server'

  await prisma.todo.update({ where: {id} , data: {complete}})
}

const deleteTodo = async (id:string) => {
  // 'use server'

  await prisma.todo.delete({where: {id}})
}

const Home = ({todos}) => {
  // const todos = await getTodos();
  // console.log(todos)

  // await prisma.todo.create({data: {title: 'test', complete: false}})
  console.log(todos)
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">Your Tasks</h1>
        <Link className="border border-white-300 text-slate-200 hover:text-green-400 hover:bg-slate-700 focus-within:bg-slate-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out" href='/new'>New Task</Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/> // spread operator is alter for passing props the usual way i.e. todo={todo}
        ))}
      </ul>
    </>
  )
}

export default Home
