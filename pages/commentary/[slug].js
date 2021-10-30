import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Head from "next/head";
import Link from "next/link";

const client = createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "joshBlog",
  });

  return {
    paths: res.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "joshBlog",
    "fields.slug": params.slug,
  });

  return {
    props: {
      joshBlog: res.items[0],
    },
    revalidate: 30,
  };
}

const renderOptions = {
  renderText: (text) => {
    // break the string apart and inject <br> elements
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

export default function Article({ joshBlog }) {
  if (!joshBlog) return <div>404</div>;

  return (
    <div>
      <Head>
        <title>{joshBlog.fields.title}</title>
        <meta name="description" content={joshBlog.fields.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-2 h-full md:px-40 px-4 pt-16 md:mx-24">
        <h1 className="text-3xl font-black pb-2 leading-10 mb-2 md:leading-relaxed md:text-5xl md:mb-4">
          {joshBlog.fields.title}
        </h1>
        <p className="mb-4 text-sm text-gray-600 font-normal md:mb-6 md:text-base">
          {" "}
          Published: {joshBlog.fields.date}
        </p>

        <p className="mb-4 text-sm text-gray-600 font-normal md:mb-10 md:text-base">
          {" "}
          Read Time: {joshBlog.fields.readtime}mins
        </p>

        <div className="prose max-w-none mt-10 text-gray-800 text-base  leading-loose md:text-lg  md:leading-10 md:tracking-wider">
          {documentToReactComponents(joshBlog.fields.content, renderOptions)}
        </div>

        <div className="mt-12 mb-12">
          <Link href="/commentary">
            <a>Back to commentary</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
