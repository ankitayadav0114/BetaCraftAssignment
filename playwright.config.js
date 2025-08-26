// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',               // your test folder
  fullyParallel: true,              // run all tests in parallel
  forbidOnly: !!process.env.CI,     // fail build if test.only is left in CI
  retries: process.env.CI ? 2 : 0,  // retry failing tests in CI (2 times)
  workers: process.env.CI ? 2 : undefined, // run 2 workers in CI, full parallel locally
  reporter: [['html', { open: 'never' }], ['line']], // CI-friendly reports
  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',        // collect trace on retry
    screenshot: 'only-on-failure',  // take screenshots for failed tests
    video: 'retain-on-failure',     // record video only if test fails
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',  // ✅ forces Playwright to use actual Chrome
      }
    },
  ],
});
