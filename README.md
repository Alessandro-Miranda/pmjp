# Site Paróquia Menino Jesus de Praga - Diadema/SP

**Status**: *Em desenvolvimento*.

## Descrição e observações

Recriação do projeto que visa o desenvolvimento de um site, e posteriormente de blog, para a Paróquia Menino Jesus de Praga (Diadema/SP).

*O guia de estilos utilizado pode ser consultado em [`docs/style-guide.md`](/docs/style-guide.md) e o arquivo do design proposto, tanto mobile quanto desktop, encontram-se na pasta [`design`](/design/);*

## Tabela de conteúdos

- [Objetivo](#objetivo)
- [Etapas e features](#etapas-e-features)
- [Iniciando](#getting-started)
    - [Pré-requisitos](#pré-requisitos)
    - [Desenvolvimento](#desenvolvimento)
    - [Testes](#testes)
- [Build](#build)
- [Deploy](#deploy)
- [Tecnologias e ferramentas](#tecnologias-e-ferramentas)
- [Licença](#licença)
- [Membros do projeto](#membros-do-projeto)
    - [Autores](#autoria-e-desenvolvimento)

## Objetivo

Proporcionar aos fiéis e membros da regional acesso a informações da paróquia através do site institucional da comunidade o qual possua as formas de contato, localização das comunidades, informações relevantes etc. e, também, gerar conteúdo através do blog permitindo a interação e maior proximidade da igreja com seus participantes e não-participantes.

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

Agora já é possível iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado. Você poderá iniciar a modificação acessando a página que deseja alterar na pasta `src/pages/`.

[API routes](https://nextjs.org/docs/api-routes/introduction) podem ser acessadas em [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Estes endpoints podem ser editados em `src/pages/api/*`.

O diretório `src/pages/api` é mapeado como `/api/*`. Arquivos neste diretório são tratados como [API routes](https://nextjs.org/docs/api-routes/introduction) ao invés de páginas React.

### Testes

O projeto contém testes de cada componente da interface e métodos auxiliares.

- `npm test` or `npm t`: executa todos os casos de testes unitários presentes na pasta `__tests__`.
- `npm test <modulo_componente>.spec.<extensao>`: executa um único caso de teste definido pelo nome do arquivo.
- `npm run test:watch`: executa todos os casos de teste em modo watch durante o desenvolvimento.
- `npm run test:cov`: executa todos os casos de testes e gera o relatório de cobertura de código salvando-o na pasta `coverage`. 

## Build

- `npm run lint`: Faz a verificação do código e correção utilizando como base o arquivo `.eslintrc.json` e deve ser executado antes da realização do build/deploy.
- `npm run build`: Gera o build das páginas de forma estática para as páginas que usam (ou não) getStaticProps.

## Deploy

A ser definido

## Tecnologias e ferramentas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [ESLint - Airbnb style](https://eslint.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [React Testing Library](https://testing-library.com/)
- [Figma](https://www.figma.com/)

## Licença

O projeto está sob a licença MIT. Você pode consultar o arquio na íntegra [aqui](/LICENSE). 

## Membros do projeto

Lista das partes envolvidas na autoria, criação, desenvolvimento e melhorias do projeto.

### Autoria e desenvolvimento

Nome                           | Contatos           | Responsabilidade
-------------------------------|--------------------|----------------
Paróquia Menino Jesus de Praga | [E-mail](mailto:paroquiameninojesus@yahoo.com.br) \| [Telefone](tel:+551140666034) \| [Endereço](https://goo.gl/maps/nHzpZmEBK9MsuPr58) \| [Facebook](https://www.facebook.com/meninojesusdiadema) | Autoria
Alessandro Miranda             | [E-mail](mailto:ad.lmiranda2018@gmail.com) \| [GitHub](https://github.com/Alessandro-Miranda) | Layout e Desenvolvimento Full-stack