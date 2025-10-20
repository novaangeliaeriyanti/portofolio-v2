'use client';
import { motion } from 'framer-motion';
import { user } from '@/data/data';

const MainLayer = () => {
  return (
    <div className="relative rounded-[40px] bg-foreground h-full w-full p-1">
      <motion.h1
        className="absolute bottom-0 w-full text-center text-background"
        initial={{ rotateX: 180, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ stiffness: 20, damping: 12 }}
      >
        {user.name}
      </motion.h1>
    </div>
  );
};

export default MainLayer;
