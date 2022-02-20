import { FC } from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { App } from './app'

const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>
)

const root = document.getElementById('app')

if (root?.hasChildNodes()) {
  render(<Router />, root)
} else {
  hydrate(<Router />, root)
}
