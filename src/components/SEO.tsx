import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

export default function SEO({
  title = "Edvaldo Afonso - Desenvolvedor Frontend & Assistant Manager",
  description = "Desenvolvedor frontend com mais de 5 anos de experiência a criar interfaces rápidas, acessíveis e com excelente UX. Assistant Manager na LBC.",
  keywords = "Edvaldo Afonso, desenvolvedor frontend, frontend developer, React, TypeScript, UX, UI, web development, Portugal",
  ogImage = "https://edvaldoafonso.com/og-image.jpg",
  url = "https://edvaldoafonso.com/",
  type = "website",
  publishedTime,
  author = "Edvaldo Afonso",
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {author && type === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
