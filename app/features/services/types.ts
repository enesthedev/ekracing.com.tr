import { ComponentType } from "react";

export type Service = {
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
  content?: ComponentType<unknown>;
};
