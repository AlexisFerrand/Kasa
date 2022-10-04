import '../../styles/onglet-apropos/index.css'
import ArrayUp from '../../assets/Vector.png'
import { useState } from 'react'

function Onglet() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((o) => !o)
  return (
    <section className="SectionOnlget">
      <div className="DivOnglet">
        <div className="DivTitre" onClick={toggle} visible={open}>
          <h3>Fiabilité</h3>
          <img src={ArrayUp} alt="array" className="ImgArray" />
        </div>
        <div className="DivText">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
      </div>
      <div className="DivOnglet">
        <div className="DivTitre">
          <h3>Respect</h3>
          <img src={ArrayUp} alt="array" className="ImgArray" />
        </div>
        <div className="DivText">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
      </div>
      <div className="DivOnglet">
        <div className="DivTitre">
          <h3>Service</h3>
          <img src={ArrayUp} alt="array" className="ImgArray" />
        </div>
        <div className="DivText">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </div>
      </div>
      <div className="DivOnglet">
        <div className="DivTitre">
          <h3>Sécurité</h3>
          <img src={ArrayUp} alt="array" className="ImgArray" />
        </div>
        <div className="DivText">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Onglet
