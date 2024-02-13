const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://api.practicesoftwaretesting.com",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {
    },
  },
  env: {
    users_url: "/users",
    login_url: "/users/login",
    hideCredentials: true
  }
});