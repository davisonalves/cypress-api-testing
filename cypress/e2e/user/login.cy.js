import usuarios from '../../fixtures/users.json'

describe('Login @smoke', () => {
  usuarios.forEach(usuario => {
    it(`Login com credenciais validas (exemplo: ${usuario.role})`, () => {
      cy.api({
        method: 'POST',
        url: Cypress.env('login_url'),
        body: {
          email: usuario.email,
          password: usuario.password
        }
      }).then(response => {
        expect(response.status).to.equal(200)
      })
    })
  })
})