import { useHistory } from 'react-router-dom'

// styles
import { Container } from './styles'

export default function NotFound () {
  const history = useHistory()

  return (
    <Container>
      <h1>404</h1>
      <button onClick={() => { history.goBack() }}>Voltar</button>
    </Container>
  )
}
