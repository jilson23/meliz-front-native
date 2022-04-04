/// <reference types="Cypress" />


describe('meliz web test react testing library', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('init loading', () => {
    cy.contains('Meliz');

  })

  it('login', () => {
    cy.get('[type="email"]').type('ricksanchez@gmail.com')
    cy.get('[type="password"]').type('12345678')
    cy.get('.r-alignItems-1awozwy > .css-view-1dbjc4n > .css-text-901oao').click()
  })
})

