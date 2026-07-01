import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const LoginPage = require("../Pages/LoginPage.cy");

Given("que estou na página inicial do AutomationExercise", () => {
  LoginPage.visitHome();
  LoginPage.elements.linkLogin().should("be.visible");
});

Given("acesso a tela de login", () => {
  LoginPage.openLogin();
});

When("tento entrar com credenciais válidas", () => {
  cy.fixture("example").then((example) => {
    LoginPage.fillEmail(example.usuarioValido.email)
      .fillPassword(example.usuarioValido.senha)
      .submit();
  });
});

Then("devo ver que estou autenticado", () => {
  LoginPage.assertLoggedIn();
});

When("tento entrar com o email {string} e a senha {string}", (email, senha) => {
  LoginPage.fillEmail(email).fillPassword(senha).submit();
});

Then("devo ver a mensagem de erro de login", () => {
  LoginPage.assertLoginError();
});
