
import Tareas from './components/tareas/tareas';
import Frontend from './components/front/frontend';
import TaskList from './components/fullstack]/Tasks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MySlider from './components/front/slider/slider';

function App() {

  const UrlImages = [
    'https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1504713721722-f73b4ccdfe6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1532458198880-add09ce3b2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1524767615-3d4139c938a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
  ]

  const tareasPrueba = [
    {"nombre":"Frontend", "objetivos":['Crea un slider de imágenes simple utilizando HTML, CSS y JavaScript (o un framework específico si lo prefieres). Debe permitir al usuario navegar entre diferentes imágenes.', 'Diseña una página de aterrizaje que sea responsiva y se vea bien en dispositivos móviles y de escritorio. Utiliza media queries para ajustar el diseño según el tamaño de la pantalla.']},
    {"nombre":"Backend", "objetivos":["Diseña una API REST básica para crear, leer, actualizar y eliminar (CRUD) información de usuarios. Utiliza un lenguaje de backend de tu elección y simula la base de datos con datos en memoria.", " Escribe un script que analice un archivo de logs y extraiga información específica, como el número de visitas a una página web o los errores más comunes."]},
    {"nombre":"FullStack", "objetivos":["Crea una pequeña aplicación de lista de tareas que permita a los usuarios agregar, ver y eliminar tareas. Utiliza un frontend sencillo para la interacción del usuario y un backend básico para almacenar las tareas."]}
];

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Tareas tareasTech={tareasPrueba}/>}/>
      <Route path='/frontend' element={<Frontend UrlImages={UrlImages}/>}/>
      <Route path= '/fullstack' element={<TaskList/>}/>
      <Route path= '/slider'  element = {<MySlider images={UrlImages}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
