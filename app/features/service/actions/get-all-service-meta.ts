import { getMDXContent } from "../../mdx/actions";
import { Service } from "../types";

export const getAllServiceMeta = async (locale: string): Promise<Service[]> => {
  const projects = await getMDXContent<Service>("services", locale);
  return projects.map(({ meta }) => meta);
};
