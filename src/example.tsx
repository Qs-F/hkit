import { useState, VFC } from 'react'
import { INITIAL_VALUE } from '/value'

export const useExample = (): {
  state: number
  increment: () => void
  Component: VFC
} => {
  const [state, setState] = useState(INITIAL_VALUE)
  const increment = () => setState((prev) => prev + 1)
  const Component: VFC = () => <div>Hello</div>
  return { state, increment, Component }
}
