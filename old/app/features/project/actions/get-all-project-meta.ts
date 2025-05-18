import { getMDXContent } from "../../mdx/actions";
import { Project } from "../types";

export const getAllProjectMeta = async (locale: string): Promise<Project[]> => {
  const projects = await getMDXContent<Project>("projects", locale);
  return projects.map(({ meta }) => meta);
};
