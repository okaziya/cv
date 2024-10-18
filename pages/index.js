import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const userLocale = navigator.language.startsWith('sv') ? 'sv' : 'en';
    router.push(`/${userLocale}`);
  }, [router]);

  return (
    <div>
      <p>Redirecting based on your language preference...</p>
    </div>
  );
}
