describe("Show selected character user flow", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true",
      {
        statusCode: 200,
        fixture: "gekkoCard",
      }
    ).as("homepage");
    cy.visit("http://localhost:3000/");
  });

  it("should display header, drop-down, buttons and 24 character cards on load", () => {
    cy.wait("@homepage").then((interception) => {
      cy.get("header")
        .get(".valorant-logo")
        .get('.line')
        .get(".home-button")
        .contains("HOME")
        .get(".character-container")
        .get(".card")
        .should("have.length", 24)
        .get(
          '[href="/characterDetails/e370fa57-4757-3604-3648-499e1f642d3f"] > .card'
        )
        .first()
        .get(".role-name-container")
        .get(".character-name")
        .contains("p", "Gekko")
        .get(".character-role")
        .contains("p", "Role: Initiator")
        .get(
          '[href="/characterDetails/e370fa57-4757-3604-3648-499e1f642d3f"] > .card'
        )
        .first()
        .find("img")
        .should(
          "have.attr",
          "src",
          "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png"
        ).click()
      });
    });
  });
  
