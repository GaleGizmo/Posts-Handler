import React from "react";
import "./Home.css";
import Post from "../../components/Post/Post";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = ({ posts }) => {
  const navigate = useNavigate();
  //con Math.random cojo un post al azar para mostrarlo en la home//
  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  return (
    <div className="home">
      <h3>Bienvenido a...</h3>
      <h1 className="home__title">LOS MEJORES POSTS DE INTERNET</h1>
      <h2>Post destacado:</h2>
      <Post
        userId={randomPost.userId}
        title={randomPost.title}
        body={randomPost.body}
      />
      <p className="home__subtitle">¿Qué quieres hacer ahora?</p>
      <Button
        onClick={() => navigate("/Posts")}
        content="Ver posts"
        specificClass={"home__button"}
      />
      <Button
        onClick={() => navigate("/Form")}
        content="Crear un post"
        specificClass={"home__button"}
      />
    </div>
  );
};

export default Home;
