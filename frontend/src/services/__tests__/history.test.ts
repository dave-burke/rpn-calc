import Node from '../Node'
import history from '../history'
import { describe, expect, it } from 'vitest'

describe('history', () => {
  describe('back', () => {
    it('returns the previous node, if there is one', () => {
      // given
      const first: Node<string[]> = new Node(['first'])
      const second: Node<string[]> = new Node(['second'], first)

      // when
      const result: Node<string[]> = history.back(second)

      // then
      expect(result).toEqual(first)
    })
    it('returns the current node if there is no previous node', () => {
      // given
      const first: Node<string[]> = new Node(['first'])

      // when
      const result: Node<string[]> = history.back(first)

      // then
      expect(result).toEqual(first)
    })
  })
  describe('forward', () => {
    it('returns the next node, if there is one', () => {
      // given
      const first: Node<string[]> = new Node(['first'])
      const second: Node<string[]> = new Node(['second'], first)
      first.next = second

      // when
      const result: Node<string[]> = history.forward(first)

      // then
      expect(result).toEqual(second)
    })
    it('returns the current node if there is no next node', () => {
      // given
      const first: Node<string[]> = new Node(['first'])

      // when
      const result: Node<string[]> = history.forward(first)

      // then
      expect(result).toEqual(first)
    })
  })
  describe('append', () => {
    it('adds the given value after the given node', () => {
      // given
      const first: Node<string[]> = new Node(['first'])

      // when
      const result: Node<string[]> = history.append(first, ['second'])

      // then
      expect(first.next).toEqual(result)
      expect(result.prev).toEqual(first)
    })
  })
})
