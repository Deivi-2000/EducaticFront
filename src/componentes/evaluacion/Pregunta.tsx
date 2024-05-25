import React from 'react';

interface PreguntaObject {
    pregunta: string,
    opciones: string[],
    handleAnswer: Function
}

export const Pregunta = (pregunta: PreguntaObject) => {

  return (
    <div>
      <h2>{pregunta.pregunta}</h2>
      {pregunta.opciones.map((opcion, index) => (
        (opcion != null) ?
        <div key={index}>
          <input 
            type="radio" 
            id={pregunta.pregunta + opcion} 
            name={pregunta.pregunta} 
            value={opcion}
            onChange={(e) => {
                pregunta.handleAnswer(e.target.value)}
            }
          />
          <label htmlFor={opcion}>{opcion}</label>
        </div>
        : null
      ))}
    </div>
  );
};
