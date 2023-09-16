import Link from 'next/link';
import { buttonVariants } from '@components/ui/button';

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href='/game/32' className={buttonVariants({ size: 'sm', variant: 'outline' })}>
        Click here
      </Link>
    </main>
  );
}
