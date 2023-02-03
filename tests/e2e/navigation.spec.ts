import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://uxland-poker-league.netlify.app/');
});

test('click on navigation item "players" change urls correctly', async ({page}) => {
  const tabs = await page.getByTestId('nav-item');
  const playersNavItem = tabs.nth(0);
  await playersNavItem.click();
  await expect(page).toHaveURL(/.*players/);
});
