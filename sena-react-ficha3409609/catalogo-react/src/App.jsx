import './App.css'
import Producto from './components/Producto'
import imgBase from './components/base.jpg'
import imgPestamina from './components/pestañina.jpg' 
import imgRubor from './components/rubor.png'
import imglabial from './components/labial.avif'
import imgSombras from './components/sombras.jpg'


const productos = [
  {
    id: 1,
    nombre: 'Base Líquida',
    descripcion: 'Cobertura media y acabado natural.',
    precio: '35.000',
    categoria: 'Rostro',
    imagen: imgBase
  },
  {
    id: 2,
    nombre: 'Labial Mate',
    descripcion: 'Color intenso de larga duración.',
    precio: '18.000',
    categoria: 'Maquillaje',
    imagen: imglabial
  },
  {
    id: 3,
    nombre: 'Pestañina',
    descripcion: 'Efecto volumen y curvatura.',
    precio: '22.000',
    categoria: 'Ojos',
    imagen: imgPestamina
  },
  {
    id: 4,
    nombre: 'Rubor',
    descripcion: 'Tono rosado radiante.',
    precio: '16.000',
    categoria: 'Rostro',
    imagen: imgRubor
  },
  {
    id: 5,
    nombre: 'Paleta de Sombras',
    descripcion: 'Tonos neutros pigmentados.',
    precio: '42.000',
    categoria: 'Ojos',
    imagen: imgSombras
  }
]
function App() {
  return (
    <main className="catalogo-container">
      <h1>Catálogo de Productos</h1>

      <div className="catalogo-grid">
        {productos.map((prod) => (
          <Producto
            key={prod.id}
            nombres={prod.nombre}
            descripciones={prod.descripcion}
            precios={prod.precio}
            categorias={prod.categoria}
            imagen={prod.imagen}
          />
        ))}
      </div>
    </main>
  )
}

export default App