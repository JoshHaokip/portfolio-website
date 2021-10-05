import { createClient } from "contentful";

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
      joshBlog: res.items,
    },
    revalidate: 30,
  };
}

export default function Article({ joshBlog }) {
  console.log(joshBlog);
  return <div>Hello</div>;
}
