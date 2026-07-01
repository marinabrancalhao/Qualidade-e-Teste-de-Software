Feature: Login no AutomationExercise

Background:
    Given que estou na página inicial do AutomationExercise
    And acesso a tela de login

Scenario: Login com credenciais válidas
    When tento entrar com credenciais válidas
    Then devo ver que estou autenticado

Scenario: Login com credenciais inválidas
    When tento entrar com o email "emailnaoexiste@teste.com" e a senha "@SenhaNaoExiste"
    Then devo ver a mensagem de erro de login

Scenario Outline: Login com diversas credenciais inválidas
    When tento entrar com o email "<email>" e a senha "<senha>"
    Then devo ver a mensagem de erro de login
    Examples:
    |email                       | |senha         |
    |emailerrado@teste.com       | |senhaerrada123|
    |emailnaocadastrado@teste.com| |senhanc123    |
