import { Tarea } from "./Tarea";

export const ListaTareas = ({ tareas }) => {
  return (
    <>
      {tareas.length > 0 ? (
        <ul className="list-unstyled">
          {tareas.map((tarea, i) => (
            <Tarea tarea={tarea} key={i} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};
