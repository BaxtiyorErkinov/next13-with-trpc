import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { caller } from '@/server/routes';

const inter = Inter({ subsets: ['latin'] });

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page: string;
  };
}) {
  const page = searchParams?.page ?? 1;
  const res = await caller.getUsers({ limit: 10 });

  return (
    <main className={styles.main}>
      <h1 className="text-slate-400">Salom</h1>
    </main>
  );
}
