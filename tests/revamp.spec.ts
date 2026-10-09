import { test, expect } from '@playwright/test'

test('homepage journeys, images and browser errors', async ({ page }) => {
 const errors: string[] = []
 page.on('pageerror', e => errors.push(e.message))
 await page.goto('/')
 await expect(page.getByRole('heading', { level: 1 })).toContainText('Great moments.')
 await expect(page.getByRole('link', { name: 'Konsultasi acara Anda' })).toHaveAttribute('href', /https:\/\/wa.me\/6285711786561/)
 await expect(page.locator('.sl-package')).toHaveCount(3)
 await page.locator('.sl-hero-image').evaluate((img: HTMLImageElement) => img.decode())
 await page.getByRole('link', { name: 'Temukan pengalaman Anda' }).click()
 await expect(page).toHaveURL(/\/packages$/)
 expect(errors).toEqual([])
})

test('mobile menu supports navigation and Escape without overflow', async ({ page }) => {
 await page.setViewportSize({ width: 390, height: 844 })
 await page.goto('/')
 const toggle = page.getByRole('button', { name: 'Buka menu' })
 await toggle.click()
 await expect(page.getByRole('navigation', { name: 'Navigasi seluler' })).toBeVisible()
 await page.keyboard.press('Escape')
 await expect(toggle).toHaveAttribute('aria-expanded', 'false')
 await toggle.click()
 await page.getByRole('navigation', { name: 'Navigasi seluler' }).getByRole('link', { name: 'Rencanakan acara' }).click()
 await expect(page).toHaveURL(/\/booking$/)
 await expect(page.getByRole('navigation', { name: 'Navigasi seluler' })).toHaveCount(0)
 expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
})
