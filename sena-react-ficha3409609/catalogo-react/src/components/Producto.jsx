export default function Producto({ nombres, descripciones, precios, categorias, imagen }) {
  return (
    <article className="producto">
      <img src={imagen} alt={nombres} />
      <small>{categorias}</small>
      <h2>{nombres}</h2>
      <p>{descripciones}</p>
      <strong>${precios}</strong>
    </article>
  )
}