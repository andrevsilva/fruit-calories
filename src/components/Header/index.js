import { useState } from 'react'

// styles
import { Container, IconMenu, IconCloseMenu } from './styles'

export default function Header () {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Container>
      <IconMenu onClick={() => setOpenMenu(!openMenu)} />
      <nav className={openMenu ? 'openMenu' : null}>
        <IconCloseMenu className="closeMenu" onClick={() => setOpenMenu(!openMenu)} />
        <ul>
          <li><a href="/">Frutas</a></li>
          <li><a href="/ferramentas">Ferramentas</a></li>
        </ul>
      </nav>
      <h1>Frutas</h1>
    </Container>
  )
}
