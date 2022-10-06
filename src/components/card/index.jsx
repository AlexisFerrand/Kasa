import '../../styles/card/index.css'
import Annonces from '../../data.json'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Card() {
  const [currentIndex, setCurrentUser] = useState(0)
  const { id_logement } = useParams()
  //const URLAnnonce = `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-`
  return (
    <section className="SectionCard">
      <section className="SectionCardIn">
        {Annonces.map((annonce, index) => {
          //const AnnonceIndex = index + 1
          return (
            <article className="Annonce" currentIndex={index}>
              <a href={`/housing/${annonce.id}`}>
                <img
                  src={annonce.cover}
                  alt={annonce.title + index}
                  key={annonce.id}
                />
                <p>{annonce.title}</p>
              </a>
            </article>
          )
        })}
      </section>
    </section>
  )
}

export default Card
