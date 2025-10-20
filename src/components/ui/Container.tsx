import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'px-5 md:px-8 lg:px-12 w-full max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
