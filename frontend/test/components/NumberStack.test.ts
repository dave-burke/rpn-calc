import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NumberStack from '../../src/components/NumberStack.vue'

test('mount component', async () => {
  // given
  const entries = ['1', '2', '3']

  // when
  const wrapper = mount(NumberStack, {
    props: { entries }
  })

  // then
  expect(wrapper.text()).toContain('1')
  expect(wrapper.text()).toContain('2')
  expect(wrapper.text()).toContain('3')
})
