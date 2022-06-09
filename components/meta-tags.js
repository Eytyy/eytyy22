/** @jsxImportSource theme-ui */
import { getFormatedDate } from '@lib/helpers';

const MetaTags = ({ tags }) => {
  if (!tags) return null;
  return (
    <div
      sx={{
        display: 'flex',
        gap: '10px 20px',
        flexWrap: 'wrap',
      }}
    >
      {tags.map((tag) => (
        <span sx={{ display: 'inline-block' }} key={tag._id}>
          #{tag.slug}
        </span>
      ))}
    </div>
  );
};

export default MetaTags;
