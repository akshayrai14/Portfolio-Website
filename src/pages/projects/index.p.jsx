import Head from "next/head";

import Default from "ui/layouts/Default";
import Project from "./components/Project";

export default function Projects(props) {
  const projects = [
    {
      title: "portfolio@v2.0.0",
      subtitle: "website",
      description:
        "This website you are on right now.",
      date: "sep 2022 - present",
      status: 1,
    },
    {
      title: "V academics",
      subtitle: "Web App",
      description:
        "VIT academics is a website that contains study resources for any course which VIT offers under the BTECH CSE CORE program .",
      date: "oct 2022 - present",
      status: 0,
      href: "https://v-acad1010.web.app/",
    },
    {
      title: "Automatic Fare Generation System",
      subtitle: "Raspberry Pi project",
      description:
        "Automatic fare generation system in python will take the image of a car and detect it's license plate number and even calculate the fare automatically by the in time and out time of the car",
      date: "oct 2021 - present",
      status: 1,
      href: "https://drive.google.com/file/d/1cHQToIqn6eAxwBSwXka1knVVBjaEiJTq/view?usp=share_link",
    },
    {
      title: "MarketPlace Web 3.0",
      subtitle: "website",
      description:
        "Building a Web 3.0 Application with Next JS , Create and mint your own NFT Tokens using the third web SDK",
      date: "dec 2022 - present",
      status: 1,
    },
    {
      title: "DNS Authentication",
      subtitle: "Python project",
      description:
        "An authentication server to prevent systems against DNS spoofing",
      date: "nov 2021 - present",
      status: 1,
    },
    {
      title: "Tesla Clone",
      subtitle: "website",
      description:
        "A complete clone of the Tesla website using React JS , Javascript , HTML ,CSS - ( code in src folder )",
      date: "aug 2022 - sep 2022",
      status: 1,
      href: "https://telsa-20-akshayrai.web.app/",
    },
    {
      title: "Netflix-Clone",
      subtitle: "website",
      description:
        "Netflix landing page clone using HTML,CSS and JAVASCRIPT",
      date: "nov 2021 - present",
      status: 1,
    },
  ];

  return (
    <Default>
      <Head>
        <title>Projects • Akshay Rai</title>
        <meta name="title" content="Projects • Aditya Singh" />
        <meta property="og:title" content="Projects • Aditya Singh" />
        <meta property="twitter:title" content="Projects • Aditya Singh" />
      </Head>
      <div className="flex flex-col items-start justify-start w-full space-y-4">
        <div className="flex items-center space-x-2 font-bold text-4xl text-white text-opacity-80 tracking-[-0.02rem]">
          <img
            src="/icons/think.svg"
            className="h-[40px] select-none"
            draggable="false"
          />
          <p>Projects</p>
        </div>
        <div className="flex flex-col items-start justify-start w-full space-y-2">
          {projects.map((project, index) => (
            <Project key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </Default>
  );
}
