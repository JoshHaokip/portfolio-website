import Head from "next/head";
import Link from "next/link";

export default function about() {
  return (
    <div>
      <Head>
        <title>Josh Haokip: About Me </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-8 max-h-full px-5 pt-16">
        <div className="mb-12">
          <h1 className="text-4xl font-medium mb-2">josh haokip</h1>
          <p className="text-xs">marketer. developer. designer</p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-light leading-8 text-justify">
            I enjoy building and designing solutions to real-life problems.
            Check out my projects to see some of the cool products I've built.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="mb-10 font-semibold">Work Experience</h3>

          <div className="mb-12">
            <p className="text-sm mb-3 font-semibold">Indeed Flex</p>
            <p className="text-xs mb-3 font-light">Sept 2020 - Present</p>
            <p className="text-xs mb-3 font-light">B2B Marketing</p>

            <p className="text-xs mb-2 font-light text-justify leading-6 text-gray-600	">
              Working on b2b marketing campaigns and projects to generate and
              improve sales pipeline.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-sm mb-3 font-semibold">Syft</p>
            <p className="text-xs mb-3 font-light">Mar 2018 - Oct 2018</p>
            <p className="text-xs mb-3 font-light">Marketing Associate</p>

            <p className="text-xs mb-2 font-light text-justify leading-6 text-gray-600	">
              Indeed Flex was known as Syft before being aqcuired by Indeed.
              During this time I assisted with marketing activites as we
              expanded throughout the country.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-sm mb-3 font-semibold">The Idle Man</p>
            <p className="text-xs mb-3 font-light">Mar 2017 - Nov 2017</p>
            <p className="text-xs mb-3 font-light">Marketing Associate</p>

            <p className="text-xs mb-2 font-light text-justify leading-6 text-gray-600	">
              I worked as the Partnerships Manager focusing on improving our
              marketing targets by implementing our global outreach strategy.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-sm mb-3 font-semibold">Pouch</p>
            <p className="text-xs mb-3 font-light">Nov 2016 - Jan 2017</p>
            <p className="text-xs mb-3 font-light">Marketing Intern</p>

            <p className="text-xs mb-2 font-light text-justify leading-6 text-gray-600	">
              Managed to get Pouch featured on the Metro Online, resulting in 4x
              users in one week
            </p>
          </div>

          <div className="mt-16">
            <h3 className="mb-10 font-semibold">Education</h3>

            <div className="mb-12">
              <p className="text-sm mb-3 font-semibold">University of Bath</p>
              <p className="text-xs mb-3 font-light">Oct 2018 - Dec 2019</p>
              <p className="text-xs mb-3 font-light">MSc Management</p>
            </div>

            <div className="mb-12">
              <p className="text-sm mb-3 font-semibold">University of York</p>
              <p className="text-xs mb-3 font-light">Oct 2013 - Jul 2016</p>
              <p className="text-xs mb-3 font-light">
                BA Politics with International Relations
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
