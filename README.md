# 🛡️ Guarda Municipal do Recife - Portal Institucional

> Site institucional da Guarda Civil Municipal do Recife (GCMR)

---

## 📋 Descrição

Portal web desenvolvido para apresentar serviços, unidades, notícias e informações relevantes à população recifense. O objetivo é oferecer uma experiência moderna, responsiva e acessível, destacando o compromisso da corporação com **segurança, cidadania e tecnologia**.

---

## 🚀 Tecnologias

| Categoria | Tecnologia |
|-----------|------------|
| Frontend | React 19 |
| Build | Vite 7 |
| Estilização | Styled Components |
| Roteamento | React Router DOM 7 |
| Ícones | React Icons |
| Gráficos | Recharts |
| Excel | XLSX |

---

## 📂 Estrutura

```
codigos/
├── public/
│   └── pages/pesquisa/       # Página de pesquisa
├── src/
│   ├── components/
│   │   ├── cabecalho/        # Header do site
│   │   ├── rodape/           # Footer do site
│   │   ├── layout/           # Layout principal
│   │   ├── home/             # Página inicial
│   │   ├── exibidorDados/    # Componente de exibição
│   │   └── estilosGlobais/   # Estilos globais
│   ├── App.jsx               # Componente principal
│   └── main.jsx              # Entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## ⚙️ Como Executar

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# Acessar a pasta do projeto
cd codigos

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

### Build

```bash
# Criar versão de produção
npm run build

# Visualizar versão de produção
npm run preview
```

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|------------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Serve a build de produção localmente |
| `npm run lint` | Executa o linter |

---

## 🔧 Configuração

- **Porta padrão**: `5173` (Vite dev server)
- **Proxy**: Configurado no `vite.config.js`

---

## 📧 Contato

Guarda Civil Municipal do Recife  
