'use client'
import { Trash2 } from "react-feather"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id:string, complete:boolean) => void // function type declaration 
  deleteTodo: (id:string) => void
}

// const deleteTodo = async (id) => {
//   await prisma.todo.delete{ 
//     where: {
//       id: id,
//     }
//   }
// }

export function TodoItem ({id, title, complete, toggleTodo, deleteTodo} : TodoItemProps){
  return (
    <li className="flex items-center justify-between gap-2 mb-3">
      <div className="flex items-center gap-2 group">
        <input 
          id={id} 
          type="checkbox" 
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <label 
          htmlFor={id} 
          className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer glow-label group-hover:text-green-400" // glow-label using sibling selector
        >
          {title}
        </label>
      </div>
      <Trash2 
        className="cursor-pointer text-gray-500 transition duration-300 ease-in-out opacity-1 group-hover:opacity-100 hover:text-red-500 group-hover:text-red-500 yeet" // we will apply custom css using sibling selector ~
        onClick={() => deleteTodo(id)}
      />
    </li>
  )
}
