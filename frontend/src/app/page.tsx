import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Kawariku AWS Hosting Practice Blog</h1>
      <p>ここはHomeページです。</p>
      <Link href="/articles">記事一覧へ</Link>
    </div>
  );
}
