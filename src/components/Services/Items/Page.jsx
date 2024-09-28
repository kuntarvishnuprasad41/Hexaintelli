import { Hover } from "../Hover/Page";

export function CardHover() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hover items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "WEB DEVELOPMENT",
    Icon: "/images/1.svg",
    description:
      "Transform your digital presence with tailored web solutions that marry cutting-edge technology with user-centric design.",
    link: "/Web",
    to: "see more",
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    Icon: "/images/2.svg",
    description:
      "Elevate your business with custom mobile applications that offer seamless user experiences and robust functionality across all devices.",
    link: "/Mobile",
    to: "see more",
  },
  {
    title: "CLOUD COMPUTING",
    Icon: "/images/3.svg",
    description:
      "Empower your business with scalable cloud solutions tailored to streamline operations and enhance flexibility.",
    link: "/Cloud",
    to: "see more",
  },
  {
    title: "E-Commerce",
    Icon: "/images/4.svg",
    description:
      "Unlock actionable insights and drive informed decisions with our advanced data analytics solutions, tailored to extract value from your data.",
    link: "/Ecommerce",
    to: "see more",
  },
  {
    title: "MACHINE LEARNING",
    Icon: "/images/5.svg",
    description:
      "Leverage the potential of machine learning to innovate and automate processes, driving predictive insights and enhancing decision-making.",
    link: "/Machine",
    to: "see more",
  },
  {
    title: "ERP SOFTWARE",
    Icon: "/images/6.svg",
    description:
      "Optimize your business operations with our comprehensive ERP software, integrating core processes to streamline efficiency and drive growth.",
    link: "/ERP",
    to: "see more",
  },
];

