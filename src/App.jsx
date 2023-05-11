import { Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Form from "./pages/Form/Form";
import { useEffect, useState } from "react";

/*Genero aquí el estado para controlar los posts. Inicialmente lo hacía en el componente
Posts pero no conseguía actualizar los nuevos posts creados en Form, así que opté por crear 
aquí el estado y mandarlo como props a los otros componentes */
function App() {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    const resultado = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await resultado.json();

    setPosts([...res]);
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <NavBar />
      {posts.length > 0 && (
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/Form"
            element={<Form posts={posts} setPosts={setPosts} />}
          />
          <Route
            path="/Posts"
            element={<Posts posts={posts} setPosts={setPosts} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
