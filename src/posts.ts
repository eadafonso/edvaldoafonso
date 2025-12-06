export interface PostMetadata {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export const posts: PostMetadata[] = [
  {
    title: "2025 um ano cheio de desafios, conquistas e novos começos",
    date: "2025-12-05",
    description: "Uma introdução ao meu blog pessoal",
    slug: "um-ano-cheio",
  },
];

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
