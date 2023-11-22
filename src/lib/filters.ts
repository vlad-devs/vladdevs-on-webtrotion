import { PAGE_COLLECTION } from "@/constants";
import type { PropertyFilterObject } from "./notion/request-params";

export const ONLY_POSTS: PropertyFilterObject = {
  property: "Collection",
  select: {
    does_not_equal: PAGE_COLLECTION,
  },
};
export const ONLY_PAGES: PropertyFilterObject = {
  property: "Collection",
  select: {
    equals: PAGE_COLLECTION,
  },
};
