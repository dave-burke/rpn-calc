import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NumberInput from '../NumberInput.vue'

describe('NumberInput', () => {
  it('renders with initial modelValue', () => {
    const wrapper = mount(NumberInput, {
      props: { modelValue: '123' },
    })
    const input = wrapper.find('input')
    expect((input.element as HTMLInputElement).value).toBe('123')
  })

  it('emits trimmed numeric input via update:modelValue', async () => {
    const wrapper = mount(NumberInput, {
      props: { modelValue: '0' },
    })

    const input = wrapper.find('input')
    await input.setValue(' 456 ')

    // Check emitted value
    const updateEvent = wrapper.emitted('update:modelValue')
    expect(updateEvent?.[0]).toEqual(['456'])

    // Check the actual DOM input value is updated
    expect((input.element as HTMLInputElement).value).toBe('456')
  })

  it('ignores non-numeric input and does not change value', async () => {
    const wrapper = mount(NumberInput, {
      props: { modelValue: '123' },
    })

    const input = wrapper.find('input')
    await input.setValue('abc')

    const updateEvent = wrapper.emitted('update:modelValue')
    expect(updateEvent?.[0]).toEqual(['123']) // fallback to old value
    expect((input.element as HTMLInputElement).value).toBe('123') // input element also restored
  })

  it('emits blur event with the raw value', async () => {
    const wrapper = mount(NumberInput, {
      props: { modelValue: '789' },
    })

    const input = wrapper.find('input')
    await input.setValue('456')
    await input.trigger('blur')

    const blurEvent = wrapper.emitted('blur')
    expect(blurEvent?.[0]).toEqual(['456'])
  })

  it('does not emit blur if input is empty', async () => {
    const wrapper = mount(NumberInput, {
      props: { modelValue: '' },
    })

    const input = wrapper.find('input')
    await input.setValue('')
    await input.trigger('blur')

    const blurEvent = wrapper.emitted('blur')
    expect(blurEvent).toBeFalsy()
  })
})
