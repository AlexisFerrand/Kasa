import { useParams } from 'react-router-dom'
import Annonces from '../../data.json'
import Bannierelogement from '../../components/banniere-logement'

function Fichelogement() {
  const id_logement = useParams()
  console.log(id_logement.id)
  
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
