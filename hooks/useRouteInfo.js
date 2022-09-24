import { useRouter } from 'next/router';

const useRouteInfo = (page) => {
  const { pathname, query } = useRouter();
  const inner = typeof query.slug !== 'undefined';
  const front = pathname === '/';
  const active = front ? false : pathname.split('/')[1] === page;
  return {
    inner,
    front,
    active,
    slug: query.slug,
  };
};

export default useRouteInfo;
