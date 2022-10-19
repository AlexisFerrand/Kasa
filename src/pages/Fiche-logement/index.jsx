import { useParams } from 'react-router-dom'
import Annonces from '../../data.json'
import Bannierelogement from '../../components/Banniere-logement'
import { useState, useEffect } from 'react'
import '../../styles/fiche-logement/index.css'

import Slider from '../../components/Slider'
import Tags from '../../components/Tags'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

const Fichelogement = () => {
  const id_logement = useParams()
  console.log(id_logement)
  const product = Annonces.find((product) => product.id === id_logement.id)
  const { title, location, rating, host, equipments, description, pictures } =
    product

  return (
    <div className="singleproduct">
      <Slider slides={pictures} />
      <div className="singleproduct__content">
        <div className="singleproduct__informations">
          <h1 className="singleproduct__title">{title}</h1>
          <p className="singleproduct__text">{location}</p>
          <div className="singleproduct_equipment">
            {product.tags.map((tag, index) => (
              <Tags getTags={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="singleproduct_hostinfo+rating">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="collapsedivs">
        <Collapse title="Description" description={description} />
        <Collapse
          title="Equipements"
          description={
            <ul className="a">
              {equipments.map((equi, index) => (
                <li className="collapse" key={index}>
                  {equi}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}

export default Fichelogement

//<section>
//{Annonces.id_logement.id.map((house, index) => {
//    <Bannierelogement
//key= {`${house}-${index}`}
//pictures=

//   />
//})}

//</section>
//{annoncechoisi.map((annonce, index) => (
//  <Bannierelogement
//  pictures={annonce.pictures}
//alt={`${annonce.title} + ${index}`}
//  key={`${annonce.id} + ${annonce.title} `}
//   />
// ))}
