import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NumberStack from '../NumberStack.vue'

test('mount component', async () => {
  // given
  const entries = ['1', '2', '3']

  // when
  const wrapper = mount(NumberStack, {
    props: { modelValue: entries },
  })

  // then
  const inputs = wrapper.findAll('input')
  expect(inputs).toHaveLength(3)
  expect(inputs[0].element.value).toBe('1')
  expect(inputs[1].element.value).toBe('2')
  expect(inputs[2].element.value).toBe('3')
})
