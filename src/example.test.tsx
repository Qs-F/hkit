import { expect, test } from '@jest/globals'
import { renderHook, act } from '@testing-library/react-hooks/dom'
import { useExample } from '/example'
import { INITIAL_VALUE } from '/value'

test('initital state', () => {
  const { result } = renderHook(() => useExample())
  expect(result.current.state).toBe(INITIAL_VALUE)
})

test('increment', () => {
  const { result } = renderHook(() => useExample())
  expect(result.current.state).toBe(INITIAL_VALUE)
  act(() => {
    result.current.increment()
  })
  expect(result.current.state).toBe(INITIAL_VALUE + 1)
})
