import usuarios from '../../fixtures/users.json'
import { schemaGet } from '../../support/schemas/user.js'

const admin = usuarios[0]
let bearerToken

describe('Schema @contract', () => {
  beforeEach(() => {
    cy.login(admin).then(token => {
      bearerToken = token
    })
  })

  it('Get', () => {
    cy.api({
      method: 'GET',
      url: Cypress.env('users_url'),
      auth: {
        bearer: bearerToken
      }
    }).then(schemaGet)
  })
})