import { useParams, Link } from "react-router-dom";
import { posts } from "./posts";
import "./styles/post.css";
import SEO from "./components/SEO";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme-toggle.css";

// Import MDX posts
import UmAnoCheio from "./posts/2025-Um ano cheio.mdx";

const postComponents: Record<string, React.ComponentType> = {
  "um-ano-cheio": UmAnoCheio,
};

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post || !slug) {
    return (
      <div className="container fade-in">
        <section className="section">
          <h1>Post não encontrado</h1>
          <p>
            <Link to="/" className="accent">
              ← Voltar para a página inicial
            </Link>
          </p>
        </section>
      </div>
    );
  }

  const PostComponent = postComponents[slug];

  return (
    <>
      <SEO
        title={`${post.title} - Edvaldo Afonso`}
        description={post.description}
        url={`https://edvaldoafonso.com/posts/${post.slug}`}
        type="article"
        publishedTime={post.date}
        keywords={`${post.title}, Edvaldo Afonso, blog, desenvolvimento, tecnologia`}
      />
      <ThemeToggle />
      <div className="container fade-in">
        <section className="section">
          <Link to="/" className="accent" style={{ fontSize: "0.9rem" }}>
            ← Voltar
          </Link>
        </section>

        <article className="section post-content">
          {PostComponent && <PostComponent />}
        </article>
      </div>
    </>
  );
}
