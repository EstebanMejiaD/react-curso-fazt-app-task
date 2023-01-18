import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto ">
      <form className="bg-slate-800 p-10 mb-4 rounded-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">Crea tu tarea</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Descripción"
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"

      ></textarea>
      <button className="bg-indigo-300 py-1 px-2 text-white rounded-md ">Guarda tu tarea</button>
    </form>
    </div>
  );
};

export default TaskForm;
