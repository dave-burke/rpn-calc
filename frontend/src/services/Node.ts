export default class Node<T> {
  prev: Node<T> | undefined
  next: Node<T> | undefined
  data: T

  constructor(data: T, prev?: Node<T>, next?: Node<T>) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}
