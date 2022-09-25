/** @jsxImportSource theme-ui */

import Link from 'next/link';
export default function ProjectsMenu({ projects }) {
  if (!projects) return null;
  // /page
  return (
    <>
      <div
        sx={{
          position: 'absolute',
          top: 7,
          left: 0,
          display: 'grid',
          gap: 9,
        }}
      >
        <div>
          <div sx={{ maxWidth: '400px' }}>
            {projects.map(
              ({
                title,
                _id,
                slug,
                year,
                status,
                launchDate,
                format,
                link,
              }) => (
                <div key={_id} sx={{ mb: 1 }}>
                  {format === 'link' ? (
                    <a
                      sx={{ variant: 'menu.listLink' }}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {year} {title}
                    </a>
                  ) : (
                    <Link href={`/work/${slug}`} passHref>
                      <a sx={{ variant: 'menu.listLink' }}>
                        {status === 'in-progress' ? launchDate : year}{' '}
                        {title}
                      </a>
                    </Link>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
