import Node from './Node'

export default {
  back (node: Node<string[]>) {
    return node.prev ?? node
  },
  forward (node: Node<string[]>) {
    return node.next ?? node
  },
  append (current: Node<string[]>, next: string[]) {
    const nextNode = new Node<string[]>(next, current)
    current.next = nextNode
    return nextNode
  }
}
