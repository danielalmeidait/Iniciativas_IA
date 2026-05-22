# Arquitetura do Projeto - Catálogo de Iniciativas IA

Este documento descreve a estrutura técnica, as tecnologias utilizadas e as decisões arquiteturais do projeto **Iniciativas IA**.

## 🚀 Tecnologias Utilizadas

### Front-end
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Versão 5.8+) - Garante tipagem estática e segurança no desenvolvimento.
- **Framework:** [React 19](https://react.dev/) - Biblioteca principal para construção da interface baseada em componentes.
- **Ferramenta de Build:** [Vite 6](https://vitejs.dev/) - Next-generation frontend tooling para um desenvolvimento rápido.
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
├── public/                    # Ativos estáticos (logos, imagens)
│   ├── claro-logo.png
│   └── ESO-logo.png
├── src/
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── Header.tsx         # Navegação, busca e filtros globais (catálogo)
│   │   ├── Catalog.tsx        # Grid de iniciativas e cards de estatísticas por departamento
│   │   ├── Details.tsx        # Modal de detalhamento do agente/automação
│   │   ├── HomePage.tsx       # Fluxo de Catalogação (cards interativos com navegação)
│   │   ├── FacilitadorPage.tsx# Página Refinamento — Facilitador de Inovação
│   │   └── ExperimentoPage.tsx# Página BeOn Labs — Status das iniciativas da Imersão
│   ├── data.ts                # Fonte da verdade dos dados (Mock DB)
│   ├── types.ts               # Definições de tipos TypeScript
│   ├── App.tsx                # Orquestrador central, estado global e roteamento
│   ├── main.tsx               # Ponto de entrada da aplicação
│   └── index.css              # Configurações globais de estilo e Tailwind
├── package.json               # Dependências e scripts do projeto
├── vite.config.ts             # Configuração do Vite (plugins, alias, servidor)
└── tsconfig.json              # Configurações do compilador TypeScript
```

---

## 🧭 Navegação e Roteamento

A aplicação utiliza **roteamento client-side via estado React** (sem React Router), controlado pelo `App.tsx`. A página atual é armazenada em `currentPage` com os seguintes valores:

| Valor         | Componente          | Descrição                                              |
|---------------|---------------------|--------------------------------------------------------|
| `'catalog'`   | `Catalog.tsx`       | Catálogo principal de iniciativas (página padrão)      |
| `'home'`      | `HomePage.tsx`      | Fluxo de Catalogação — visão geral do processo         |
| `'facilitador'` | `FacilitadorPage.tsx` | Refinamento — Facilitador de Inovação e IA          |
| `'experimento'` | `ExperimentoPage.tsx` | BeOn Labs — Status das iniciativas da Imersão       |

A navegação entre páginas é feita via callbacks (`onNavigateTo*`) passados como props, mantendo o fluxo unidirecional.

---

## 🗂️ Componentes — Responsabilidades

### `App.tsx`
Orquestrador central. Gerencia:
- Estado de navegação (`currentPage`)
- Filtros globais: busca textual, domínios, departamentos, categoria (agent/automation)
- Seleção do agente ativo no modal de detalhes
- Distribuição de callbacks de navegação para todos os filhos

### `Header.tsx`
Cabeçalho do catálogo. Contém:
- Logo responsivo (redimensiona em telas menores)
- Título com escala tipográfica responsiva (`text-lg sm:text-3xl`)
- Busca expansível com animação
- Toggle de categoria (Copilot / Automações)
- Filtro por domínio de atuação (dropdown)
- Menu de Ações (dropdown) com navegação para todas as páginas

### `Catalog.tsx`
Grid principal de iniciativas. Contém:
- Cards de estatísticas por departamento em grid responsivo (`grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8`)
- Seções separadas para Agentes Copilot e Automações
- Filtro por departamento (clique nos cards de estatística)

### `HomePage.tsx`
Fluxo de Catalogação — visualização do processo de ideação até disponibilização. Contém:
- Cards interativos para cada etapa do fluxo: Cadastro → Refinamento → Avaliação de Escalabilidade → Inovação Local / Experimento
- Card **Refinamento** com botão "Ver Facilitador" (navega para `FacilitadorPage`)
- Card **Avaliação de Escalabilidade** com botão "Ver Facilitador"
- Card **Inovação Local** com botão "Abrir Catálogo"
- Card **Experimento com BeOn Labs/TI** com botão "Status Imersão"
- Setas de conexão entre etapas com ramificação para as duas saídas finais

### `ExperimentoPage.tsx`
Status das iniciativas da Imersão. Contém:
- **Layout dual responsivo:**
  - **Mobile (`< md`):** Stepper vertical numerado com as 7 etapas + cards agrupados por fase em grid 2 colunas
  - **Desktop (`≥ md`):** Diagrama horizontal com chevrons em forma de seta, brackets de agrupamento (BeOn Labs / IA BD) e colunas de cards abaixo de cada etapa
- Etapas: Iniciativas → Apresentação → Refinamento → Experimentação → Comitê Executivo → Piloto → Adoção/Produto

### `FacilitadorPage.tsx`
Facilitador de Inovação e IA — guia de refinamento de iniciativas.

### `Details.tsx`
Modal de detalhamento com `AnimatePresence`. Exibe informações completas do agente/automação selecionado. Fechado via tecla ESC ou botão de retorno.

---

## 🧩 Decisões de Arquitetura

1. **Component-Driven Development:** A interface é dividida em componentes independentes, facilitando o reuso e o teste.
2. **Unidirectional Data Flow:** Estado gerenciado centralmente no `App.tsx` e distribuído via props.
3. **Roteamento por Estado:** Sem dependência de bibliotecas de roteamento externas — a troca de página é apenas uma mudança de estado, mantendo o bundle enxuto.
4. **Responsive & Mobile First:** Cada página tem estratégia responsiva própria. `ExperimentoPage` usa layout dual (mobile vertical / desktop horizontal) para preservar a fidelidade visual do diagrama de chevrons em telas grandes sem comprometer a usabilidade em mobile.
5. **Performance:** `AnimatePresence` e variantes `motion` com `custom` delay garantem entrada escalonada dos elementos sem layout shifts.

---

## 🛠️ Melhores Práticas Implementadas

- **Tipagem Estrita:** Uso de interfaces para todos os objetos de dados (`AIAgent`).
- **Responsividade granular:** Breakpoints Tailwind usados por componente (`text-lg sm:text-3xl`, `grid-cols-2 md:grid-cols-4 xl:grid-cols-8`, `hidden md:block` / `md:hidden`).
- **Acessibilidade:** Elementos semânticos HTML5, `aria-label`, `title` em botões de ícone e contraste de cores adequado.
- **Servidor de desenvolvimento:** Configurado na porta `3002` com `--host=0.0.0.0` para acesso em rede local.
