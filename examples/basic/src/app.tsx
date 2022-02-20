import { FC, Fragment } from 'react'
import { useExample } from '@qs-f/hkit'

export const App: FC = () => {
  const { state, increment, Component } = useExample()
  return (
    <Fragment>
      <Component />
      <p onClick={() => increment()}>{state}</p>
    </Fragment>
  )
}
