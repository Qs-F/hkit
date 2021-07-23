/** @jsx jsx */
import { jsx } from '@emotion/react'
import { FC, Fragment } from 'react'
import { useExample } from 'hookskit'

export const App: FC = () => {
  const { state, increment } = useExample()
  return (
    <Fragment>
      <p onClick={() => increment()}>{state}</p>
    </Fragment>
  )
}
