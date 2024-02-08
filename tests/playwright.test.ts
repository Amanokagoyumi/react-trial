// playwright.test.ts
import { test, expect } from '@playwright/test';

test('loads the App and checks the text', async ({ page }) => {
    // Go to the starting url of your application
    await page.goto('http://localhost:3000');

    // Check that the text "GitHub Codespaces ♥️ React" is on the page
    const textContent = await page.textContent('.App-header p');
    expect(textContent).toContain('GitHub Codespaces ♥️ React');

    // Check that the text "Edit src/App.jsx and save to reload." is on the page
    const smallTextContent = await page.textContent('.small');
    expect(smallTextContent).toContain('Edit src/App.jsx and save to reload.');

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });
});