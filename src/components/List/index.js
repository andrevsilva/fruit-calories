import PropTypes from 'prop-types'

// styles
import { Container } from './styles'

export default function List (props) {
  return (
    <Container href={`/fruits/${props.name}`}>
      <div className="description">
        <h3>{props.name}</h3>
        <p>Clique para saber mais</p>
      </div>
      <img src={props.img} alt={props.name}/>
    </Container>
  )
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
