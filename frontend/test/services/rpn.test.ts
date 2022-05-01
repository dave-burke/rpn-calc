import { describe, it, expect } from 'vitest'
import rpn from '../../src/services/rpn'

describe('rpn', () => {
  // Remember, we use push and pop, so
  // - 'wip' is the last item
  // - 'op1' operates on the last non-empty item
  // - 'op2' operates on the last two non-empty items
  describe('appendNumberToWip', () => {
    it('appends a number to an empty wip', () => {
      // given
      const stack = ['1', '']

      // when
      const result = rpn.appendNumberToWip(stack, '2')

      // then
      expect(result[1]).toEqual('2')
    })
    it('appends a number to a non-empty wip', () => {
      // given
      const stack = ['1']

      // when
      const result = rpn.appendNumberToWip(stack, '2')

      // then
      expect(result[0]).toEqual('12')
    })
  })
})
