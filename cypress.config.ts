import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'src/tests/e2e/**/*.cy.ts',
    supportFile: 'src/tests/e2e/support/commands.ts',
    fixturesFolder: 'src/tests/e2e/'
  }
})
