describe("Teste Exercício", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it("Valida títulos", () => {
    cy.get("h2").should("contain", "Category");
    cy.get("h2").should("contain", "Brands");
  });

  it("Acessa página de login", () => {
    cy.get("[href='/login']").click();
    cy.url().should("include", "/login");
  });
});
