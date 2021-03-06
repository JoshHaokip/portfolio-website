import Head from "next/head";
import Link from "next/link";
import skillsList from "../utils/skillsList.js";
import Image from "next/image";

export default function about() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta
          name="Hi! I'm Josh - let's find out more about me."
          content="Hi! I'm Josh - let's find out more about me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-8 max-h-full md:px-40 px-4 pt-16 md:mx-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 md:text-6xl">josh haokip</h1>
          <p className="text-xs md:text-lg font-light">
            marketer. developer. designer
          </p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-light leading-8 text-justify md:text-lg md:leading-10">
            I enjoy building and designing solutions to real-life problems.
            Check out my projects to see some of the cool products I've built.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="mb-10 font-semibold md:font-bold md:text-2xl">
            Work Experience
          </h3>

          <div className="mb-16">
            <p className="text-sm mb-3 font-semibold md:text-lg">Indeed Flex</p>
            <p className="text-xs mb-3 font-light md:text-base">
              Sept 2020 - Present
            </p>
            <p className="text-xs mb-3 font-light md:text-base">
              B2B Marketing
            </p>

            <p className="text-xs mb-2 font-light text-justify leading-6 text-gray-600	md:text-base">
              Working on b2b marketing campaigns and projects to generate and
              improve sales pipeline.
            </p>
          </div>

          <div className="mb-16">
            <p className="text-sm mb-3 font-semibold md:text-lg">Syft</p>
            <p className="text-xs mb-3 font-light md:text-base">
              Mar 2018 - Oct 2018
            </p>
            <p className="text-xs mb-3 font-light md:text-base">
              Marketing Associate
            </p>

            <p className="text-xs mb-2 font-light text-justify leading-6 text-gray-600 md:leading-8	md:text-base">
              Indeed Flex was known as Syft before being aqcuired by Indeed.
              During this time I assisted with marketing activites as we
              expanded throughout the country.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="mb-10 font-semibold md:font-bold md:text-2xl">
              Education
            </h3>

            <div className="mb-12">
              <p className="text-sm mb-3 font-semibold md:text-lg">
                University of Bath
              </p>
              <p className="text-xs mb-3 font-light md:text-base">
                Oct 2018 - Dec 2019
              </p>
              <p className="text-xs mb-3 font-light md:text-base">
                MSc Management
              </p>
            </div>

            <div className="mb-16">
              <p className="text-sm mb-3 font-semibold md:text-lg">
                University of York
              </p>
              <p className="text-xs mb-3 font-light md:text-base">
                Oct 2013 - Jul 2016
              </p>
              <p className="text-xs mb-3 font-light md:text-base">
                BA Politics with International Relations
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-10 font-semibold md:font-bold md:text-2xl">
            Skills
          </h3>

          <div className="mb-10">
            <p className="text-sm mb-2 font-medium md:text-base">Marketing</p>

            <div className="flex flex-row flex-wrap">
              {skillsList
                .filter((skill) => skill.category === "marketing")
                .map((skills) => (
                  <div className="pr-6 pt-8 md:pr-10">
                    <Image
                      key={skills.id}
                      src={skills.img}
                      height={35}
                      width={35}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-sm mb-2 font-medium md:text-base">
              Web Devoplment
            </p>

            <div className="flex flex-row flex-wrap">
              {skillsList
                .filter((skill) => skill.category === "dev")
                .map((skills) => (
                  <div className="pr-6 pt-8 md:pr-10">
                    <Image
                      key={skills.id}
                      src={skills.img}
                      height={35}
                      width={35}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-sm mb-2 font-medium md:text-base">Design</p>

            <div className="flex flex-row flex-wrap">
              {skillsList
                .filter((skill) => skill.category === "design")
                .map((skills) => (
                  <div className="pr-6 pt-8 md:pr-10">
                    <Image
                      key={skills.id}
                      src={skills.img}
                      height={35}
                      width={35}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Link href="/">
            <a>Back home</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
