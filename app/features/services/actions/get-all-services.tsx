import { getAllMDXEntriesByTypeAndLocale } from "@/app/features/mdx/actions";
import { Service } from "../types";

export const getAllServices = async (locale: string): Promise<Service[]> => {
  const services = await getAllMDXEntriesByTypeAndLocale<Service>(
    "services",
    locale,
    { includeContent: false }
  );
  return services.map((service) => ({
    ...service,
  }));
};
