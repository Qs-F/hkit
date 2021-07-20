import { useState } from 'react'

export const useExample = (): {
  state: number
  increment: () => void
} => {
  const [state, setState] = useState(0)
  const increment = () => setState((prev) => prev + 1)
  return { state, increment }
}
