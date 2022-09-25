/** @jsxImportSource theme-ui */

import Head from 'next/head';

import { getClient } from '@lib/sanity.server';
import { navQuery } from '@lib/queries';

import MainMenu from '@components/nav/MainMenu';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Eytyy</title>
        <meta
          name="description"
          content="Freelance Web Developer, based in Jordan, Amman."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainMenu data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const all = `{
    ${navQuery}
  }
`;
  const data = await getClient().fetch(all);
  return {
    props: {
      data,
    },
  };
}
