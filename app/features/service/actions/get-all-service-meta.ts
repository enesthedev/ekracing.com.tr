import { getMDXContent } from "../../mdx/actions";
import { Project } from "../types";

export const getAllPServiceMetas = async (
  locale: string
): Promise<Project[]> => {
  const projects = await getMDXContent<Project>("services", locale);
  return projects.map(({ meta }) => meta);
};
