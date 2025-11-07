import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
let sculpture = sculptureList[index];
  function handleNextClick() {
        setIndex(index + 1);
         if (index+1>= sculptureList.length){
          setIndex(0)
      
    }
  }
  function handlePrevClick() {
    setIndex(index - 1);
     if (index-1<= -1){
          setIndex(sculptureList.length-1)
      
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  
  return (
    <>
      <button onClick={handleNextClick}>
        Siguiente
      </button>
      <button onClick={handlePrevClick}>
        Anterior
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar' : 'Mostrar'} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}