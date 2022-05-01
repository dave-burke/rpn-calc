
function appendNumberToWip (stack: string[], x: string): string[] {
  const result = [...stack]
  const wip = result.pop() ?? ''
  result.push(wip + x)
  return result
}

function appendDecimalToWip (stack: string[]): string[] {
  const result = [...stack]
  const wip = result.pop() ?? ''
  if (wip.includes('.') || wip === '') {
    result.push(wip)
  } else {
    result.push(wip + '.')
  }
  return result
}

function backspaceWip (stack: string[]): string[] {
  const result = stack.filter(it => it)
  const wip = result.pop() ?? ''
  result.push(wip.slice(0, -1))
  return result
}

function pushWip (stack: string[]): string[] {
  const result = stack.filter(it => it)
  result.push('')
  return result
}

function drop (stack: string[]): string[] {
  const result = stack.filter(it => it)
  result.pop()
  result.push('')
  return result
}

function swap (stack: string[]): string[] {
  const result = stack.filter(it => it)
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

function op1 (stack: string[], op: (x: number) => number): string[] {
  const result = stack.filter(it => it)
  if (result.length < 1) {
    return stack
  }
  const x = Number(result.pop())
  result.push(String(op(x)))
  result.push('')
  return result
}

function op2 (stack: string[], op: (a: number, b: number) => number): string[] {
  const result = stack.filter(it => it)
  if (result.length < 2) {
    return stack
  }
  const a = Number(result.pop())
  const b = Number(result.pop())
  result.push(String(op(a, b)))
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
  negate: (stack: string[]) => op1(stack, (x) => x * -1),
  invert: (stack: string[]) => op1(stack, (x) => 1 / x),
  timesTen: (stack: string[]) => op1(stack, (x) => x * 10),
  overTen: (stack: string[]) => op1(stack, (x) => x / 10),
  square: (stack: string[]) => op1(stack, (x) => Math.sqrt(x)),
  add: (stack: string[]) => op2(stack, (a, b) => a + b),
  subtract: (stack: string[]) => op2(stack, (a, b) => a - b),
  multiply: (stack: string[]) => op2(stack, (a, b) => a * b),
  divide: (stack: string[]) => op2(stack, (a, b) => b / a),
  pow: (stack: string[]) => op2(stack, (a, b) => Math.pow(b, a))
}
