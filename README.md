<!--
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>
-->

# Catálogo de Iniciativas IA — ESO / DOT Claro

Aplicação web para catalogar, visualizar e acompanhar as iniciativas de **IA e Automação** da área de Eficiência e Suporte Operacional (ESO) da Claro Brasil.

## Funcionalidades

- **Catálogo** de agentes Copilot e automações com filtros por domínio, departamento e categoria
- **Fluxo de Catalogação** — visualização interativa do processo de ideação até disponibilização
- **Refinamento (Facilitador)** — guia de avaliação e refinamento de iniciativas
- **BeOn Labs (Experimento)** — acompanhamento do status das iniciativas em imersão com diagrama de fases
- Busca textual expansível e modal de detalhes por iniciativa
- Layout totalmente responsivo (mobile e desktop)

## Executar Localmente

**Pré-requisito:** Node.js 18+

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento na porta 3002
npm run dev
```

Acesse: `http://localhost:3002`

## Scripts Disponíveis

| Script            | Descrição                                   |
|-------------------|---------------------------------------------|
| `npm run dev`     | Servidor de desenvolvimento (porta 3002)    |
| `npm run build`   | Build de produção em `dist/`                |
| `npm run preview` | Pré-visualização do build de produção       |
| `npm run lint`    | Verificação de tipos TypeScript             |

## Páginas

| Rota (estado)   | Descrição                                  |
|-----------------|--------------------------------------------|
| `catalog`       | Catálogo principal — página inicial padrão |
| `home`          | Fluxo de Catalogação                       |
| `facilitador`   | Refinamento — Facilitador de Inovação      |
| `experimento`   | BeOn Labs — Status das Iniciativas         |

## Tecnologias

- React 19 + TypeScript 5.8
- Vite 6
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide React

Consulte [Arquitetura.md](./Arquitetura.md) para detalhes técnicos completos.
