describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("Meu primeiro teste", () => {
  it("Acessa o site e verifica título", () => {
    cy.visit("https://example.cypress.io");
    cy.title().should("include", "Cypress");
  });
});
