"use client"
import { cn } from "src/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import styles from './page.module.css'
import { useState } from "react";


export const Hover = ({
  items = [],
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
          <div className={styles.details}>
          <div className={styles.main}>
            <CardIcon src={item.Icon} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            </div>
            <div className={styles.sub}>
            <Cardto>{item.to}</Cardto>
            </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}


export const Card = ({ className, children }) => {
  return (
    <div
  className={cn(
    "rounded-2xl h-full w-full p-6 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
    className
  )}
  style={{ backgroundColor: '#1f2229' }}
>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("lg:text-[32px] md:text-[24px] sm:text-[28px] text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardIcon = ({ className, src }) => {
  return (
    <div className={cn("bg-zinc-400 rounded-lg p-4 inline-block", className)}>
    <img
      src={src}
      alt=""
      
    />
    </div>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={styles.description}
    >
      {children}
    </p>
  );
};
export const Cardto = ({ children }) => {
  return (
    <div
      className={styles.button}
    >
      <div className={styles.buttona}>
      {children}
      </div>
      <div className={styles.arrow}>
            <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M19 12L15 16M19 12L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg></div>
    </div>
  );
};
