import Decimal from 'decimal.js-light'

function appendNumberToWip(stack: string[], x: string): string[] {
  const result = [...stack]
  const wip = result.pop() ?? ''
  result.push(wip + x)
  return result
}

function appendDecimalToWip(stack: string[]): string[] {
  const result = [...stack]
  const wip = result.pop() ?? ''
  if (wip.includes('.')) {
    result.push(wip)
  } else {
    result.push(wip + '.')
  }
  return result
}

function backspaceWip(stack: string[]): string[] {
  const result = stack.filter((it) => it)
  const wip = result.pop() ?? ''
  result.push(wip.slice(0, -1))
  return result
}

function pushWip(stack: string[]): string[] {
  const result = [...stack]
  const top = result.pop()
  if (top === undefined) {
    // empty stack -- this shouldn't happen, but if it does just push an empty string.
  } else if (top === '') {
    // no wip
    if (result.length > 0) {
      // duplicate last value
      result.push(result[result.length - 1])
    } // else there's no value to duplicate
  } else {
    result.push(top)
  }
  result.push('')
  return result
}

function drop(stack: string[]): string[] {
  const result = stack.filter((it) => it)
  result.pop()
  result.push('')
  return result
}

function swap(stack: string[]): string[] {
  const result = stack.filter((it) => it)
  if (result.length < 2) {
    return stack
  }
  const a = result.pop()
  const b = result.pop()
  if (a !== undefined) result.push(a)
  if (b !== undefined) result.push(b)
  result.push('')
  return result
}

function op1(stack: string[], op: (x: Decimal) => Decimal): string[] {
  const result = stack.filter((it) => it)
  if (result.length < 1) {
    return stack
  }
  const x = new Decimal(result.pop() ?? NaN)
  result.push(op(x).toString())
  result.push('')
  return result
}

function op2(stack: string[], op: (a: Decimal, b: Decimal) => Decimal): string[] {
  const result = stack.filter((it) => it)
  if (result.length < 2) {
    return stack
  }
  const a = new Decimal(result.pop() ?? NaN)
  const b = new Decimal(result.pop() ?? NaN)
  result.push(op(a, b).toString())
  result.push('')
  return result
}

export default {
  pushWip,
  drop,
  swap,
  appendNumberToWip,
  appendDecimalToWip,
  backspaceWip,
  negate: (stack: string[]) => op1(stack, (x) => x.times(new Decimal(-1))),
  invert: (stack: string[]) => op1(stack, (x) => new Decimal(1).dividedBy(x)),
  timesTen: (stack: string[]) => op1(stack, (x) => x.times(new Decimal(10))),
  overTen: (stack: string[]) => op1(stack, (x) => x.dividedBy(new Decimal(10))),
  squareRoot: (stack: string[]) => op1(stack, (x) => x.squareRoot()),
  add: (stack: string[]) => op2(stack, (a, b) => b.plus(a)),
  subtract: (stack: string[]) => op2(stack, (a, b) => b.minus(a)),
  multiply: (stack: string[]) => op2(stack, (a, b) => b.times(a)),
  divide: (stack: string[]) => op2(stack, (a, b) => b.dividedBy(a)),
  pow: (stack: string[]) => op2(stack, (a, b) => b.pow(a)),
}
