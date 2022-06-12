/** @jsxImportSource theme-ui */

function Filters({ filters, onClick }) {
  return filters.map((filter) => (
    <button
      sx={{
        background: 'none',
        border: 'none',
        fontFamily: 'body',
        color: 'accent',
        p: 0,
        m: 0,
      }}
      data-filter={filter.slug.current}
      onClick={onClick}
      key={filter._id}
    >
      #{filter.slug.current}
    </button>
  ));
}

export default Filters;
