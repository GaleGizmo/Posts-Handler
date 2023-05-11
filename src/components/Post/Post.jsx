import Button from "../Button/Button";
import "./Post.css";

const Post = ({ userId, title, body, onClick }) => {
  return (
    <div className="post">
      <p>
        Usuario: <span className="post-user">{userId}</span>
      </p>

      <p className="post-title">{title}</p>
      <p className="post-body">{body}</p>
      {/* controlamos que si se pasa onClick se muestre el boton de borrado*/}
      {onClick && (
        <Button
          onClick={onClick}
          specificClass={"delete-button"}
          content={"Borrar"}
        />
      )}
    </div>
  );
};

export default Post;
