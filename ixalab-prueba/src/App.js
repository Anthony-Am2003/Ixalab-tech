
import Tareas from './components/tareas/tareas';
import Frontend from './components/front/frontend';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const tareasPrueba = [
    {"nombre":"Frontend", "objetivos":['Crea un slider de imágenes simple utilizando HTML, CSS y JavaScript (o un framework específico si lo prefieres). Debe permitir al usuario navegar entre diferentes imágenes.', 'Diseña una página de aterrizaje que sea responsiva y se vea bien en dispositivos móviles y de escritorio. Utiliza media queries para ajustar el diseño según el tamaño de la pantalla.']},
    {"nombre":"Backend", "objetivos":["Diseña una API REST básica para crear, leer, actualizar y eliminar (CRUD) información de usuarios. Utiliza un lenguaje de backend de tu elección y simula la base de datos con datos en memoria.", " Escribe un script que analice un archivo de logs y extraiga información específica, como el número de visitas a una página web o los errores más comunes."]},
    {"nombre":"FullStack", "objetivos":["Crea una pequeña aplicación de lista de tareas que permita a los usuarios agregar, ver y eliminar tareas. Utiliza un frontend sencillo para la interacción del usuario y un backend básico para almacenar las tareas."]}
];

  return (
    <Tareas tareasTech={tareasPrueba}/>
  );
}

export default App;
