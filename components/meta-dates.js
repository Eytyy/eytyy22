/** @jsxImportSource theme-ui */
import { getFormatedDate } from '@lib/helpers';

const MetaDates = ({ prefix, date }) => {
  return (
    <time dateTime={date}>
      {date && (
        <span>
          {prefix && `${prefix}: `}
          {getFormatedDate(date)}
        </span>
      )}
    </time>
  );
};

export default MetaDates;
