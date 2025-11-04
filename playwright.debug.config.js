import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 30 * 1000,
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html", // Standard reporter for debugging
  
  use: {
    trace: "on",
    headless: false, // Show browser for debugging
    actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: "chromium",
      use: { 
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
        launchOptions: { slowMo: 300 }
      },
    },
  ],
});