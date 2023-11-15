describe("Homepage", () => {
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

  it("User flow for homepage", () => {
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
        .contains("p", "Role: Duelist")
        .get(
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
        .get('[href="/characterDetails/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235"]')
        .get(
          '[href="/characterDetails/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235"] > .card'
        )
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
        .url()
        .should("eq", "http://localhost:3000/team")
        .get(".empty-team-message")
        .contains(
          "h2",
          "There are no saved characters yet, you can add up to 5 characters on a team!"
        )
        .get(".home-button")
        .contains("HOME")
        .click()
        .url()
        .should("eq", "http://localhost:3000/");
    });
  });

  it("should display helpful error messages to user", () => {
    cy.intercept(
      "GET",
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true",
      {
        statusCode: 404,
        body: "Not Found",
      }
    ).as("apiErrorMessage");

    cy.visit("http://localhost:3000/");
    cy.wait("@apiErrorMessage");
    cy.contains(
      "Sorry, there is an error! status: 404. Please try again later"
    );
  });

  it("should display helpful error messages to user", () => {
    cy.intercept(
      "GET",
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true",
      {
        statusCode: 500,
        body: "Not Found",
      }
    ).as("apiErrorMessage");
    cy.visit("http://localhost:3000/");
    cy.wait("@apiErrorMessage");
    cy.contains(
      "Sorry, there is an error! status: 500. Please try again later"
    );
  });

  it("Tests a bad route page", () => {
    cy.visit("http://localhost:3000/nonsense");
    cy.get(".nonsense-home-button").contains("HOME");
    cy.get(".error-message-nonsense").contains("h1", "ERROR");
    cy.get(".error-nonsense").contains(
      "h3",
      "Oh no agent, you have gone down the wrong path. Find your path to battle again by clicking on the home button!"
    );
    cy.get(".error-nonsense-image")
      .should("have.attr", "src")
      .should(
        "eq",
        "https://cdn.vox-cdn.com/thumbor/wXT1cC7FbgOVM5TQ2WUjolI38Ik=/0x0:3840x2160/1200x800/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/69376580/VALORANT_YR1_KeyArt_4k_3_.0.jpg"
      );
  });
});
