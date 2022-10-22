import '../../styles/error/index.css'

function Error() {
  return (
    <section className="error">
      <h2>404</h2>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </section>
  )
}
export default Error
