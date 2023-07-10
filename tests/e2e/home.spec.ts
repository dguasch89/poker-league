import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://uxland-poker-league.netlify.app/');
});

test('has title', async ({page}) => {
  await expect(page).toHaveTitle(/Uxland Poker League/);
  await expect(page.getByRole('heading', {name: 'UXLAND'})).toBeVisible();
});

/* test('click on season 2 tab display correctly season 2 text', async ({page}) => {
  const tabs = await page.getByTestId('tab-item');
  const secondTab = tabs.nth(1);
  await secondTab.click();
  await expect(page.getByText('Highlights will appear when season ends')).toBeVisible();
}); */
