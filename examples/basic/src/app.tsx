import { FC, Fragment } from 'react'
import { useExample } from '@qs-f/hookskit'

export const App: FC = () => {
  const { state, increment, Component } = useExample()
  return (
    <Fragment>
      <Component />
      <p onClick={() => increment()}>{state}</p>
    </Fragment>
  )
}
