import { useParams } from 'react-router-dom'
import Annonces from '../../data.json'
import '../../styles/fiche-logement/index.css'

import Slider from '../../components/slider'
import Tags from '../../components/tags'
import Host from '../../components/host'
import Rating from '../../components/rating'
import Collapse from '../../components/collapse'
import Error from '../../components/error'

const Fichelogement = () => {
  const id_logement = useParams()
  const product = Annonces.find((product) => product.id === id_logement.id)
  if (product === undefined) {
    return <Error />
  }
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
        <div className="singleproduct_hostinforating">
          <Host host={host} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="collapsedivs">
        <Collapse title="Description" description={description} />
        <Collapse
          title="Equipements"
          description={
            <span className="a">
              {equipments.map((equi, index) => (
                <li className="collapse" key={index}>
                  {equi}
                </li>
              ))}
            </span>
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
