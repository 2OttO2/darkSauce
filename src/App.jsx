import { useState , useEffect} from 'react';
import './App.css';
import BuildsCard from "./components/BuildsCard/BuildsCard.jsx";
import dad from './assets/dad.png';
import dex from './assets/dex.png';
import logan from './assets/logan.png';
import cj from './assets/cj.png';
import padre from './assets/padre.png';
import gostei from './assets/gostei.png';

function App() {

  const [listaSauce, setListaSauce] = useState([
    {nome: "DADDY", imagem:dad, gamemode:"daddyissues", daddylike:gostei, isLiked:false},
    {nome: "FIREBAL", imagem:logan, gamemode:"Pwepew", daddylike:gostei, isLiked:false},
    {nome: "FATFCK", imagem:cj , gamemode:"bonk" , daddylike:gostei, isLiked:false},
    {nome: "4GWYNEVERE", imagem:padre , gamemode:"pain" , daddylike:gostei, isLiked:false},
    {nome: "NINJA OBESO", imagem:dex , gamemode:"kys" , daddylike:gostei, isLiked:false}
  ])

  const [builds, setBuilds] = useState(0)
    useEffect(()=> {
    setBuilds(listaSauce.length);
  },[]);

  return (
    <>
      <h1 id="titulo" >Dark Sauce</h1>
      <h2>BUILDS DISPONIVEIS = {builds}</h2>
      <section id="center">
      
      {
        listaSauce.map((sauce,index) => (
          <BuildsCard
          key={index}
          nome={sauce.nome}
          imagem={sauce.imagem}
          gamemode={sauce.gamemode}
          daddylike={sauce.daddylike}
          isLiked={sauce.isLiked}
          />
        ))
      }


      </section>

    </>
  )
}

export default App
