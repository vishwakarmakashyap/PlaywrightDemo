import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  
   timeout: 30 * 1000, // Set max test duration to 30 seconds
  //retries: 1, // Retry failed tests once
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [
    ["html"],
    ["allure-playwright"]
  ] : "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: "on",
    headless: true,
    actionTimeout: 10 * 1000, // Max time for each action (click, fill, etc.)
    navigationTimeout: 15 * 1000,
    screenshot: 'only-on-failure', // Capture screenshot on test failure
    video: 'retain-on-failure', // Record video if the test fails
  },

  /* Configure projects for major browsers */
  projects: [
    {
      
      name: "chromium",
      use: { ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
        launchOptions: { slowMo: 300 } },
    },

  ],

 
});
