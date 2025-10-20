'use client';
import { motion } from 'framer-motion';
import LoopingIcons from '@/components/ui/LoopingIcons';
import { contact, user } from '@/data/data';
import { LucideIcon, Snowflake } from 'lucide-react';
import Image from 'next/image';
import { Github, Linkedin, X } from 'lucide-react';
import HoverSwapIcon from '@/components/ui/HoverSwapIcon';

const CardFour = () => {
  const iconMap: Record<string, LucideIcon> = {
    github: Github,
    x: X,
    linkedin: Linkedin,
  };

  const handleClick = ({
    subject,
    body,
  }: {
    subject: string;
    body: string;
  }) => {
    const mailtoLink = `mailto:${user.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px] bg-card rounded-lg shadow-lg text-foreground overflow-hidden flex flex-col">
      <div className="px-4 py-5 flex flex-col justify-center items-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-foreground dark:bg-accent mb-4">
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
            />
          </motion.div>
        </div>
        <span className="text-body text-foreground">CONTACT</span>
        <h3 className="font-medium">LET&apos;S TALK</h3>
      </div>
      <div className="grid grid-cols-4 border-t border-b border-foreground">
        {contact.map((item, index) => {
          const Icon = iconMap[item.name.toLowerCase()];
          if (!Icon) return null;

          return (
            <HoverSwapIcon
              key={index}
              icon={Icon}
              onClick={() => {
                if (item.url) {
                  window.open(item.url, '_blank', 'noopener,noreferrer');
                }
              }}
              size={24}
              className={`py-12 ${index < contact.length - 1 ? 'border-r' : ''}`}
            />
          );
        })}
      </div>
      <div
        className="flex flex-col text-center flex-1 justify-center pb-10 cursor-pointer hover:bg-accent dark:hover:text-background transition-colors duration-300"
        onClick={() => {
          handleClick({
            subject: 'Hello!',
            body: 'Hi George, I want to reach out to you.',
          });
        }}
      >
        <span className="text-body ">EMAIL ME</span>
        <h3 className="font-bold ">{user.email}</h3>
      </div>
      <div className="absolute bottom-0 w-full">
        <LoopingIcons
          icon={Snowflake}
          description="BACKGROUND"
          count={12}
          speed={50}
          direction="left"
          className="flex justify-center items-center h-10 bg-accent text-foreground border border-foreground"
        />
      </div>
    </div>
  );
};

export default CardFour;
