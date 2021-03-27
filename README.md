# mg-bootstrap-header

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/mg-bootstrap-header.svg)](https://www.npmjs.com/package/mg-bootstrap-header) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mg-bootstrap-header
```

## Início rápido

```jsx
import React, { Component } from 'react'

import Header from 'mg-bootstrap-header'
import 'mg-bootstrap-header/css/index.css'

class Example extends Component {
  render() {
    return <Header
      logo={'url_da_logo'}
      menu={[{ name: "Início", url: "/" }]}
    />
  }
}
```

## Importando estilos
Além da forma informada acima, também é possível utilizar os arquivos SCSS para imoprtação.

### Importando para arquivos js
```jsx
import 'mg-bootstrap-header/scss/index.scss'
```
### Imortações em SCSS
As importaçõespara SCSS podem ainda ser feitas por completo ou de acordo com a necessidade
e utilização dos components

```scss
@import "./node_modules/mg-bootstrap-header/scss/index";
```
##### Importação compoent a componente
```scss
@import "./node_modules/mg-bootstrap-header/scss/bar";
@import "./node_modules/mg-bootstrap-header/scss/menu";
@import "./node_modules/mg-bootstrap-header/scss/btnMobile";
@import "./node_modules/mg-bootstrap-header/scss/mobileMenu";
@import "./node_modules/mg-bootstrap-header/scss/mobileMenuNav";
```

# Props
## Cols
A props *cols* é utilizada para alterar as colunas pré-definidas pela header.
Esta propriedade recebe uma *objeto* contendo 4 níveis de dados, um para cada elemento
existente na header.

<b>OS VALORES INFORMADOS ABAIXO SÃO EXATAMENTE OS VALORES *DEFAULT* DO PACKAGE.
Caso não necessite de alterações, não será necessário informar esses dados</b>

```jsx
class Example extends Component {
  render() {
    return <Header
      cols={{
        logo: {xl: 3, lg: 3, md: 3, sm: 3, xs: 8},
        menu: {xl: 9, lg: 9, md: 9, sm: 8, xs: 8},
        menu2: {xl: 9, lg: 9, md: 9, sm: 8, xs: 8},
        btnModile: {xl: 1, lg: 1, md: 10, sm: 10, xs: 4}
      }}
    />
  }
}
```
<hr />

## Menu e Menu2
As propriedades <b>menu</b> e <b>menu2</b> são instancias de um mesmo componente.
Cabendo então a ambos o mesmo tratamento de entrada.

```jsx
class Example extends Component {
  render() {
    return <Header
      menu={[
        { name: "Início", url: "/" },
        { name: "Contato", action: props => {} },
        { render: props => (<btn>Login</btn>) }
        ]}
    />
  }
}
```

Propriedade | type | descrição
--- | --- | ---
name | string | nome que será exibido no link
url | string | caminho para onde o link deve mandar
action | function | passe uma função de retorno, essa função será acionada substituindo a url.
render | component | passe um componente para ser renderizado na header

### ATENÇÃO
<b>A propriedade *menu2* NÃO É UMA PROPRIEDADE PADRÃO, de forma que essa não
existe a menos que seja explicitamente incorporada</b>

Por não ser uma propriedade padrão, menu2 também não tem uma adequação definida em colunas,
sendo necessário passar valores para que essa apareça sem quebrar na header

<hr />

##NodeMenu e NodeMenu2
similar ao render que vimos acima, as propriedades *NodeMenu* e *NodeMenu2* representam
substituições as propriedades *menu* e *menu2* respectivamente. Caso existam, serão
renderizadas nos seus devidos lugares. Isso servirá para casos de estilização extrema.

<hr />

## Align
Assim como com *cols*, <b>align</b> receberá 4 níveis de dados, um para cada elemento da header.
Porem, neste caso, teremos o incremento de <b>bar</b>, com uma propriedade única que representa
o alinhamento vertical da row em relação à altura da header.

<b>OS VALORES INFORMADOS ABAIXO SÃO EXATAMENTE OS VALORES *DEFAULT* DO PACKAGE.
Caso não necessite de alterações, não será necessário informar esses dados</b>

```jsx
class Example extends Component {
  render() {
    return <Header
      align={{
        bar: 'end',
        logo: {horizontal: '', vertical: ''},
        menu: {horizontal: 'center', vertical: 'center'},
        menu2: {horizontal: 'center', vertical: 'center'},
        btnModile: {horizontal: 'end', vertical: 'end'}
      }}
    />
  }
}
```
<b>Todas as propriedades acima aceitam exatamente os mesmo valores. veja abaixo</b>

Propriedade | type | descrição
--- | --- | ---
start | string | alinha ao início
center | string | alinha ao centro
end | string | alinha ao final

<hr />

## Expand
expand representa o ponto de exibição de cada componente. <b>A logo não pode ser
escondida, por isso não a veremos aqui</b>.

### Atenção
*Aqui, <b>hideBtnMobile</b> funciona de maneira invertida dos demais. <b>Representando quando o botão
deve ser OMITIDO</b>.*

<b>OS VALORES INFORMADOS ABAIXO SÃO EXATAMENTE OS VALORES *DEFAULT* DO PACKAGE.
Caso não necessite de alterações, não será necessário informar esses dados</b>
```jsx
class Example extends Component {
  render() {
    return <Header
      expand={{
        menu: 'md',
        menu2: 'md',
        hideBtnMobile: 'md'
      }}
    />
  }
}
```
<b>Todas as propriedades acima aceitam exatamente os mesmo valores. veja abaixo</b>

Propriedade | type
--- | --- |
xl | string
lg | string
md | string
sm | string
xs | string

<hr />

## OffsetReact
Este componente de header pode reagir a alterações do scroll, fazendo isso a partir
de sua própria posição, ou de outra pré-determinada <b>em PIXELS</b>.

#### INÍCIO RÁPIDO
```jsx
class Example extends Component {
  render() {
    return <Header
      offsetReact={{
        offset: 100, // POSIÇÃO DO TOPO DA TELA EM PIXELS
        classBar: 'stick' // CLASSE PASSADA
      }}
    />
  }
}
```
#### OFFSET
Posição em que o header deve reagir, este está diretamente relacionado AO TOPO DA
TELA.

Propriedade | type | Descrição
--- | --- | ---
offsetHeight | string | Quando o topo da tela atingir o final da header
offsetTop | string | Quando o topo da tela for maior que 0
number | number | Altura em pixels

#### CLASSBAR
Nome de uma cçasse com animação já existente, ou, um novo nome de classe que faça
referencia a animação criada por você.

Propriedade | type | Descrição
--- | --- | ---
stick | string | Fixa header no topo











<hr />

## License

MIT © [Claudio-Magalhaes](https://github.com/Claudio-Magalhaes)
