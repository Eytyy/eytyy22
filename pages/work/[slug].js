/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { getClient } from '@lib/sanity.server';

import ProjectContainer from '@components/project';
import { navQuery, projectQuery } from '@lib/queries';

const Project = ({ data }) => {
  if (!data.project) return null;
  const { title } = data.project;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectContainer data={data} />
    </>
  );
};

export default Project;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == 'project' && defined(slug)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await getClient().fetch(
    `{
      "project": ${projectQuery},
      "navData": {
        ${navQuery}
      }
    }
  `,
    {
      slug: params.slug,
    }
  );
  return {
    props: {
      data,
    },
  };
}
