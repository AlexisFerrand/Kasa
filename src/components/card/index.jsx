import '../../styles/card/index.css'
import Annonces from '../../data.json'
import { Slide } from 'react-slideshow-image'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Card() {
  const [currentIndex, setCurrentUser] = useState(0)
  //const URLAnnonce = `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-`
  return (
    <section className="SectionCard">
      <section className="SectionCardIn">
        {Annonces.map((annonce, index) => {
          //const AnnonceIndex = index + 1
          return (
            <article className="Annonce" currentIndex={index}>
              <img
                src={annonce.cover}
                alt={annonce.title + index}
                key={annonce.id}
              />
              <p>{annonce.title}</p>
            </article>
          )
        })}
      </section>
    </section>
  )
}

export default Card
