# DI UNIDAD 2, ACTIVIDAD 7
## Ejercicio 1: completa la galería
Cuando presionamos en Gallery.js «Siguiente» en la última escultura, el código falla. Arregla la lógica para evitar el bloqueo. Puedes hacer esto agregando lógica adicional al controlador de evento o deshabilitando el botón cuando la acción no es posible.

Después de arreglar el error, agrega un botón «Anterior» que muestre la escultura anterior. No debería chocar con la primera escultura.

## Ejercicio 2: arreglar entradas de formulario atascadas
Cuando escribimos en los campos del formulario de Form.js, no obtenemos nada. Es como si los valores estuvieran «atascados» con cadenas vacías. El valor de la primera <entrada> está configurado para coincidir siempre con la variable firstName, y el valor de la segunda <entrada> está configurado para coincidir siempre con la variable lastName. Esto es correcto. Ambas entradas tienen controladores de eventos onChange, que intentan actualizar las variables en función de la última entrada del usuario (e.target.value). Sin embargo, las variables no parecen «recordar» sus valores entre renderizaciones. Solucionemos esto usando variables de estado en su lugar.

## Ejercicio 3: arregla un error
En FeedbackForm.js hay un pequeño formulario que se supone que permite al usuario dejar algunos comentarios. Cuando se envía el comentario, se supone que debe mostrar un mensaje de agradecimiento. Sin embargo, falla con un mensaje de error que dice «Se generaron menos Hooks de los esperados». ¿Puedes detectar el error y corregirlo?

## Ejercicio 4: eliminar estado innecesario
Cuando se hace clic en el botón de FeedbackForm2.js, este ejemplo debe solicitar el nombre del usuario y luego mostrar una alerta saludándolo. Intentaste usar el estado para mantener el nombre, pero por alguna razón siempre muestra «¡Hola!«.

Para corregir este código, elimina la variable de estado innecesaria. 

¿Puede explicar por qué esta variable de estado era innecesaria?
