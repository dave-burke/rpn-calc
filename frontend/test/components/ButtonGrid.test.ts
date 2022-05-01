import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonGrid from '../../src/components/ButtonGrid.vue'

test('mount component', async () => {
  expect(ButtonGrid).toBeTruthy()

  const wrapper = mount(ButtonGrid)

  expect(wrapper.text()).toContain('1')
})
