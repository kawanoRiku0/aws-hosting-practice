'use client';

import { useEffect, useState } from 'react';

type Article = {
  title: string;
  content: string;
};

export default function Page() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/articles`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Kawariku AWS Hosting Practice Blog</h1>
      {articles.map((article) => (
        <article
          key={article.title}
          className="border border-gray-300 rounded-md p-4 mt-4"
        >
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </article>
      ))}
    </div>
  );
}
