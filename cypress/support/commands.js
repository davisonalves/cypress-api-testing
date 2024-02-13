Cypress.Commands.add('login', user => {
  cy.api({
    method: 'POST',
    url: '/users/login',
    body: {
      email: user.email,
      password: user.password
    }
  }).then(response => {
    return response.body.access_token
  })
})
