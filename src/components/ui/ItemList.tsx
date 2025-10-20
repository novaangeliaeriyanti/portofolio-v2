'use client';

import Image from 'next/image';

interface ItemProps {
  name: string;
  description?: string;
  subDescription?: string;
  stack: string[];
  image: string;
  index?: number;
}

export default function ItemList({
  name,
  description,
  subDescription,
  stack,
  image,
  index,
}: ItemProps) {
  return (
    <div
      key={index}
      className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-foreground/20 pb-4"
    >
      <div className="relative w-full md:w-1/3 h-40 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 space-y-2">
        <h4 className="font-semibold text-body">{name}</h4>
        <p className="text-small">{description}</p>
        <div className="text-small">{subDescription}</div>

        <div className="flex flex-wrap gap-2 mt-2">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-tiny font-bold rounded-full bg-accent text-foreground dark:text-background"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
