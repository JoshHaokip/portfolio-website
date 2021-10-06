import Head from "next/head";
import Link from "next/link";
import { createClient } from "contentful";
import { HiArrowNarrowRight } from "react-icons/hi";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "joshBlog",
  });

  return {
    props: {
      joshBlog: res.items,
    },
    revalidate: 30,
  };
}

export default function about({ joshBlog }) {
  console.log(joshBlog);
  return (
    <div>
      <Head>
        <title>Commentary </title>
        <meta name="description" content="Here are my thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-2 max-h-full md:px-40 px-4 pt-16 md:mx-24">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-2 md:text-6xl">commentary</h1>
          <p className="text-sm md:text-lg font-light">
            thoughts, learnings and opinions
          </p>
        </div>

        <div className="mt-10">
          {joshBlog.map((article) => (
            <div className="mt-12" key={article.sys.id}>
              <div className="mt-6 md:mt-16">
                <p className="font-light text-base text-gray-600 pb-2 md:font-normal md:text-base">
                  {article.fields.date}
                </p>
                <h1 className="text-lg font-semibold pb-2 leading-7 md:text-lg md:pb-2">
                  {article.fields.title}
                </h1>
                <p className="font-normal text-base text-gray-400 leading-8 pb-3 md:text-xs md:leading-7">
                  {article.fields.description}
                </p>
                <Link href={"/commentary/" + article.fields.slug}>
                  <a className="text-gray-900 text-sm flex flex-row items-center">
                    <p className="pr-2">read more</p>
                    <HiArrowNarrowRight />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-12">
          <Link href="/">
            <a>Back home</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
