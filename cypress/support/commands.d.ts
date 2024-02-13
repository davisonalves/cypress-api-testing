declare namespace Cypress {
  interface Chainable {
    /**
     * @description Realiza a autenticação de um usuário e retorna o token de acesso.
     * @param user Objeto contendo as credenciais do usuário.
     * @example
     *    cy.login(user).then(token => {
     *      // Use o token para realizar chamadas autenticadas à API
     *    })
     */
    login(user: object): Chainable<string>
  }
}
