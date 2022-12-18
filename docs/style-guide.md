# Guia de estilos

Aqui será possível encontrar as definições de estilos utilizados no projeto como, por exemplo, tipografia, paleta de cores e definição de alguns elementos.

## Tabela de conteúdo

- [Tipografia](#tipografia)
    - [Fontes](#fontes)
    - [Peso e tamanhos](#peso-da-fonte-e-tamanhos)
- [Paleta de cores](#paleta-de-cores)
- [Elementos complementares](#elementos-complementares)
    - [Botões](#botões)
    - [Card - Missas](#card---horários-de-missas)

## Tipografia

Definição da família, peso e tamanho das fontes utilizadas em cada tipo de texto.

### Fontes

[Yanone Kaffeesatz](https://fonts.google.com/specimen/Yanone+Kaffeesatz?query=Yanone+) e [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=Open).

### Peso da fonte e tamanhos

Tipo de texto          | Font-family       | Peso  | Tamanho da fonte (Desktop/mobile)
-----------------------|-------------------|:-----:|:---------:
Título principal       | Yanone Kaffeesatz | 400   | 72px / 42px
Título secundário      | Yanone Kaffeesatz | 400   | 48px
Títulos terceiro nível | Yanone Kaffeesatz | 400   | 42px / 24px
Títulos de listagem    | Yanone Kaffeesatz | 400   | 36px / 24px
Textos                 | Open Sans         | 300   | 24px / 18px

## Paleta de cores

Cor                 | Código Hexadecimal
--------------------|:------------------:
Rufous-100          | `#d5462c`
Rufous-500          | `#9C0701`
Rufous-900          | `#670000`
Ivory-100           | `#ffffff`
Ivory-500           | `#f5f9e9` 
Ivory-900           | `#c2c6b7`
Sage-100            | `#f5f4d6`
Sage-500            | `#C2C1A5`
Sage-900            | `#919176`
Onyx-100            | `#63686c`
Onyx-500            | `#393E41`
Onyx-900            | `#13181b`
BlackChocolate-100  | `#45423e`
BlackChocolate-500  | `#1E1B18`
BlackChocolate-900  | `#000000`

## Elementos complementares

### Botões

```css
/* Padding Desktop */
padding: 22px 43px;

/* Padding mobile */
padding: 12px 29px;

border-width: 1px;
border-style: solid;
border-color: BlackChocolate-500;

border-color: Rufous-500; /* Hover */

border-radius: 20px;

/* Button width (desktop) */
max-width: 336px;

/* Button width (mobile) */
max-width: 205px;
```

### Card - Horários de Missas

```css
/* Padding desktop */
padding: 65px 52px;

/* Padding Mobile */
padding: 41px 34px;

border-radius: 20px;
border-width: 2px;
border-style: solid;
border-color: BlackChocolate-500;

border-color: Rufous-500; /* Hover */
```