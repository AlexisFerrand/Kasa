import '../../styles/card/index.css'
import Annonces from '../../data.json'

function Card() {
  return (
    <section className="SectionCard">
      <section className="SectionCardIn">
        {Annonces.map((annonce, index) => {
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
