export default function SvgIcon({
  title,
  path,
  color,
  needsWhiteBg,
}: {
  title: string;
  path: string;
  color?: string;
  needsWhiteBg?: boolean;
}) {
  return (
    <div className={`rounded-lg p-2 ${needsWhiteBg ? 'bg-white' : ''}`}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill={color ? color : 'white'}
      >
        <title>{title}</title>
        <path d={path} />
      </svg>
    </div>
  );
}
