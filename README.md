# 🛗 Simulador de Elevador

[![Licença MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![MVP Version](https://img.shields.io/badge/mvp-v0.1.0-orange.svg)](https://github.com/LuisCarlos01/simulador-elevador-js/releases/tag/v0.1.0-mvp)
[![Release Version](https://img.shields.io/badge/release-v1.0.0-blue.svg)](https://github.com/LuisCarlos01/simulador-elevador-js/releases/tag/v1.0.0)

<p align="center">
  <img src="docs/images/preview.gif" alt="Preview do Simulador de Elevador" width="600">
</p>

> Um simulador de elevador interativo implementado com JavaScript puro, demonstrando conceitos de programação orientada a objetos, manipulação do DOM e animações CSS.

## 📦 Versões

- **v1.0.0**: Versão inicial com funcionalidades básicas do simulador

[Ver todas as releases](https://github.com/LuisCarlos01/simulador-elevador-js/releases)

## ✨ Demonstração

🌐 [Ver Demo](https://luiscarlos01.github.io/simulador-elevador-js)

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
- ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
- ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## 🎯 Funcionalidades

- Sistema de elevador com 11 andares (0-10)
- Painel de controle com botões para cada andar
- Display mostrando o andar atual e direção do elevador
- Fila de chamadas com processamento FIFO
- Animações suaves de movimento e portas
- Botão de emergência para cancelar todas as chamadas
- Interface responsiva e intuitiva
- Sem dependências externas

## 🛠️ Instalação

```bash
# Clone este repositório
git clone https://github.com/LuisCarlos01/simulador-elevador-js.git

# Acesse a pasta do projeto
cd simulador-elevador-js

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npx serve public
```

## 📚 Documentação

Para informações detalhadas sobre a arquitetura, API e guias de contribuição, consulte nossa [Documentação Completa](docs/DOCUMENTATION.md).

## 🧪 Testes

```bash
# Executar testes
npm test

# Verificar cobertura
npm run test:coverage
```

## 📦 Scripts Disponíveis

- `npm run lint` - Executa o ESLint para verificar o código
- `npm run format` - Formata o código usando Prettier
- `npm run prepare` - Configura os hooks do Husky

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Feito com ❤️ por Luis Carlos

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/seu-linkedin)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LuisCarlos01)

## 🎨 Estrutura do Projeto

```
📦 simulador-elevador
├── public/
│   └── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── LICENSE
├── README.md
└── package.json
```

## ✨ Próximos Passos

- [ ] Adicionar sons de movimento e chegada
- [ ] Implementar sistema de peso máximo
- [ ] Adicionar modo de manutenção
- [ ] Implementar testes unitários
- [ ] Adicionar estatísticas de uso
