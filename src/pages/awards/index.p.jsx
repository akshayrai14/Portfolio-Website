import Head from "next/head";

import Award from "./components/Award";
import Default from "ui/layouts/Default";

export default function Awards(props) {
  const awards = [
    {
      title: "Unschool Remote Internship",
      subtitle: "May, 21",
      lines: [
        "Internship - Application",
        "• Helped them optimise their frontend services",
      ],
    },
    {
      title: "Soft Computing Rssearch Society",
      subtitle: "oct, 22",
      lines: [
        "VIT Technical Society",
        "• Helped in organizing events and",
        "• developed projects in teams.",
      ],
    },
    {
      title: "Hacktoberfest",
      subtitle: "oct, 22",
      lines: [
        "Contributed to Open Source projects",
        "• Contributed in all types of repositories.",
      ],
    },
  ];

  return (
    <Default>
      <Head>
        <title>Experience • AkshayRai</title>
        <meta name="title" content="Awards • AkshayRai" />
        <meta property="og:title" content="Awards • AkshayRai" />
        <meta property="twitter:title" content="Awards • AkshayRai" />
      </Head>
      <div className="flex flex-col items-start justify-start w-full space-y-4">
        <div className="flex items-center space-x-2 font-bold text-4xl text-white text-opacity-80 tracking-[-0.02rem]">
          <p>Experiences</p>
        </div>
        <div className="flex flex-col items-start justify-start w-full space-y-2">
          {awards.map((award, index) => (
            <Award key={index} index={index} {...award} />
          ))}
        </div>
      </div>
    </Default>
  );
}
