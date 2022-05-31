// playwright.config.ts
import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "node dummy-webserver.mjs",
    port: 8011,
  },
  reporter: [["list"], ["html", { outputFolder: "tests/reports" }]],
  projects: [
    {
      name: "desktop-firefox",
      use: {
        ...devices["Desktop Firefox"],
        browserName: "firefox",
      },
    },
  ],
};

export default config;
