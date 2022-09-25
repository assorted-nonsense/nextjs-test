import { NextPage } from 'next';

export async function getStaticProps() {
  // get all the data needed for rendering the page
  const data = await fetchPageData();
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return <main>NextJS Test</main>;
}
