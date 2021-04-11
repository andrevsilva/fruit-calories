import { NavLink } from 'react-router-dom'
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
          <li><NavLink to="/">Frutas</NavLink></li>
          <li><NavLink to="/ferramentas">Ferramentas</NavLink></li>
        </ul>
      </nav>
      <h1>Frutas</h1>
    </Container>
  )
}
