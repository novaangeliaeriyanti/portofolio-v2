'use client';
import { motion } from 'framer-motion';
import LoopingIcons from '@/components/ui/LoopingIcons';
import { user } from '@/data/data';
import { Expand, Snowflake } from 'lucide-react';
import Image from 'next/image';

const CardOne = () => {
  return (
    <div className="relative overflow-hidden w-[350px] h-[450px] md:w-[400px] md:h-[500px] bg-card rounded-lg shadow-lg text-foreground flex flex-col items-center">
      <h2 className="font-bold border-b-2 border-foreground border-dashed w-full text-center p-4">
        {user.name}
      </h2>
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-2/3 h-full z-10 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Expand className="w-[200%] h-full dark:text-accent" />
          </motion.div>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="object-cover dark:grayscale"
              sizes="50%"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 z-20">
        <LoopingIcons
          icon={Snowflake}
          description={user.job}
          count={12}
          speed={50}
          direction="left"
          className="flex justify-center items-center h-10 bg-accent text-foreground"
        />
      </div>
    </div>
  );
};

export default CardOne;
