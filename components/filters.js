/** @jsxImportSource theme-ui */

import { MdCheck } from 'react-icons/md';

function Filters({ filters, activeFilters, onClick }) {
  const hasActiveFilters = activeFilters.length > 0;
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px 24px',
      }}
    >
      {filters.map((filter) => {
        const isActive = activeFilters.some((f) => f === filter.slug);
        return (
          <div
            sx={{
              fontFamily: 'body',
              color: isActive ? 'muted' : 'accent',
              cursor: 'pointer',
              transition: 'color 250ms linear',
            }}
            onClick={() => onClick(filter)}
            key={filter._id}
          >
            <span>#{filter.slug}</span>
          </div>
        );
      })}
      <div
        sx={{
          fontFamily: 'body',
          cursor: 'pointer',
          opacity: hasActiveFilters ? '1' : '0',
          visibility: hasActiveFilters ? 'visible' : 'hidden',
          transition: hasActiveFilters
            ? 'opacity 500ms linear'
            : 'visibility 250ms 0s linear, opacity 250ms linear',
        }}
        onClick={() => onClick()}
      >
        clear all
      </div>
    </div>
  );
}

export default Filters;
