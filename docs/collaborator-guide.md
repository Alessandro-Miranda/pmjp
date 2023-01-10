# Colaboração

Neste arquivo será possível encontrar maiores informações sobre como você poderá colaborar com o desenvolvimento e manutenção deste projeto.

## Conteúdos

- [Contribuindo](#contribuindo)
    - [Submetendo sua contribuição](#submetendo-uma-nova-feature-ou-corrigindo-bugs)
- [Commits](#commits)
    - [Tipos](#tipos-de-commits)
    - [Exemplos](#exemplos-de-commits)
- [Branches](#branches)
    - [Tipos](#tipos-de-branches)
    - [Exemplos](#exemplos-de-branches)

## Contribuindo

Você pode contribuir com este projeto de duas formas: **submetendo features ou corrigindo bugs**.

### Submetendo uma nova feature ou corrigindo bugs

Para iniciar, você deve realizar o [fork](https://github.com/Alessandro-Miranda/pmjp/fork) deste repositório para sua própria conta do GitHub. Então abra o terminal na sua máquina e digite os seguintes comandos:

```bash
git clone https://github.com/<seu nome de usuario>/pmjp.git
cd pmjp
npm install
npm run storybook
npm run dev # em uma janela do terminal diferente para iniciar o servidor de desenvolvimento
```

Isso iniciará o storybook e o servidor de desenvolvimento nos endereços `http://localhost:6006` e `http://localhost:3000`, respectivamente. As página possuem hot reload, então, a cada mudança no código, será automaticamente refletido na interface, mas, caso a página não atualize, basta excluir a pasta `.next` manualmente e reiniciar o servidor.

Para submeter uma nova feature ou corrigir bugs, o ideal é que você realize as alterações em uma branch separada, ex.: `git checkout -b feature/minhafeature`. Isto fará com que a submissão do seu pull request e merge da alteração sejam mais facéis.

Nos tópicos [commits](#commits) e [branches](#branches) você encontrará a convenção de nomenclaturas para as branches principais e estilos de commit utilizados no projeto. 

## Commits

Para melhor organização, padronização e entendimento dos commits realizados no projeto, usará a seguinte convenção:

```
<!tipo>[?escopo]: !descrição
?corpo
?rodapé(s)
```

*Obs.: os itens precedidos de ! são obrigatórios; já os precedidos por ? são opicionais*.

Caso seja uma feature que provoque incompatibilidade com alguma funcionalidade, deverá ser indicado o rodapé **BREAKING CHANGE** ou, após **feat**, deverá ter o símbolo **!** para indicar a mudança.

### Tipos de commits

Convenções de commits a serem utilizados.

- `assets`: Imagens, ícones e demais assets do projeto;
- `chore`: Mudanças que não afetam o sistema ou arquivos de teste. Exemplo: regras eslint, prettier, .gitignore etc.;
- `docs`: Documentações do projeto;
- `feat`: Introdução de nova funcionalidade;
- `fix`: Correção de bugs;
- `perf`: Melhorias de performance;
- `refact`: Refatoração de código;
- `style`: Arquivos relacionados ao design e layout da aplicação (.sass, .css, alteração de classes css em componentes etc.);
- `test`: Funções relacionadas a testes (.stories, .spec, .test, adição de informações de teste nos componentes como, por exemplo, data-testid etc.);

### Exemplos de commits

```bash
# Commit com BREAKING CHANGE
chore: Atualização da versão da dependência X para a versão 8.1
BREAKING CHANGE: Features da versão 7.1 não são mais suportadas.
```

```bash
# Commit sem corpo e rodapé
docs: Inserção das especificações do endpoint X à documentação.
```

```bash
# Commit com escopo
feat(api): Enviar e-mail de confirmação ao usuário quando solicitado contato.
```

## Branches

Para melhor padronização, as branches seguem a convenção: <tipo>/<descrição curta da ação>

### Tipos de branches

- `bug-fix/*`: Correções necessárias, mas que não têm forte impacto no projeto.
- `build/*`: Criação de builds ou cobertura de códigos, exclusivamente;
- `docs/*`: Adição de documentações, exclusivamente.
- `feature/*`: Mudanças de código ou novos módulos (alterações gerais, pode incluir estilos, testes, documentações etc.);
- `hot-fix/*`: Correções críticas;
- `release/*`: Branch para adição das TAG's de uma versão especifíca, exclusivamente;
- `style/*`: Modificações feitas exclusivamente na estilização e layout da aplicação;
- `test/*`: Modificações e criações exclusivas dos casos de teste;

### Exemplos de branches

```
feature/api-send-email
style/box-shadow-color
hot-fix/aumentar-limite-escalabilidade
```