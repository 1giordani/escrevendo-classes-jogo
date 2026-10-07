# ⚔️ Escrevendo as Classes de um Jogo

Solução em JavaScript para o terceiro desafio de lógica de programação da DIO, com introdução à programação orientada a objetos.

## Objetivo

Criar uma classe genérica que represente um herói de aventura com as propriedades `nome`, `idade` e `tipo`, além de um método `atacar()` que exibe um ataque diferente para cada tipo.

## Tipos e ataques

| Tipo | Ataque | Mensagem |
| --- | --- | --- |
| mago | magia | o mago atacou usando magia |
| guerreiro | espada | o guerreiro atacou usando espada |
| monge | artes marciais | o monge atacou usando artes marciais |
| ninja | shuriken | o ninja atacou usando shuriken |

O texto de `ataque` contém apenas o recurso usado, como `magia`, para manter o formato e os exemplos do enunciado sem duplicar os verbos “usando usou”.

## Conceitos utilizados

| Requisito | Aplicação |
| --- | --- |
| Variáveis | `ataque`, `herois` e `heroi` |
| Operadores | Atribuição (`=`) e comparação estrita (`===`) |
| Laço de repetição | `for...of` percorre os heróis |
| Estruturas de decisão | `if`, `else if` e `else` escolhem o ataque |
| Funções | O método `atacar()` executa o comportamento do herói |
| Classes e objetos | `class Heroi` define a classe e `new Heroi(...)` cria objetos |

## Como executar

Com Node.js instalado, abra o terminal na pasta do projeto e execute:

```bash
node index.js
```

Não há dependências externas para instalar.

### Saída esperada

```text
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```

## Entendendo a classe

- `constructor(nome, idade, tipo)` recebe os dados na criação do objeto.
- `this.nome`, `this.idade` e `this.tipo` armazenam as propriedades de cada herói.
- `atacar()` consulta `this.tipo`, escolhe o ataque e imprime a mensagem.
- `new Heroi(...)` cria uma instância da classe.
- O laço chama `atacar()` para cada objeto da lista.

Os nomes e as idades do código são exemplos fictícios. Nome e idade são armazenados conforme solicitado, mas não aparecem na mensagem de ataque.

## Personalização

Edite a lista `herois` no final de `index.js`. Por exemplo:

```javascript
const herois = [
  new Heroi("Luna", 28, "ninja")
];
```

Use um dos quatro tipos em letras minúsculas: `mago`, `guerreiro`, `monge` ou `ninja`. Um tipo não reconhecido exibe uma mensagem informativa e encerra aquele ataque sem impedir os demais heróis de atacar.

## Arquivos

- `index.js`: classe, objetos de exemplo e laço de execução.
- `README.md`: documentação e instruções.

Projeto de estudo para o desafio **Escrevendo as classes de um Jogo**, da DIO.
