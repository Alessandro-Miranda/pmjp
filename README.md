# Site Paróquia Menino Jesus de Praga - Diadema/SP

**Status**: *Em desenvolvimento*.

## Descrição e observações

Recriação do projeto que visa o desenvolvimento de um site, e posteriormente de blog, para a Paróquia Menino Jesus de Praga (Diadema/SP).

## Conteúdos

- [Objetivo](#objetivo)
- [Guia de estilos e Design](#guia-de-estilos-e-design)
- [Etapas e features](#etapas-e-features)
- [Iniciando](#getting-started)
    - [Pré-requisitos](#pré-requisitos)
    - [Desenvolvimento](#desenvolvimento)
    - [Testes](#testes)
- [Build](#build)
- [Deploy](#deploy)
- [Tecnologias e ferramentas](#tecnologias-e-ferramentas)
- [Licença](#licença)
- [Contribuição](#contribuição)
- [Membros do projeto](#membros-do-projeto)
    - [Autores](#autoria-e-desenvolvimento)

## Objetivo

Proporcionar aos fiéis e membros da regional acesso a informações da paróquia através do site institucional da comunidade o qual possua as formas de contato, localização das comunidades, informações relevantes etc. e, também, gerar conteúdo através do blog permitindo a interação e maior proximidade da igreja com seus participantes e não-participantes.

## Guia de estilos e Design

O guia de estilos utilizado pode ser consultado em [`docs/style-guide.md`](/docs/style-guide.md); o arquivo do design proposto, tanto mobile quanto desktop, encontram-se na pasta [`design`](/design/);

## Etapas e features

As etapas aqui dispostas não necessariamente serão executadas em ordem sequencial.

- [x] Definição da paleta de cores e tipografia
- [ ] Prototipação do layout:
    - [x] Site insitucional
    - [ ] Blog
- [x] Criação e disponibiliação do style guide básico
- [ ] Escolha das tecnologias e ferramentas:
    - [x] Site insitucional
    - [ ] Blog
- [ ] Diagramação e desenvolvimento do site insitucional

## Getting Started

### Pré-requisitos

Antes de iniciar o desenvolvimento, tenha certeza de ter instalado em sua máquina o [Node](https://nodejs.org/en/) >= 18.12.1.

### Desenvolvimento

Primeiro, clone o projeto para a sua máquina:

```bash
git clone https://github.com/Alessandro-Miranda/pmjp.git
```

Instale as dependências do projeto:

```bash
npm install
# ou
yarn install
```
O projeto utiliza [Storybook](https://storybook.js.org/), portanto deve-se inicializa-lo - para o desenvolvimento dos componentes visuais de forma isolada - com o seguinte comando:

```bash
npm run storybook
```

Com isso já será possível abrir a página inicial acessando o endereço [http://localhost:6006](http://localhost:6006) em seu navegador.

*Obs.: Para maiores detalhes sobre as configurações e uso so Storybook consulte [Storybook](https://storybook.js.org/).*

Para iniciar o servidor de desenvolvimento utilize o comando

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado. Você poderá realizar a modificação necessária acessando a página que deseja alterar na pasta `src/pages/`.

O projeto utiliza **Path Alias**, portanto, caso seja necessário a criação de um novo path, este deve ser adicionado ao arquivo **tsconfig.json** nas seção **paths**.

[API routes](https://nextjs.org/docs/api-routes/introduction) podem ser acessadas em [http://localhost:3000/api/<endpoint>](http://localhost:3000/api/<endpoint>). Estes endpoints podem ser editados em `src/pages/api/*`.

O diretório `src/pages/api` é mapeado como `/api/*`. Arquivos neste diretório são tratados como [API routes](https://nextjs.org/docs/api-routes/introduction) ao invés de páginas React.

### Testes

O projeto contém testes de cada componente da interface e métodos auxiliares. *Os testes estão presentes na pasta de cada componente e método auxiliar*.

- `npm test` or `npm t`: executa todos os casos de testes unitários presentes na sub-pasta `__tests__` presente na pasta de cada componente e métodos.
- `npm test <modulo_componente>.spec.<extensao>`: executa um único caso de teste definido pelo nome do arquivo.
- `npm run test:watch`: executa os casos de teste durante o desenvolvimento.
- `npm run test:cov`: executa todos os casos de testes e gera o relatório de cobertura de código salvando-o na pasta `coverage`. 

## Build

- `npm run lint`: Faz a verificação do código utilizando como base o arquivo `.eslintrc.json` e deve ser executado antes da realização do build/deploy.
- `npm run build`: Gera o build das páginas de forma estática para as páginas que usam (ou não) getStaticProps. *Obs.: Opcional com base na plataforma onde será feito o deploy.*

## Deploy

A ser definido

## Tecnologias e ferramentas

- [ESLint - Airbnb style](https://eslint.org/)
- [Figma](https://www.figma.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Framer Motion](https://www.framer.com/motion/)
- [Next.js](https://nextjs.org/)
- [Radix UI](https://www.radix-ui.com/)
- [React Testing Library](https://testing-library.com/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Licença

O projeto está sob a licença MIT. Você pode consultar o arquivo na íntegra [aqui](/LICENSE).

## Contribuição

As informações sobre como contribuir com o desenvolvimento encontram-se no arquivo [collaborator-guide.md](/docs/collaborator-guide.md).

## Membros do projeto

Lista das partes envolvidas na autoria, criação, desenvolvimento e melhorias do projeto.

### Autoria e desenvolvimento

Nome                           | Contatos           | Responsabilidade
-------------------------------|--------------------|----------------
Paróquia Menino Jesus de Praga | [E-mail](mailto:paroquiameninojesus@yahoo.com.br) \| [Telefone](tel:+551140666034) \| [Endereço](https://goo.gl/maps/nHzpZmEBK9MsuPr58) \| [Facebook](https://www.facebook.com/meninojesusdiadema) | Autoria
Alessandro Miranda             | [E-mail](mailto:ad.lmiranda2018@gmail.com) \| [GitHub](https://github.com/Alessandro-Miranda) | Layout e Desenvolvimento Full-stack