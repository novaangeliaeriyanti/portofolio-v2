'use client';

import LoopingIcons from '@/components/ui/LoopingIcons';
import RotatingIcon from '@/components/ui/RotatingIcons';
import { services } from '@/data/data';
import { Snowflake } from 'lucide-react';

const CardThree = () => {
  return (
    <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px] bg-card rounded-lg shadow-lg text-foreground overflow-hidden flex flex-col">
      <div className="px-4 py-5">
        <span className="text-body text-foreground">SERVICES</span>
      </div>

      <div className="flex-1 mb-10 grid grid-cols-1">
        {services?.map((item, index) => (
          <div
            key={index}
            className={`
            flex flex-row
            border-foreground p-3 gap-4
            ${index < 1 ? 'border-1' : 'border-b-1'}
          `}
          >
            <div className="flex-shrink-0">
              <span className="text-body">0{index + 1}</span>
            </div>
            <div className="flex flex-col justify-start gap-1">
              <h3 className="text-foreground uppercase">{item.title}</h3>
              <span className="text-body text-foreground uppercase">
                {item.desc}
              </span>
            </div>
            <div>
              <RotatingIcon size={40} speed={15} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full">
        <LoopingIcons
          icon={Snowflake}
          description="SERVICES"
          count={12}
          speed={50}
          direction="left"
          className="flex justify-center items-center h-10 bg-accent text-foreground"
        />
      </div>
    </div>
  );
};

export default CardThree;
