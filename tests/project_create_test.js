
Feature('Criar Projeto');

Scenario('Informar campos válidos.', (I) => {
  I.amOnPage('/project/create');
  I.see('Cadastro do Projeto');
  I.fillField('#projectName', 'Projeto teste');
  I.fillField('#projectDescription', 'projeto de teste');
  I.selectOption("#projectSegmen", "Lorem Ipsum");
  I.selectOption("#technology", "Lorem Ipsum");
  I.fillField('#projectGoals', 'objetivos do projeto teste');
  I.selectOption("#projectStatus", "Lorem Ipsum");
  I.fillField('#participantName', 'Daniel Pauletti');
  I.selectOption("#projectRole", "Lorem Ipsum");
  I.selectOption("#projectResult", "Lorem Ipsum");
  I.click('button.bt--green');
  I.see('Cadastro realizado com sucesso!');
});

Scenario('Informar campos válidos, não informar participante', (I) => {
  I.amOnPage('/project/create');
  I.see('Cadastro do Projeto');
  I.fillField('#projectName', 'Projeto teste');
  I.fillField('#projectDescription', 'projeto de teste');
  I.selectOption("#projectSegmen", "Lorem Ipsum");
  I.selectOption("#technology", "Lorem Ipsum");
  I.fillField('#projectGoals', 'objetivos do projeto teste');
  I.selectOption("#projectStatus", "Lorem Ipsum");
  I.selectOption("#projectResult", "Lorem Ipsum");
  I.click('button.bt--green');
  I.see('Participante deve ser informado!');
});

/*Scenario('Informar campos válidos, não informar Nome do Projeto', (I) => {
  I.amOnPage('/project/create');
  I.see('Cadastro do Projeto');
  I.fillField('#projectDescription', 'projeto de teste');
  I.selectOption("#projectSegmen", 'Lorem Ipsum');
  I.selectOption("#technology", 'Lorem Ipsum');
  I.fillField('#projectGoals', 'objetivos do projeto teste');
  I.selectOption("#projectStatus", "Lorem Ipsum");
  I.fillField('#participantName', 'Daniel Pauletti');
  I.selectOption("#projectRole", "Lorem Ipsum");
  I.selectOption("#projectResult", "Lorem Ipsum");
  I.click('button.bt--green');
  I.see('Nome do projeto deve ser informado!');
});

Scenario('Campos em branco', (I) => {
  I.amOnPage('/project/create');
  I.see('Cadastro do Projeto');
  I.click('button.bt--green');
  I.see('Nome do Projeto deve ser informado!');
  I.see('Descrição do Projeto deve ser informada!');
  I.see('Segmento do Projeto deve ser informado!');
  I.see('Tecnologias deve ser informado!');
  I.see('Objetivos do Projeto deve ser informado!');
  I.see('Resultado do Projeto deve ser informado!');
  I.see('Nome do Participante deve ser informado!');
  I.see('Função do Projeto deve ser informada!');
});*/