import "./BuildsCard.css";
import {useState} from 'react';

function BuildsCard({ nome, imagem, gamemode, daddylike }) {
  
  const [isLiked, setIsLiked] = useState(false);   

  const goustei = () => {
    setIsLiked(!isLiked);       
  };

  return (
    <div id="meajuda">  
      <h2 id="nome">{nome}</h2>
      <img src={imagem} width={300} height={300} alt={nome} />
      <p>GAMEMODE : {gamemode}</p>
      <button className={isLiked? "like": "dislike"} onClick={goustei} >
        <img 
          src={daddylike} 
          width={50} 
          height={50}
          className={isLiked? "like" : "dislike"}
        />
      </button>
    </div>
  );
}

export default BuildsCard;
