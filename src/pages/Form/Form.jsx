import React, { useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//genero las nuevas ID buscando la más alta existente con un reduce y sumando uno//
const Form = ({ posts, setPosts }) => {
  const lastId = posts.reduce((prev, current) => {
    return prev.id > current.id ? prev : current;
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const submitForm = (data) => {
    const newId = lastId.id + 1;

    const newPost = { ...data, id: newId };
    setPosts([newPost, ...posts]);
    reset();
  };
  navigate("/posts");
  return (
    <div>
      <form className="add-post" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="userId">Usuario:</label>
        <input
          id="userId"
          type="text"
          {...register("userId", { required: true })}
        />
        {errors.userId && (
          <span className="error">El usuario es obligatorio</span>
        )}

        <label htmlFor="title">Título:</label>
        <input
          id="title"
          type="text"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="error">El título del post es obligatorio</span>
        )}

        <label htmlFor="body">Texto:</label>
        <textarea
          id="body"
          {...register("body", { required: true })}
        ></textarea>
        {errors.body && (
          <span className="error">El texto del post es obligatorio</span>
        )}

        <button type="submit">Añadir Post</button>
      </form>
    </div>
  );
};

export default Form;
