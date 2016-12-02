
Feature('Login');

Scenario('Logar com dados válidos.', (I) => {
  I.amOnPage('/auth');
  I.see('Seja bem-vindo ao CETED');
  I.fillField('#email', 'john@doe.com');
  I.fillField('#password', 'abc');
  I.click('button.bt');
  I.see('Welcome');
});

Scenario('Logar com dados inválidos.', (I) => {
  I.amOnPage('/auth');
  I.see('Seja bem-vindo ao CETED');
  I.fillField('#email', 'john@doe.com');
  I.fillField('#password', '123');
  I.click('button.bt');
  I.see('Login ou senha inválido.');
});

Scenario('Não preencher os campos.', (I) => {
  I.amOnPage('/auth');
  I.see('Seja bem-vindo ao CETED');
  I.fillField('#email', '');
  I.fillField('#password', '');
  I.click('button.bt');
  I.see('E-mail é um campo obrigatório.');
  I.see('Senha é um campo obrigatório.');
});