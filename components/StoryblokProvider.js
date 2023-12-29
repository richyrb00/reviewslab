/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Header from "./Header";
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}