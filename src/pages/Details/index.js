import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { dadosApi } from '../../utils/api'

// components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// styles
import { Container, Card, IconReturn } from './styles'

export default function Details () {
  const { name } = useParams()
  const history = useHistory()

  const [dados, setDados] = useState([])

  useEffect(() => {
    setDados(dadosApi)
  }, [name, dadosApi])

  return (
    <Container>
      <Header />
      <section>
        <div className="return" onClick={() => history.goBack()}><IconReturn /> <p>Voltar</p></div>
        <h1>Details</h1>
        {dados.filter(fruit => fruit.name === name).map(fruit => (
          <Card key={fruit.name}>
            <img src={fruit.photo} alt={fruit.name} loading="lazy"/>
            <div className="content">
              <h2>Calorias: {fruit.calories}</h2>
              <h3>{fruit.name}</h3>
              <p>Proteínas: {fruit.protein}</p>
              <p>Carboidratos: {fruit.carbohydrates}</p>
              <p>Fibras: {fruit.fiber}</p>
              <p>Gordura: {fruit.blubber}</p>
              <p>Porção: {fruit.portion}</p>
            </div>
          </Card>
        ))}
      </section>
      <Footer />
    </Container>
  )
}
