/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hydrate, render } from 'react-dom'
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
