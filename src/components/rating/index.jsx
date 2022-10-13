import redstar from '../../assets/red-star.png'
import greystar from '../../assets/grey-star.png'
import '../../styles/rating/index.css'

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="stars">
      {stars.map((star) =>
        star <= rating ? (
          <img src={redstar} alt="" className="redstar" key={star.toString()} />
        ) : (
          <img
            src={greystar}
            alt=""
            className="greystar"
            key={star.toString()}
          />
        )
      )}
    </div>
  )
}

export default Rating
