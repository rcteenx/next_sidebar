import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getStaticFile(slug) {
  const text = await readFile(`./content/static/${slug}.md`, "utf8");
  const {
    content,
    data: { title, description },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  return { title, description, body };
}
