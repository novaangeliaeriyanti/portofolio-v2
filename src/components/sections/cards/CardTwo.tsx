'use client';

import { motion } from 'framer-motion';
import BottomSheet from '@/components/ui/Bottomsheet';
import LoopingIcons from '@/components/ui/LoopingIcons';
import { background } from '@/data/data';
import { Snowflake } from 'lucide-react';
import { useState } from 'react';
import ItemList from '@/components/ui/ItemList';

const CardTwo = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [activeId, setActiveId] = useState('');

  const activeData = background.summary.find((item) => item.id === activeId);

  return (
    <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px] bg-card rounded-lg shadow-lg text-foreground overflow-hidden flex flex-col">
      <div className="px-4 py-5">
        <span className="text-body text-foreground">{background.title}</span>
      </div>

      <div className="px-4 pb-4">
        <h4 className="uppercase text-foreground font-medium">
          {background.description}
        </h4>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 border border-foreground flex-1 mb-10">
        {background?.summary?.map((item, index) => (
          <div
            onClick={() => {
              setActiveId(item.id);
              setOpenSheet(true);
            }}
            key={index}
            className={`
            flex flex-col justify-between
            border-foreground p-4
            ${index < 2 ? 'border-b' : ''}
            ${index % 2 === 0 ? 'border-r' : ''}
            cursor-pointer hover:bg-accent text-foreground  hover:dark:text-background
          `}
          >
            <h3 className="">{item.count}</h3>
            <span className="text-body ">{item.desc}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full">
        <LoopingIcons
          icon={Snowflake}
          description="BACKGROUND"
          count={12}
          speed={50}
          direction="left"
          className="flex justify-center items-center h-10 bg-accent text-foreground"
        />
      </div>
      <BottomSheet isOpen={openSheet} onClose={() => setOpenSheet(false)}>
        <div className="p-6 space-y-4">
          <h3 className="font-bold text-lg mb-2">{activeData?.desc}</h3>
          {activeData?.id === 'project' && (
            <div className="space-y-6">
              {background?.project?.map((item, index) => (
                <ItemList
                  key={index}
                  index={index}
                  name={item.name}
                  subDescription={item.client + ' - ' + item.year}
                  description={item.description}
                  stack={item.stack}
                  image={item.image}
                />
              ))}
            </div>
          )}
          {activeData?.id === 'experience' && (
            <div className="mt-6">
              <div className="relative pl-8 md:hidden">
                <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-foreground/20" />

                <div className="space-y-8">
                  {background.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex items-start gap-4"
                    >
                      <div className="absolute left-[3px] top-[6px] w-3 h-3 rounded-full bg-foreground" />

                      <div className="ml-6">
                        <h4 className="font-semibold text-base">{exp.role}</h4>
                        <p className="text-body text-foreground">
                          {exp.company}
                        </p>
                        <span className="text-body text-foreground">
                          {exp.duration}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex md:flex-col items-start w-full mt-4">
                <div className="relative w-full">
                  <div className="absolute top-3 left-0 right-0 h-[2px] bg-foreground/20" />

                  <div className="flex justify-between w-full">
                    {background.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex flex-col items-center text-center w-1/3"
                      >
                        <div className="w-3 h-3 rounded-full bg-foreground mb-3 z-10 translate-y-[8px]" />
                        <h4 className="font-semibold text-base">{exp.role}</h4>
                        <p className="text-body text-foreground">
                          {exp.company}
                        </p>
                        <span className="text-body text-foreground">
                          {exp.duration}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeData?.id === 'testimonials' && (
            <div className="space-y-6">
              {background.testimonials.map((item, index) => (
                <ItemList
                  key={index}
                  index={index}
                  name={item.client}
                  description={item.feedback}
                  subDescription={item.rating}
                  stack={item.stack}
                  image={item.image}
                />
              ))}
            </div>
          )}
          {activeData?.id === 'client' && (
            <div className="space-y-6">
              {background.client.map((item, index) => (
                <ItemList
                  key={index}
                  index={index}
                  name={item.name}
                  description={item.country}
                  stack={item.stack}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </BottomSheet>
    </div>
  );
};

export default CardTwo;
