import { Award, awards } from "../app-data";

export default async function Page({ params }: { params: Promise<Award> }) {
  const slug = (await params).title;
  return <div>My Post: {slug}</div>;
}

export async function generateStaticParams() {
  return awards;
}

import Logo from "./_opengraph-image.png";

export function generateMetadata() {
  return {
    openGraph: {
      images: [Logo.src],
    },
  };
}
