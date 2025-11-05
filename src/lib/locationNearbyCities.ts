// Nearby cities data for each location page
export const nearbyCitiesData: Record<string, Array<{ name: string; path: string }>> = {
  seattle: [
    { name: "Bellevue", path: "/locations/bellevue" },
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Redmond", path: "/locations/redmond" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Shoreline", path: "/locations/shoreline" },
    { name: "Lynnwood", path: "/locations/lynnwood" }
  ],
  bellevue: [
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Redmond", path: "/locations/redmond" },
    { name: "Sammamish", path: "/locations/sammamish" },
    { name: "Seattle", path: "/locations/seattle" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Woodinville", path: "/locations/woodinville" },
    { name: "Kenmore", path: "/locations/kenmore" }
  ],
  kirkland: [
    { name: "Bellevue", path: "/locations/bellevue" },
    { name: "Redmond", path: "/locations/redmond" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Woodinville", path: "/locations/woodinville" },
    { name: "Seattle", path: "/locations/seattle" },
    { name: "Shoreline", path: "/locations/shoreline" }
  ],
  redmond: [
    { name: "Bellevue", path: "/locations/bellevue" },
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Sammamish", path: "/locations/sammamish" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Woodinville", path: "/locations/woodinville" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Seattle", path: "/locations/seattle" }
  ],
  bothell: [
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Woodinville", path: "/locations/woodinville" },
    { name: "Mill Creek", path: "/locations/mill-creek" },
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Lynnwood", path: "/locations/lynnwood" },
    { name: "Shoreline", path: "/locations/shoreline" },
    { name: "Seattle", path: "/locations/seattle" }
  ],
  kenmore: [
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Shoreline", path: "/locations/shoreline" },
    { name: "Seattle", path: "/locations/seattle" },
    { name: "Woodinville", path: "/locations/woodinville" },
    { name: "Lynnwood", path: "/locations/lynnwood" },
    { name: "Mill Creek", path: "/locations/mill-creek" }
  ],
  woodinville: [
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Redmond", path: "/locations/redmond" },
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Sammamish", path: "/locations/sammamish" },
    { name: "Mill Creek", path: "/locations/mill-creek" },
    { name: "Bellevue", path: "/locations/bellevue" }
  ],
  sammamish: [
    { name: "Bellevue", path: "/locations/bellevue" },
    { name: "Redmond", path: "/locations/redmond" },
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Woodinville", path: "/locations/woodinville" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Seattle", path: "/locations/seattle" },
    { name: "Kenmore", path: "/locations/kenmore" }
  ],
  lynnwood: [
    { name: "Shoreline", path: "/locations/shoreline" },
    { name: "Edmonds", path: "/locations/edmonds" },
    { name: "Mountlake Terrace", path: "/locations/mountlake-terrace" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Mill Creek", path: "/locations/mill-creek" },
    { name: "Seattle", path: "/locations/seattle" },
    { name: "Kenmore", path: "/locations/kenmore" }
  ],
  shoreline: [
    { name: "Seattle", path: "/locations/seattle" },
    { name: "Lynnwood", path: "/locations/lynnwood" },
    { name: "Edmonds", path: "/locations/edmonds" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Kirkland", path: "/locations/kirkland" },
    { name: "Mountlake Terrace", path: "/locations/mountlake-terrace" }
  ],
  edmonds: [
    { name: "Lynnwood", path: "/locations/lynnwood" },
    { name: "Shoreline", path: "/locations/shoreline" },
    { name: "Mountlake Terrace", path: "/locations/mountlake-terrace" },
    { name: "Seattle", path: "/locations/seattle" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Mill Creek", path: "/locations/mill-creek" }
  ],
  "mountlake-terrace": [
    { name: "Lynnwood", path: "/locations/lynnwood" },
    { name: "Shoreline", path: "/locations/shoreline" },
    { name: "Edmonds", path: "/locations/edmonds" },
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Mill Creek", path: "/locations/mill-creek" },
    { name: "Seattle", path: "/locations/seattle" }
  ],
  "mill-creek": [
    { name: "Bothell", path: "/locations/bothell" },
    { name: "Lynnwood", path: "/locations/lynnwood" },
    { name: "Mountlake Terrace", path: "/locations/mountlake-terrace" },
    { name: "Woodinville", path: "/locations/woodinville" },
    { name: "Kenmore", path: "/locations/kenmore" },
    { name: "Edmonds", path: "/locations/edmonds" },
    { name: "Shoreline", path: "/locations/shoreline" }
  ]
};
