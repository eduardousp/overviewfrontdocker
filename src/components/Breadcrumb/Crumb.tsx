import Link from 'next/link';

type CrumbProps = {
  path: string;
  title: string;
  active?: boolean;
};

export function Crumb({ title, path, active = false }: CrumbProps) {
  return (
    <Link
      href={path}
      className={`font-medium text-2xl hover:underline ${
        active ? 'text-purple-900' : 'text-orange-600'
      }`}
    >
      {title}
    </Link>
  );
}
