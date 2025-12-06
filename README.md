# Blog Pessoal - Edvaldo Afonso

Website pessoal minimalista com blog em MDX e sistema de dark/light mode.

🌐 **Live:** [edvaldoblog.web.app](https://edvaldoblog.web.app)

## 🚀 Deploy

### Firebase Hosting

```bash
# Build do projeto
npm run build

# Deploy para Firebase
firebase deploy
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📝 Adicionar Novo Post

1. Crie um arquivo `.mdx` em `src/posts/`
2. Adicione os metadados em `src/posts.ts`
3. Importe o componente em `src/Post.tsx`

Exemplo de post:

```mdx
export const meta = {
  title: "Título do Post",
  description: "Descrição breve"
};

# Título do Post

Conteúdo do post aqui...
```

## 🎨 Características

- ✨ Design minimalista
- 🌙 Dark/Light mode toggle
- 📝 Blog com posts em MDX
- ⚡ Vite + React + TypeScript
- 🎨 Tailwind CSS 4
- 🔤 Fonte Inter do Google Fonts
- 🧭 React Router
- 🔍 SEO otimizado
- 📱 Responsivo

## 📦 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- MDX
- React Helmet Async
- Firebase Hosting

## 📄 Licença

© 2025 Edvaldo Afonso
