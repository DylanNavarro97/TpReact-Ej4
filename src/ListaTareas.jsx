import { useState } from "react"
import { Tarea } from "./Tarea"

export const ListaTareas = () => {
    const [tareas, setTareas] = useState([])


  return (
    <>
        <ul>
            {tareas.map((tarea) => {
                <Tarea tarea={tarea}/>
            })}
        </ul>
    </>
  )
}
