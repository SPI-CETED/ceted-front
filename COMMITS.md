## <a name="#commit"></a> Padrão de mensagens de commit

Cada mensagem de commit é composta de **cabeçalho**, **corpo** e **rodapé**.

### Cabeçalho


```
<tipo>(<contexto>): <assunto>
<LINHA EM BRANCO>
<corpo>
<LINHA EM BRANCO>
<rodapé>
```

Onde:

#### Tipo

Tipo de alteração contida no commit. **Deve ser** alguma das opções abaixo:

* **feat**: Nova funcionalidade
* **fix**: Correção de bug
* **docs**: Alterações apenas na documentação
* **style**: Alterações que não afetam o significado do código. Ex: espaços em branco, formatação, ponto e vírgula faltantes, etc
* **refact**: Alterações que não corrigem bug nem adicionam funcionalidade
* **perf**: Alterações de melhorias de performance
* **test**: Adição de testes faltantes
* **chore**: Alterações no processo de build ou em ferramentas e bibliotecas auxiliares
* **merge**: Realização de merges

#### Contexto

Contexto de negócio em que as alterações se referem. Por exemplo: `login`, `impediments-report`, `config-screen`, `cache`.

#### Assunto

Descrição sucinta das alterações:

* Utilize o presente imperativo: "change" invés de "changes" ou "changed"
* Não capitalize a primeira letra
* Não coloque ponto final

#### Corpo

Assim como no assunto, utilizar o modo imperativo. Primeira letra capitalizada aqui é permitida. O corpo deve incluir a motivação para realizar as alterações ou comparar com implementações anteriores, caso necessário.

#### Rodapé

Informações sobre quebras de código. Também é no rodapé que se coloca referência para as issues no GitHub ou TFS.

#### Exemplos completos


  feat(login): validate username and token fields

  Added the following validations:
  - username mandatory fill
  - username must have email format
  - token mandatory fill

  Closes #8

<hr>  

  fix(config-screen): remove bounce scroll

  Handled window on scroll event and added stopPropagation.

  Closes #238

## <a name="#branches"></a> Padrão de versionamento

A branch `master` é a principal do projeto. Enquanto o projeto não estiver em produção ela pode ser usada como base para derivar funcionalidades. Após o projeto entrar em produção, será preciso adicionar uma

### Vou iniciar uma nova feature, o que devo fazer?

Sempre que for iniciar uma feature, crie uma branch a partir da `master`.

* Apontar para branch master:

  `$ git checkout master -f`

* Atualizar a branch `master` local com as últimas alterações remotas:

  `$ git pull --ff upstream master`

* Criar a branch da nova feature. Utilize o prefixo `feature/`:

  `$ git checkout -b feature/<nome-da-feature>`

  Exemplo: "**feature/new-bug-report-screen**"


### Vou iniciar uma correção de bug, o que devo fazer?

Sempre que for iniciar uma correção de bug, crie uma branch a partir da `master`.

* Apontar para branch master:

  `$ git checkout master -f`

* Atualizar a branch `master` local com as últimas alterações remotas:

  `$ git pull --ff upstream master`

* Criar a branch da nova feature. Utilize o prefixo `feature/`:

  `$ git checkout -b fix/bug-456-android-scroll`

  Exemplo: "**fix/bug-456-android-scroll**"

### Finalizei minha feature ou fix, o que devo fazer?

Após finalizar o desenvolvimento e testes das features ou fixes, é preciso abrir um `Pull Request` para que seja realizado code review e, consequentemente, merge com a `master`.
