import { createClient } from "contentful";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "joshProjects",
  });

  return {
    props: {
      joshProjects: res.items,
    },
  };
}
export default function Projects({ joshProjects }) {
  console.log(joshProjects);
  return (
    <div>
      <Head>
        <title>Projects </title>
        <meta
          name="description"
          content="Here are the projects I've been working on!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-8 max-h-full md:px-40 px-4 pt-16 md:mx-24">
        <div className="mb-20">
          <h1 className="text-6xl font-medium mb-2 md:text-6xl">projects</h1>
          <p className="text-base md:text-lg font-light">code. design. ideas</p>
        </div>

        <div className="mt-10">
          {joshProjects.map((project) => (
            <div key={project.sys.id}>
              <div className="mb-14 flex flex-col md:flex-row">
                <Image
                  src={"https:" + project.fields.img.fields.file.url}
                  width={350}
                  height={250}
                />

                <div className="mt-6 md:w-3/4 md:px-10">
                  <h1 className="text-lg font-semibold">
                    {project.fields.title}
                  </h1>
                  <p className="text-xs mt-2 text-justify font-light leading-5">
                    {project.fields.description}
                  </p>

                  <div className="flex flex-row mt-2 justify-start">
                    <a href={project.fields.github} target="_blank">
                      <p className="text-xs mt-2 pr-4">Github</p>
                    </a>
                    <a href={project.fields.url} target="_blank">
                      <p className="text-xs mt-2">Website</p>
                    </a>
                  </div>

                  <div className="flex flex-row mt-4 justify-start">
                    {project.metadata.tags.map((tag) => (
                      <div
                        className="text-xs pr-4 font-light"
                        key={project.sys.id}
                      >
                        {tag.sys.id}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
