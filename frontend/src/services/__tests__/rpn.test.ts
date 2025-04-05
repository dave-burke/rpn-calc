import { describe, it, expect } from 'vitest'
import rpn from '../rpn'

// These are mostly 'happy path' tests, because the point is not to validate the
// underlying math, which we trust decimal.js to do correctly.

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
  describe('appendDecimalToWip', () => {
    it("appends a decimal if there isn't one already", () => {
      // given
      const stack = ['1']

      // when
      const result = rpn.appendDecimalToWip(stack)

      // then
      expect(result[0]).toEqual('1.')
    })
    it('does not append a decimal if one is already present', () => {
      // given
      const stack = ['1.']

      // when
      const result = rpn.appendDecimalToWip(stack)

      // then
      expect(result[0]).toEqual('1.')
    })
    it('appends a decimal to an empty string', () => {
      // given
      const stack = ['']

      // when
      const result = rpn.appendDecimalToWip(stack)

      // then
      expect(result).toEqual(['.'])
    })
  })
  describe('backspaceWip', () => {
    it('deletes a digit', () => {
      // given
      const stack = ['1']

      // when
      const result = rpn.backspaceWip(stack)

      // then
      expect(result).toEqual([''])
    })
    it('does nothing if wip is empty', () => {
      // given
      const stack = ['']

      // when
      const result = rpn.backspaceWip(stack)

      // then
      expect(result).toEqual(stack)
    })
  })
  describe('pushWip', () => {
    it('does nothing to an empty stack', () => {
      // given
      const stack = ['']

      // when
      const result = rpn.pushWip(stack)

      // then
      expect(result).toEqual(stack)
    })
    it('duplicates second value if the first entry has no value', () => {
      // given
      const stack = ['1', '']

      // when
      const result = rpn.pushWip(stack)

      // then
      expect(result).toEqual(['1', '1', ''])
    })
    it('adds an empty entry if the top entry has a value', () => {
      // given
      const stack = ['1', '2']

      // when
      const result = rpn.pushWip(stack)

      // then
      expect(result).toEqual(['1', '2', ''])
    })
  })
  describe('drop', () => {
    it('drops the top entry ignoring empty values', () => {
      // given
      const stack = ['1', '2', '']

      // when
      const result = rpn.drop(stack)

      // then
      expect(result).toEqual(['1', ''])
    })
    it('drops the top entry if non-empty', () => {
      // given
      const stack = ['1', '2']

      // when
      const result = rpn.drop(stack)

      // then
      expect(result).toEqual(['1', ''])
    })
    it('does not drop the last empty value', () => {
      // given
      const stack = ['']

      // when
      const result = rpn.drop(stack)

      // then
      expect(result).toEqual([''])
    })
  })
  describe('swap', () => {
    it('swaps the top two values', () => {
      // given
      const stack = ['1', '2', '3']

      // when
      const result = rpn.swap(stack)

      // then
      expect(result).toEqual(['1', '3', '2', ''])
    })
    it('swaps the top two values ignoring empty', () => {
      // given
      const stack = ['1', '2', '3', '']

      // when
      const result = rpn.swap(stack)

      // then
      expect(result).toEqual(['1', '3', '2', ''])
    })
    it('does nothing when there are less than two values', () => {
      // given
      const stack = ['1', '']

      // when
      const result = rpn.swap(stack)

      // then
      expect(result).toEqual(stack)
    })
  })
  describe('negate', () => {
    it('turns a negative number positive', () => {
      // given
      const stack = ['-1', '']

      // when
      const result = rpn.negate(stack)

      // then
      expect(result).toEqual(['1', ''])
    })
    it('turns a positive number negative', () => {
      // given
      const stack = ['1', '']

      // when
      const result = rpn.negate(stack)

      // then
      expect(result).toEqual(['-1', ''])
    })
  })
  describe('invert', () => {
    it('inverts an integer', () => {
      // given
      const stack = ['2', '']

      // when
      const result = rpn.invert(stack)

      // then
      expect(result).toEqual(['0.5', ''])
    })
    it('inverts a fraction', () => {
      // given
      const stack = ['.5', '']

      // when
      const result = rpn.invert(stack)

      // then
      expect(result).toEqual(['2', ''])
    })
  })
  describe('timesTen', () => {
    it('multiplies by ten', () => {
      // given
      const stack = ['1']

      // when
      const result = rpn.timesTen(stack)

      // then
      expect(result).toEqual(['10', ''])
    })
  })
  describe('overTen', () => {
    it('divides by ten', () => {
      // given
      const stack = ['10']

      // when
      const result = rpn.overTen(stack)

      // then
      expect(result).toEqual(['1', ''])
    })
  })
  describe('squareRoot', () => {
    it('calculates the square root', () => {
      // given
      const stack = ['25']

      // when
      const result = rpn.squareRoot(stack)

      // then
      expect(result).toEqual(['5', ''])
    })
  })
  describe('add', () => {
    it('avoids common floating point errors', () => {
      // given
      const stack = ['0.1', '0.2']

      // when
      const result = rpn.add(stack)

      // then
      expect(result).toEqual(['0.3', ''])
    })
  })
  describe('subtract', () => {
    it('subtracts the last number from the penultimate number', () => {
      // given
      const stack = ['5', '2']

      // when
      const result = rpn.subtract(stack)

      // then
      expect(result).toEqual(['3', ''])
    })
  })
  describe('multiply', () => {
    it('multiplies the last two numbers', () => {
      // given
      const stack = ['5', '2']

      // when
      const result = rpn.multiply(stack)

      // then
      expect(result).toEqual(['10', ''])
    })
  })
  describe('divide', () => {
    it('divides the penultimate number by the last number', () => {
      // given
      const stack = ['10', '5']

      // when
      const result = rpn.divide(stack)

      // then
      expect(result).toEqual(['2', ''])
    })
  })
  describe('pow', () => {
    it('raises the penultimate number to the power of the last number', () => {
      // given
      const stack = ['3', '4']

      // when
      const result = rpn.pow(stack)

      // then
      expect(result).toEqual(['81', ''])
    })
    // TODO This actually fails! decimal.js-light returns 4.9999999999999
    it.skip('handles fractional exponents', () => {
      // given
      const stack = ['25', '0.5']

      // when
      const result = rpn.pow(stack)

      // then
      expect(result).toEqual(['5', ''])
    })
  })
})
