/** @jsxImportSource theme-ui */
export default function TeamMember({ name, last }) {
  return (
    <>
      <h3
        sx={{
          fontFamily: 'heading',
          fontSize: '1em',
          display: 'inline',
        }}
      >
        {name}
        {last ? '.' : ', '}
      </h3>
    </>
  );
}
