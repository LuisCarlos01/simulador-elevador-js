# 📚 Documentação do Simulador de Elevador

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Componentes](#componentes)
4. [Fluxo de Dados](#fluxo-de-dados)
5. [API e Métodos](#api-e-métodos)
6. [Guia de Contribuição](#guia-de-contribuição)

## 🎯 Visão Geral

O Simulador de Elevador é uma aplicação web que demonstra o funcionamento de um sistema de elevador usando JavaScript puro. O projeto foi desenvolvido com foco em boas práticas de programação, código limpo e padrões de projeto.

### 🔑 Características Principais

- Sistema de fila FIFO para chamadas
- Animações suaves de movimento
- Interface responsiva
- Zero dependências externas
- Código modular e testável

## 🏗️ Arquitetura

O projeto segue uma arquitetura orientada a objetos com separação clara de responsabilidades:

```
simulador-elevador/
├── public/           # Arquivos públicos
├── src/             # Código fonte
│   ├── css/         # Estilos
│   └── js/          # JavaScript
└── docs/            # Documentação
```

### 📦 Componentes Principais

1. **ElevatorSystem**: Classe principal que gerencia toda a lógica do elevador
2. **Interface do Usuário**: Componentes visuais e interativos
3. **Sistema de Fila**: Gerenciamento de chamadas do elevador

## 🔄 Fluxo de Dados

1. Usuário pressiona um botão de andar
2. O sistema verifica se o andar já está na fila
3. Se não estiver, adiciona à fila de chamadas
4. O elevador processa a fila em ordem FIFO
5. Animações e atualizações visuais são executadas
6. O sistema aguarda novas chamadas

## 📝 API e Métodos

### Classe ElevatorSystem

#### Construtor
```javascript
constructor(totalFloors = 10)
```
- `totalFloors`: Número total de andares (padrão: 10)

#### Métodos Públicos

##### `callElevator(targetFloor)`
- **Descrição**: Adiciona um andar à fila de chamadas
- **Parâmetros**: 
  - `targetFloor`: Número do andar de destino
- **Retorno**: Promise<void>

##### `emergencyStop()`
- **Descrição**: Para imediatamente o elevador e limpa a fila
- **Retorno**: void

### Eventos

O sistema responde aos seguintes eventos:
- Click nos botões de andar
- Click no botão de emergência
- DOMContentLoaded para inicialização

## 🤝 Guia de Contribuição

### Convenções de Código

1. **Estilo**
   - Use 2 espaços para indentação
   - Siga o estilo Prettier configurado
   - Use ponto e vírgula no final das declarações

2. **Nomenclatura**
   - camelCase para variáveis e métodos
   - PascalCase para classes
   - Nomes descritivos e em inglês

3. **Commits**
   - Siga o padrão Conventional Commits
   - Formato: `tipo(escopo): mensagem`
   - Tipos: feat, fix, docs, style, refactor, test, chore

### Processo de Desenvolvimento

1. Fork o repositório
2. Crie uma branch para sua feature
3. Desenvolva e teste localmente
4. Execute os linters
5. Faça commit seguindo as convenções
6. Abra um Pull Request

### Executando Localmente

```bash
# Clone o repositório
git clone https://github.com/LuisCarlos01/simulador-elevador-js.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npx serve public
```

## 🧪 Testes

O projeto está preparado para receber testes usando Jest. Para implementar:

1. Crie arquivos `.test.js` na pasta `tests/`
2. Execute `npm test` para rodar os testes
3. Mantenha cobertura mínima de 80%

## 📈 Performance

- Uso de `requestAnimationFrame` para animações suaves
- Evita reflows desnecessários
- Código modular para melhor cache
- CSS otimizado com variáveis 