import { useHistory } from 'react-router-dom'

export default function NotFound () {
  const history = useHistory()

  return <button onClick={() => { history.goBack() }}>Voltar </button>
}
