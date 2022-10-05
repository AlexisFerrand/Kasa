import '../../styles/onglet-apropos/index.css'

const DivTitres = document.querySelectorAll('.DivTitre')
DivTitres.forEach((DivTitre) => {
  DivTitre.addEventListener('click', (event) => {
    DivTitre.classList.toggle('active')
  })
})

function Onglet() {
  return (
    <section className="SectionOnlget">
      <div className="DivOnglet">
        <div className="DivTitre">
          <h3>Fiabilité</h3>
        </div>
        <div className="DivText">
          <div className="DivTextContent">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
      </div>
      <div className="DivOnglet">
        <div className="DivTitre">
          <h3>Respect</h3>
        </div>
        <div className="DivText">
          <div className="DivTextContent">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>{' '}
        </div>
      </div>
      <div className="DivOnglet">
        <div className="DivTitre">
          <h3>Service</h3>
        </div>
        <div className="DivText">
          <div className="DivTextContent">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>{' '}
        </div>
      </div>
      <div className="DivOnglet">
        <div className="DivTitre">
          <h3>Sécurité</h3>
        </div>
        <div className="DivText">
          <div className="DivTextContent">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>{' '}
        </div>
      </div>
    </section>
  )
}

export default Onglet
