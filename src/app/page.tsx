import MainLayer from '@/components/layout/MainLayer';
import CardScroller from '@/components/sections/CardScroll';
import ThemeButtons from '@/components/ui/ThemeButtons';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 p-[10px] bg-background">
        <MainLayer />
      </div>
      <div className="absolute inset-0 z-20 pointer-events-none p-[10px] bg-background bg-[url('https://www.ui-layouts.com/noise.gif')] opacity-5"></div>
      <div className="absolute inset-0 z-10 overflow-y-auto">
        <div className="min-h-screen">
          <CardScroller />
        </div>
      </div>
      <ThemeButtons />
    </main>
  );
}
