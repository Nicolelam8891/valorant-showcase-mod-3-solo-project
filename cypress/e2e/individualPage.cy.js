describe("Show selected character user flow", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true",
      {
        statusCode: 200,
        fixture: "characterCards",
      }
    ).as("homepage");
    cy.intercept(
      "GET",
      "https://valorant-api.com/v1/agents/e370fa57-4757-3604-3648-499e1f642d3f",
      {
        statusCode: 200,
        fixture: "gekkoCard",
      }
    ).as("gekko");
    cy.visit(
      "http://localhost:3000/characterDetails/e370fa57-4757-3604-3648-499e1f642d3f"
    );
  });

  it("should display individual character details", () => {
    cy.wait("@gekko").then((interception) => {
      cy.get("header")
        .get(".valorant-logo")
        .get(".line")
        .get(".home-button")
        .contains("HOME")
        .get(".character-info-container")
        .get(".single-character-name")
        .contains("p", "Name: Gekko")
        .get(".single-character-description")
        .contains(
          "p",
          "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again."
        )
        .get(".single-character-role")
        .contains("p", "Role: Initiator")
        .get(".single-character-role-description")
        .contains(
          "p",
          "Initiators challenge angles by setting up their team to enter contested ground and push defenders away."
        )
        .get(".abilities-name > strong")
        .contains("Abilities:")
        .get(".ability-details")
        .get(".ability-details > :nth-child(1)")
        .get(":nth-child(1) > .ability-icon")
        .find("img")
        .should(
          "have.attr",
          "src",
          "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png"
        );
    });
  });
});
