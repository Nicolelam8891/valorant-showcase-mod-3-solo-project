describe('Error handling', () => {

  it("Displays an error message for a 500 response", () => {
    cy.intercept(
      "GET",
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true/",
      {
        statusCode: 500,
        body: "Not Found",
      }
    )
  });




  
})


