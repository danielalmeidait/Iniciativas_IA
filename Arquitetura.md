# Arquitetura do Projeto - Catálogo de Iniciativas IA

Este documento descreve a estrutura técnica, as tecnologias utilizadas e as decisões arquiteturais do projeto **Iniciativas IA**.

## 🚀 Tecnologias Utilizadas

### Front-end
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Versão 5+) - Garante tipagem estática e segurança no desenvolvimento.
- **Framework:** [React 19](https://react.dev/) - Biblioteca principal para construção da interface baseada em componentes.
- **Ferramenta de Build:** [Vite](https://vitejs.dev/) - Next-generation frontend tooling para um desenvolvimento rápido.
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS utility-first para design moderno e responsivo.
- **Animações:** [Motion](https://motion.dev/) (framer-motion) - Para transições fluidas e micro-interações premium.
- **Ícones:** [Lucide React](https://lucide.dev/) - Conjunto de ícones vetoriais leves e consistentes.

### Back-end
- **Estado Atual:** Atualmente a aplicação opera em modo **Client-Side**, com os dados centralizados no arquivo `src/data.ts`.
- **Arquitetura de Dados:** Estruturada em interfaces TypeScript (`src/types.ts`), permitindo uma transição simples para uma API REST ou GraphQL no futuro.

---

## 🏗️ Estrutura de Pastas

```text
Iniciativas_IA/
├── public/              # Ativos estáticos (Logos, imagens)
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Header.tsx   # Navegação e filtros globais
│   │   ├── Catalog.tsx  # Grid de iniciativas e estatísticas
│   │   └── Details.tsx  # Modal de detalhamento do agente
│   ├── constants/       # Valores constantes e configurações
│   ├── data.ts          # Fonte da verdade dos dados (Mock DB)
│   ├── types.ts         # Definições de tipos TypeScript
│   ├── App.tsx          # Orquestrador central e estado global
│   ├── main.tsx         # Ponto de entrada da aplicação
│   └── index.css        # Configurações globais de estilo e Tailwind
├── package.json         # Dependências e scripts do projeto
└── tsconfig.json        # Configurações do compilador TypeScript
```

---

## 🧩 Decisões de Arquitetura

1. **Component-Driven Development:** A interface é dividida em pequenos componentes independentes, facilitando o reuso e o teste.
2. **Unidirectional Data Flow:** O estado (filtros, seleção de agentes) é gerenciado centralmente no `App.tsx` e distribuído via props, garantindo consistência visual.
3. **Responsive & Mobile First:** O layout foi projetado para se adaptar perfeitamente de dispositivos móveis a monitores ultra-wide.
4. **Performance:** Utilização de `AnimatePresence` e `motion` para garantir que a entrada e saída de elementos (como o modal de detalhes) não causem "jumps" na interface.

---

## 🛠️ Melhores Práticas Implementadas
- **Tipagem Estrita:** Uso de interfaces para todos os objetos de dados (`AIAgent`).
- **Clean Code:** Nomenclatura descritiva de variáveis e funções.
- **Acessibilidade:** Uso de elementos semânticos HTML5 e contraste de cores adequado.
- **Documentação Interna:** Código comentado seguindo padrões JSDoc/TSDoc.
