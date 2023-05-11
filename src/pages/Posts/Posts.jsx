import useFilteredPosts from "../../Hooks/FilterPosts";
import Filters from "../../components/Filters/Filters";
import Post from "../../components/Post/Post";
import "./posts.css";
import { useState } from "react";

const Posts = ({ posts, setPosts }) => {
  //Creo la funcion para eliminar el post y la paso por props a cada post individual//
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  //estados para manejar las busquedas por usuario, titulo y texto//
  const [searchUser, setSearchUser] = useState("");
  const [searchBody, setSearchBody] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [filtersActive, setFiltersActive] = useState(false);
  const handleReset = () => {
    setSearchUser("");
    setSearchBody("");
    setSearchTitle("");
    setFiltersActive(false);
  };

  /*Hook personalizado para la lógica de filtrado. Ni de coña pensé que fuera a hacer un 
  hook personalizado, pero me estaba pasando de las 70 lineas jajaja*/
  const filteredPosts = useFilteredPosts(
    posts,
    searchUser,
    searchBody,
    searchTitle
  );
  return (
    <div className="container">
      <Filters
        setSearchUser={setSearchUser}
        setSearchTitle={setSearchTitle}
        setSearchBody={setSearchBody}
        setFiltersActive={setFiltersActive}
        handleReset={handleReset}
        filtersActive={filtersActive}
      />
      <div className="posts">
        {filteredPosts.map((post) => {
          return (
            <Post
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              onClick={() => deletePost(post.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
