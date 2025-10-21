import BlogList from '@/components/sections/BlogList';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <BlogList />
    </Suspense>
  );
}
