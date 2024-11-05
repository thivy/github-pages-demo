import { Award, awards } from "../app-data";

export default async function Page({ params }: { params: Promise<Award> }) {
  const slug = (await params).title;
  return <div>My Post: {slug}</div>;
}

export async function generateStaticParams() {
  return awards;
}

export function generateMetadata() {
  return {
    openGraph: {
      images: ["/_opengraph-image.png"],
    },
  };
}
