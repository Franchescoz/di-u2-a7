

export default function FeedbackForm() {
  
  let name=""
  function handleClick() {
    name=prompt('¿Cuál es tu nombre?');
    alert(`Hola, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Saludar
    </button>
  );
}
