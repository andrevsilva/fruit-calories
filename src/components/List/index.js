import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// styles
import { Container } from './styles'

export default function List (props) {
  return (
    <NavLink to={`/fruits/${props.name}`}>
      <Container>
        <div className="description">
          <h3>{props.name}</h3>
          <p>Clique para saber mais</p>
        </div>
        <img src={props.img} alt={props.name} loading="lazy"/>
      </Container>
    </NavLink>
  )
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}
