/** @jsxImportSource theme-ui */
import { getClient } from '@lib/sanity.server';
import { navQuery } from '@lib/queries';

import TransitionLayout from '@components/TransitionLayout';
import SEO from '@components/SEO';
import HomeMenu from '@components/nav/HomeMenu';

export default function Home({ data }) {
  return (
    <TransitionLayout>
      <SEO />
      <HomeMenu data={data} />
    </TransitionLayout>
  );
}

export async function getStaticProps() {
  const all = `${navQuery}`;
  const data = await getClient().fetch(all);
  return { props: { data } };
}
