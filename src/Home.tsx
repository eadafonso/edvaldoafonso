import { Link } from "react-router-dom";
import { posts } from "./posts";
import SEO from "./components/SEO";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme-toggle.css";

export default function Home() {
  return (
    <>
      <SEO />
      <ThemeToggle />
      <div className="container fade-in">
        {/* Header / Introduction */}
        <section className="section">
          <h1>Edvaldo Afonso</h1>
          <p>
            Sou desenvolvedor e Assistant Manager na{" "}
            <a href="https://lbc-global.com" className="accent" target="_blank">
              LBC
            </a>
            . Tenho mais de 8 anos de experiência a criar soluções digitais
            rápidas, acessíveis e com uma experiência de utilizador realmente
            bem pensada.
          </p>
          <p>
            Sou fã de produtos com excelente UX e admirador do Itachi (sim, o de
            Naruto). Fora do código, costumo estar a jogar videojogos, a ver
            filmes ou séries e a explorar novas inspirações.
          </p>
        </section>

        {/* Blog Posts */}
        <section className="section">
          <p style={{ marginBottom: "var(--space-sm)" }}>
            Alguns dos meus posts recentes:
          </p>
          <ul>
            {posts.slice(0, 5).map((post) => (
              <li key={post.slug}>
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          {posts.length >= 5 && (
            <p style={{ marginTop: "var(--space-md)" }}>
              <Link to="/posts" className="accent">
                Ver todos os posts →
              </Link>
            </p>
          )}
        </section>

        {/* Call to Action */}
        <section className="section">
          <p>
            Para acompanhar os meus projectos e ver o meu código, podes visitar
            o meu{" "}
            <a
              href="https://github.com/eadafonso"
              className="accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            . E se precisares de falar comigo, aqui está o meu{" "}
            <a
              href="https://linkedin.com/in/edvaldo-afonso-13a222140"
              className="accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
