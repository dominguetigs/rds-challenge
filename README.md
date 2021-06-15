<h1 align="center">
    <b>Customer Success Balancing</b>
</h1>

<p align="center">
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pre-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<a id="sobre"></a>

## :bookmark: Sobre

Este desafio consiste em um sistema de balanceamento entre clientes e Customer Success (CSs). Os CSs são os Gerentes de Sucesso, são responsáveis pelo acompanhamento estratégico dos clientes.

Dependendo do tamanho do cliente - aqui nos referimos ao tamanho da empresa - nós temos que colocar CSs mais experientes para atendê-los.

Um CS pode atender mais de um cliente e além disso os CSs também podem sair de férias, tirar folga, ou mesmo ficarem doentes. É preciso levar esses critérios em conta na hora de rodar a distribuição.

Dado este cenário, o sistema distribui os clientes com os CSs de capacidade de atendimento mais próxima (maior) ao tamanho do cliente.

### Exemplo

Se temos 6 clientes com os seguintes níveis: 20, 30, 35, 40, 60, 80 e dois CSs de níveis 50 e 100, o sistema deveria distribui-los da seguinte forma:

- 20, 30, 35, 40 para o CS de nível 50
- 60 e 80 para o CS de nível 100

Sendo `n` o número de CSs, `m` o númro de clientes e `t` o número de abstenções de CSs, calcular quais clientes serão atendidos por quais CSs de acordo com as regras apresentadas.

### Premissas

- Todos os CSs têm níveis diferentes
- Não há limite de clientes por CS
- Clientes podem ficar sem serem atendidos
- Clientes podem ter o mesmo tamanho
- 0 < n < 1.000
- 0 < m < 1.000.000
- 0 < id do cs < 1.000
- 0 < id do cliente < 1.000.000
- 0 < nível do cs < 10.000
- 0 < tamanho do cliente < 100.000
- Valor máximo de t = n/2 arredondado para baixo

### Input

A função `customerSuccessBalancing()` recebe 3 parâmetros:

- id e nivel da experiencia do CS
- id e nivel de experiência dos Clientes
- ids dos CustomerSuccess indisponíveis

### Output

O resultado esperado deve ser o id do CS que atende mais clientes. Com esse valor a empresa poderá fazer um plano de ação para contratar mais CS's de um nível aproximado.

Em caso de empate retornar `0`.

### Exemplo

No input de exemplo, CS's 2 e 4 estão de folga, sendo assim o CS 1 vai atender os clientes de tamanho até 60 (clientes 2, 4, 5, 6), enquanto o CS 3 vai atender os clientes 1 e 3.

Para este exemplo o retorno deve ser `1`, que é o id do CS que atende 4 clientes:

```
1
```

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

Foram também utilizadas as seguintes tecnologias

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Jest](https://jestjs.io/pt-BR/)

<a id="pre-requisitos"></a>

## :fire: Pré-requisitos

É preciso ter o node instalado e o npm para poder instalar as dependências do repositório e poder rodar os scripts do **package.json**.

<a id="como-usar"></a>

## :zap: Como usar

```bash
  # Clone o repositório
  $ git clone git@github.com:dominguetigs/rds-challenge

  # Acesse a pasta raiz do repositório
  $ cd rds-challenge

  # Instale as dependências
  $ npm install

  # Inicie o servidor Phoenix
  $ npm run test
```

<a id="extras"></a>

---

<h4 align="center">
    Feito com 💙 by <a
      href="https://www.linkedin.com/in/gustavodomingueti/"
      target="_blank"
    >Gustavo Domingueti</a>
</h4>
