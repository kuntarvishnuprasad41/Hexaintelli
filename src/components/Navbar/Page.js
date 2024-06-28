"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


const components = [
  {
    title: "Web Development",
    href: "/docs/services/web-development",
    description:
      "Craft and deploy custom web solutions that drive engagement and growth..",
  },
  {
    title: "Cyber Security",
    href: "/docs/services/cyber-security",
    description:
      "Protect your digital assets with advanced security measures and proactive threat detection.",
  },
  {
    title: "ERP Software",
    href: "/docs/services/erp-software",
    description:
      "Streamline operations and enhance productivity with our integrated ERP solutions.",
  },
  {
    title: "Data Analytics",
    href: "/docs/services/data-analytics",
    description: "Unlock actionable insights and make data-driven decisions to drive business growth.",
  },
  {
    title: "Cloud Computing",
    href: "/docs/services/cloud-computings",
    description:
      "Leverage scalable cloud solutions to optimize performance and accelerate innovation.",
  },
  {
    title: "Machine Learning",
    href: "/docs/services/machine-learning",
    description:
      "Harness the power of AI to drive predictive analytics and automate processes.",
  },
];

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, ...otherProps } = props;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-white", // Added text-white class here
            className
          )}
          {...otherProps}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbars() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbarBrand}>
          <h3 className={styles.dev}>HEXAINTELLI</h3>
          <div className={styles.navLinks}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white">Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            HEXAINTELLI 
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                          A software service company offers customized solutions to streamline operations and drive digital transformation for businesses worldwide.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Welcome
                    </ListItem>
                    <ListItem href="/docs/installation" title="FOR">
                      Agencies , SAAS comapanies , 
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="OUR TEAM">
                      A team of 8
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white">Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white")}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        </div>
       
        <div className={`${styles.navbarCollapse} ${collapsed ? styles.show : ''}`}>
          <span className={styles.navbarText}>

            <button className={styles.vvd} onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </div>
      </div>
    </nav>
  );
}
