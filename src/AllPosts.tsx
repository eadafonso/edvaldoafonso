import { Link } from "react-router-dom";
import { posts } from "./posts";
import SEO from "./components/SEO";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme-toggle.css";

export default function AllPosts() {
  return (
    <>
      <SEO
        title="Todos os Posts - Edvaldo Afonso"
        description="Todos os artigos sobre desenvolvimento, tecnologia e UX escritos por Edvaldo Afonso."
        url="https://edvaldoafonso.com/posts"
      />
      <ThemeToggle />
      <div className="container fade-in">
        {/* Header */}
        <section className="section">
          <Link to="/" className="accent" style={{ fontSize: "0.9rem" }}>
            ← Voltar
          </Link>
        </section>

        <section className="section">
          <h1>Todos os Posts</h1>
          <p style={{ marginBottom: "var(--space-lg)" }}>
            Aqui encontras todos os artigos que escrevi sobre desenvolvimento,
            tecnologia e muito mais.
          </p>

          <ul>
            {posts.map((post) => (
              <li key={post.slug} style={{ marginBottom: "var(--space-md)" }}>
                <div>
                  <Link
                    to={`/posts/${post.slug}`}
                    style={{ fontSize: "1.1rem", fontWeight: "500" }}
                  >
                    {post.title}
                  </Link>
                  <p
                    style={{
                      marginTop: "var(--space-xs)",
                      marginBottom: 0,
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {post.description} ·{" "}
                    {new Date(post.date).toLocaleDateString("pt-PT", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
