import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h2>¡Gracias!</h2>
  } else {
    // eslint-disable-next-line
    
    return (
      <form onSubmit={e => {
         e.preventDefault();
        alert(`Enviando: "${message}"`);
        setIsSent(true);
       
      }}>
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="Submit" >Enviar</button>
      </form>
     
    );
  }
}
