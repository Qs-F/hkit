import { expect, test } from '@jest/globals'
import { renderHook, act } from '@testing-library/react-hooks/dom'
import { useExample } from '/example'

test('initital state', () => {
  const { result } = renderHook(() => useExample())
  expect(result.current.state).toBe(0)
})

test('increment', () => {
  const { result } = renderHook(() => useExample())
  expect(result.current.state).toBe(0)
  act(() => {
    result.current.increment()
  })
  expect(result.current.state).toBe(1)
})
