import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Haokip </title>
        <meta name="Check out my projects" content="Check out my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex justify-center	items-center">
        <div className="h-screen pt-10 md:h-80 flex flex-col md:flex-row justify-center md:justify-between md:items-center m-10">
          <div className="flex flex-col md:w-3/5">
            <h1 className="text-7xl mb-4 md:mb-8 font-medium leading-tight tracking-widest">
              josh haokip
            </h1>
            <p className="text-lg md:text-xl leading-10 md:leading-10 mb-8 md:mb-4 text-gray-600 font-light">
              i like to build and design digital products and experiences
            </p>
          </div>

          <hr className="md:h-4/5 md:w-0 w-full border border-gray-200 mb-8"></hr>

          <div>
            <Link href="/about">
              <a>
                <p className="text-lg font-light mb-8">about me</p>
              </a>
            </Link>

            <Link href="/projects">
              <a>
                <p className="text-lg font-light mb-8">projects</p>
              </a>
            </Link>

            <Link href="/commentary">
              <a>
                <p className="text-lg font-light mb-8">commentary</p>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
