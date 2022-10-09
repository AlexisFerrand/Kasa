import { useParams } from 'react-router-dom'
import Annonces from '../../data.json'
import Bannierelogement from '../../components/banniere-logement'
import { useState, useEffect } from 'react'


function Fichelogement() {
  const id_logement = useParams()
  console.log(id_logement.id)
  const [data, setData] = useState()
  const [isDataLoading, setSataLoading] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSataLoading(true)
    const annoncechoisi = Annonces.find((house) => house.id === id_logement.id)
    setData(annoncechoisi)
    console.log(data)
    setSataLoading(false)
  }, [data, id_logement.id])

  // eslint-disable-next-line no-lone-blocks
  return (
    <section>
      {data.pictures.map((housing, index) => (
        <Bannierelogement
          pictures={housing}
          alt={`${housing} + ${index}`}
          key={`${housing} + ${index}`}
        />
      ))}
    </section>
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
