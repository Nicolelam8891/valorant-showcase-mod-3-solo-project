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

  it("should display individual character details and add to team", () => {
    cy.wait("@gekko").then((interception) => {
      cy.get("header")
        .get(".valorant-logo")
        .get(".line")
        .get(".home-button")
        .contains("HOME")
        .get(".single-character-page")
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
        .contains("Abilities")
        .get(".ability-section")
        .get(".ability-details")
        .get(".ability-details > :nth-child(1)")
        .get(":nth-child(1) > .ability-icon")
        .should("have.attr", "src")
        .should(
          "eq",
          "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png"
        )
        .get(".ability-details > :nth-child(1)")
        .get(":nth-child(1) > .ability-name")
        .contains("h3", "Wingman")
        .get(".ability-details > :nth-child(1)")
        .get(":nth-child(1) > .ability-description")
        .contains(
          "p",
          "EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule. INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown."
        )
        .get(".ability-details > :nth-child(2)")
        .get(":nth-child(2) > .ability-icon")
        .should("have.attr", "src")
        .should(
          "eq",
          "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability2/displayicon.png"
        )
        .get(":nth-child(2) > .ability-name")
        .contains("h3", "Dizzy")
        .get(":nth-child(2) > .ability-description")
        .contains(
          "p",
          "EQUIP Dizzy. FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are Blinded. When Dizzy expires she reverts into a dormant globule. INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown."
        )
        .get(".ability-details > :nth-child(3)")
        .get(":nth-child(3) > .ability-icon")
        .should("have.attr", "src")
        .should(
          "eq",
          "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/grenade/displayicon.png"
        )
        .get(":nth-child(3) > .ability-name")
        .contains("h3", "Mosh Pit")
        .get(":nth-child(3) > .ability-description")
        .contains(
          "p",
          "EQUIP Mosh. FIRE to throw Mosh like a grenade. ALT FIRE to lob. Upon landing Mosh duplicates across a large area that deals a small amount of damage over time then after a short delay explodes."
        )
        .get(".ability-details > :nth-child(4)")
        .get(":nth-child(4) > .ability-icon")
        .should("have.attr", "src")
        .should(
          "eq",
          "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png"
        )
        .get(":nth-child(4) > .ability-name")
        .contains("h3", "Thrash")
        .get(":nth-child(4) > .ability-description")
        .contains(
          "p",
          "EQUIP Thrash. FIRE to link with Thrash’s mind and steer her through enemy territory. ACTIVATE to lunge forward and explode, Detaining any players in a small radius. When Thrash expires she reverts into a dormant globule. INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once."
        )
        .get(".character-full-portrait-container")
        .get(".character-full-portrait")
        .should("have.attr", "src")
        .should(
          "eq",
          "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
        )
        .get(".character-full-portrait-container")
        .get(".add-to-team-button")
        .contains("Add to Team")
        .click()
        .get(".team-confirmation-message")
        .contains("Character added successfully!")
        .get(".add-to-team-button")
        .contains("Add to Team")
        .click()
        .get(".team-error-message")
        .contains(
          "This character has already been added to the team. Please select another."
        );
      it("should display helpful error messages to user", () => {
        cy.get("header")
          .get('[href="/team"]')
          .get(".team-button")
          .contains("TEAM")
          .click()
          .url()
          .should("eq", "http://localhost:3000/team");
        cy.get("header")
          .get(".valorant-logo")
          .get(".line")
          .get(".home-button")
          .contains("HOME")
          .get(".team-one-container")
          .get(".display-icon-image-card")
          .get(".display-icon-image")
          .should("have.attr", "src")
          .should(
            "eq",
            "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayiconsmall.png"
          )
          .get(".team-icon-info")
          .get(".character-name")
          .contains("p", "Gekko")
          .get(".character-role")
          .contains("p", "Role: Initiator")
          .get(".delete-button")
          .contains("❌")
          .click()
          .get(".empty-team-message")
          .contains(
            "h2",
            "There are no saved characters yet, you can add up to 5 characters on a team!"
          );
      });
    });
  });
});
