import { useState } from 'react'
import { INITIAL_VALUE } from '/value'

export const useExample = (): {
  state: number
  increment: () => void
} => {
  const [state, setState] = useState(INITIAL_VALUE)
  const increment = () => setState((prev) => prev + 1)
  return { state, increment }
}
