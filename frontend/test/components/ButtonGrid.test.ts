import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonGrid from '../../src/components/ButtonGrid.vue'

test('mount component', async () => {
  // when
  const wrapper = mount(ButtonGrid)

  // then
  expect(wrapper.text()).toContain('Enter')
})

test('emit events', async () => {
  // given
  const wrapper = mount(ButtonGrid)
  const enterButton = wrapper.find('.ent')

  // when
  await enterButton.trigger('click')

  // then
  expect(wrapper.emitted()).toHaveProperty('buttonClick')
})
