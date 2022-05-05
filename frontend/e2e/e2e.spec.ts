import { test, expect } from '@playwright/test'

test('test decimal add', async ({ page }) => {
  await page.goto('/')

  await page.locator('#button-dot').click()
  await page.locator('#button-one').click()
  await page.locator('#button-enter').click()
  await page.locator('#button-dot').click()
  await page.locator('#button-two').click()
  await page.locator('#button-plus').click()

  await expect(page.locator('#stack')).toHaveText('0.3')
})
