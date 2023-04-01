import Link from 'next/link';

export default function Topbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-6">
      <Link href="/" className="button button-blue">Home</Link>
      <Link href="/team/create" className="button button-green">Create Team</Link>
      <Link href="/team/list" className="button button-yellow">List Teams</Link>
      <Link href="/team/edit" className="button button-zinc">Edit Teams</Link>
    </nav>
  );
}