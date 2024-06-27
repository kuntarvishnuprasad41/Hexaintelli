import { Hover } from "../Hover/Page";

export function CardHover() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Hover items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "Transform your digital presence with tailored web solutions that marry cutting-edge technology with user-centric design.",
    link: "https://stripe.com",
  },
  {
    title: "CYBER SECURITY",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions, safeguarding your data from evolving threats.",
    link: "https://netflix.com",
  },
  {
    title: "CLOUD COMPUTING",
    description:
      "Empower your business with scalable cloud solutions tailored to streamline operations and enhance flexibility.",
    link: "https://google.com",
  },
  {
    title: "DATA ANALYTICS",
    description:
      "Unlock actionable insights and drive informed decisions with our advanced data analytics solutions, tailored to extract value from your data",
    link: "https://meta.com",
  },
  {
    title: "MACHINE LEARNING",
    description:
      "Leverage the potential of machine learning to innovate and automate processes, driving predictive insights and enhancing decision-making.",
    link: "https://amazon.com",
  },
  {
    title: "ERP SOFTWARE",
    description:
      "Optimize your business operations with our comprehensive ERP software, integrating core processes to streamline efficiency and drive growth.",
    link: "https://microsoft.com",
  },
];
