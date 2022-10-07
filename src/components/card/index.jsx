import '../../styles/card/index.css'
import Annonces from '../../data.json'

function Card() {
  //const URLAnnonce = `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-`
  return (
    <section className="SectionCard">
      <section className="SectionCardIn">
        {Annonces.map((annonce, index) => {
          //const AnnonceIndex = index + 1
          return (
            <article className="Annonce" key={annonce.id + index}>
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
