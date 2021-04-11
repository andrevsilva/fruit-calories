import { BrowserRouter, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Details from './pages/Details'
import NotFound from './pages/404'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fruits/:name" component={Details} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
