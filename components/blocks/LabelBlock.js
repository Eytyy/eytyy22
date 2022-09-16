/** @jsxImportSource theme-ui */
export default function LabelBlock({
  title,
  color = 'blue',
  bg = 'white',
  Icon,
  iconColor = 'red',
  iconSize = 1,
}) {
  return (
    <div
      sx={{
        bg: bg,
        fontSize: 7,
        color: color,
        fontFamily: 'heading',
        position: 'relative',
        zIndex: 3,
        pt: '100%',
      }}
    >
      <div
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {title}
      </div>
      {Icon && (
        <div
          sx={{
            fontSize: `${iconSize}em`,
            color: iconColor,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            svg: { display: 'block' },
          }}
        >
          <Icon />
        </div>
      )}
    </div>
  );
}
