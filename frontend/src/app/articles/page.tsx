type Article = {
  title: string;
  content: string;
};

export default async function Page() {
  const articles = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles`
  ).then((res) => res.json());

  return (
    <div>
      <h1>Kawariku AWS Hosting Practice Blog</h1>
      {articles.map((article: Article) => (
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
