import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS } from "@contentful/rich-text-types";

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
  return (
    <div>
      <Head>
        <title>{joshBlog.fields.title}</title>
        <meta name="description" content={joshBlog.fields.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-8 h-full md:px-40 px-4 pt-16 md:mx-24">
        <h1 className="text-2xl font-black pb-2 leading-9 mb-2 md:leading-relaxed md:text-4xl md:mb-4">
          {joshBlog.fields.title}
        </h1>
        <p className="mb-4 text-xs text-gray-600 font-light md:mb-10">
          {" "}
          Published: {joshBlog.fields.date}
        </p>

        <hr className="mt-4"></hr>

        <div className="prose max-w-none mt-10 text-xs text-justify text-gray-600 leading-8 md:text-lg md:leading-10">
          {documentToReactComponents(joshBlog.fields.content, renderOptions)}
        </div>
      </main>
    </div>
  );
}
