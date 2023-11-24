import { MENU_PAGES_COLLECTION, PUBLISH_ON_FILTER } from "@/constants";
import type { PropertyFilterObject, CompoundFilterObject } from "./notion/request-params";

export const ONLY_POSTS: PropertyFilterObject = {
  property: "Collection",
  select: {
    does_not_equal: MENU_PAGES_COLLECTION,
  },
};
export const ONLY_PAGES: PropertyFilterObject = {
  property: "Collection",
  select: {
    equals: MENU_PAGES_COLLECTION,
  },
};

const PUB_FILTER_CONTAINS: PropertyFilterObject = {
  property: "Publish On",
  multi_select: {
    contains: PUBLISH_ON_FILTER,
  },
};

const PUB_FILTER_EMPTY: PropertyFilterObject = {
  property: "Publish On",
  multi_select: {
    is_empty: true
  },
};

export const FOR_THIS_SITE: CompoundFilterObject = {
  or: [PUB_FILTER_CONTAINS, PUB_FILTER_EMPTY]
};

export const filterBySlug = (slug: string) => {
  const slugFilter: PropertyFilterObject = {
    property: "Slug",
    rich_text: {
      equals: slug
    },
  };
  return slugFilter;
};

export const filterByTag = (tagName: string) => {
  const tagFilter: PropertyFilterObject = {
    property: "Tags",
    multi_select: {
      contains: tagName
    },
  };
  return tagFilter;
};

export const filterByPageID = (pageID: string) => {
  const pageIDFilter: PropertyFilterObject = {
    property: "Notion Page ID",
    formula: {
      string: {
        equals: pageID
      }
    }
  };
  return pageIDFilter;
}
