describe("Homepage user flow", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true",
      {
        statusCode: 200,
        fixture: "characterCards",
      }
    ).as("homepage");
    cy.visit("http://localhost:3000/");
  });

  it("should display header, drop-down, buttons and 24 character cards on load", () => {
    cy.wait("@homepage").then((interception) => {
      cy.location("pathname").should("eq", "/");
      cy.get("header")
        .get(".valorant-logo")
        .click()
        .url()
        .should("eq", "http://localhost:3000/")
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
        )
        .get(
          '[href="/characterDetails/add6443a-41bd-e414-f6ad-e58d267f4e95"] > .card'
        )
        .last()
        .get(".role-name-container")
        .get(".character-name")
        .contains("p", "Jett")
        .get(
          '[href="/characterDetails/add6443a-41bd-e414-f6ad-e58d267f4e95"] > .card'
        )
        .get(".character-role")
        .contains("p", "Role: Duelist");
      cy.get(
        '[href="/characterDetails/add6443a-41bd-e414-f6ad-e58d267f4e95"] > .card'
      )
        .last()
        .find("img")
        .should(
          "have.attr",
          "src",
          "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png"
        );
      cy.get("form")
        .get(".drop-down-menu")
        .select("All Roles")
        .should("have.value", "")
        .select("Controller")
        .should("have.value", "Controller")
        .select("Duelist")
        .should("have.value", "Duelist")
        .select("Initiator")
        .should("have.value", "Initiator")
        .select("Sentinel")
        .should("have.value", "Sentinel")
        .get(".filter-button")
        .contains("Filter")
        .click()
        .get(".character-container")
        .get(".card")
        .should("have.length", 5)
        .get(
          '[href="/characterDetails/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235"] > .card > .character-icon-image'
        )
        .first()
        .get(".role-name-container")
        .get(".character-name")
        .contains("p", "Deadlock")
        .get(".character-role")
        .contains("p", "Role: Sentinel")
        .get(
          '[href="/characterDetails/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235"] > .card'
        )
        .first()
        .find("img")
        .should(
          "have.attr",
          "src",
          "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/displayicon.png"
        )
        .get(
          '[href="/characterDetails/569fdd95-4d10-43ab-ca70-79becc718b46"] > .card'
        )
        .last()
        .get(".role-name-container")
        .get(".character-name")
        .contains("p", "Sage")
        .get(".character-role")
        .contains("p", "Role: Sentinel")
        .get(
          '[href="/characterDetails/569fdd95-4d10-43ab-ca70-79becc718b46"] > .card'
        )
        .last()
        .find("img")
        .should(
          "have.attr",
          "src",
          "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png"
        )
        .get(".team-button")
        .contains("TEAM")
        .click()
        .url().should('eq', 'http://localhost:3000/team')
        .get('.empty-team-message').contains('h2', "There are no saved characters yet, you can add up to 5 characters on a team!")
        .get(".home-button")
        .contains("HOME")
        .click()
        .url()
        .should("eq", "http://localhost:3000/");
    });
  });
});
