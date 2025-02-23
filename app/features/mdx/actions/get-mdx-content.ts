"use server";

import fs from "fs";
import path from "path";

export type MDXContent<T> = {
  slug: string;
  meta: T;
  Component: React.ComponentType;
};

export async function getMDXContent<T>(
  type: "projects" | "services",
  locale: string
): Promise<MDXContent<T>[]> {
  const dirPath = path.join(process.cwd(), "docs", type, locale);

  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));

  const contentPromises = files.map(async (fileName) => {
    const slug = fileName.replace(".mdx", "");
    const mdxModule = await import(`@/docs/${type}/${locale}/${slug}.mdx`);
    const { meta, default: Component } = mdxModule;
    return { slug, meta: meta as T, Component };
  });

  return Promise.all(contentPromises);
}
