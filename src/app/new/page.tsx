import { redirect } from "next/navigation";
import Link from "next/link"

const createTodo = async (data:FormData) => { // FormData constructs a set of key value pair so we can query form data easily
  "use server" 
  // console.log('hi') //* server console i.e. wont be visible on client console i.e. chrome web tools

  const title = data.get('title')?.valueOf()
  if (typeof title !== 'string' || title.length === 0 ){
    throw new Error("Inavlid Title");
  }
  await prisma.todo.create({
    data: {
      title: title,
      complete: false
    }
  })
  redirect('/')
}

const page = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>

      {/* when the form is submitted, createTodo is called on server */}
      <form action={createTodo} className="flex gap-2 flex-col"> 
        <input 
          type="text" 
          name="title"
          className="border border-slate-400 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link href='/' className="border border-white-300 text-slate-200 hover:text-red-400 hover:bg-slate-700 focus-within:bg-slate-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out">Cancel</Link>
          <button type="submit" className="border border-white-300 text-slate-200 hover:text-green-400 hover:bg-slate-700 focus-within:bg-slate-700 py-2 px-4 rounded-lg transition duration-300 ease-in-out">Create</button>
        </div>
      </form>
    </>
  )
}

export default page
