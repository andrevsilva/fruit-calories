import { useParams } from 'react-router-dom'

export default function Details () {
  const { name } = useParams()

  return (
    <>
      <h1>Detalhes</h1>
      <span>{name}</span>
    </>
  )
}
