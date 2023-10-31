import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return {
        browser: {
          name: 'chrome',
          family: 'chromium',
          channel: 'stable',
          displayName: 'Chrome',
          versionRegex: /Google Chrome (\S+)/m,
          binary: ['google-chrome', 'chrome', 'google-chrome-stable']
        }
      }
    },
    specPattern: 'src/tests/e2e/**/*.cy.ts',
    supportFile: 'src/tests/e2e/support/commands.ts',
    fixturesFolder: 'src/tests/e2e/'
  }
})
