
Feature('Listar usuário');

Scenario('Pesquisa de usuário.', (I) => {
  I.amOnPage('/user/list');
  I.see('Pesquisa de Colaborador');
  I.fillField('searchTerms', 'daniel');
  I.click('button.bt--green');
  I.see('Visualizar');
});