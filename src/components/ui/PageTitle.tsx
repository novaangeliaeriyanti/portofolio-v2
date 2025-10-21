'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface PageTitleProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  align?: 'center' | 'left' | 'right';
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  description,
  backgroundImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  align = 'center',
}) => {
  const alignment =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center';

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay biar teks tetap jelas */}
      <div className="absolute inset-0 bg-black/60" />

      <div
        className={`relative flex flex-col ${alignment} max-w-4xl mx-auto px-4`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-200 max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageTitle;
