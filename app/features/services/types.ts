import { ComponentType } from "react";

export type Service = {
  slug: string;
  title: string;
  date: string;
  sort: number;
  content?: ComponentType<unknown>;
};
