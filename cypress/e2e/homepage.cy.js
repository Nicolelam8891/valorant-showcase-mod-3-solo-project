describe('Homepage user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://valorant-api.com/v1/agents?isPlayableCharacter=true', {
      statusCode: 200,
      fixture: "characterCards", 
    }).as("homepage");
    cy.visit("http://localhost:3000/")
  })

  it('should display header, drop-down, buttons and 24 character cards on load', () => {
    cy.wait('@homepage').then((interception) => {
      cy.location("pathname").should("eq", "/");
      cy.get('.character-container').children().should("have.length", 24);

    })
  })
})
