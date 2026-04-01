// Nearby cities data for each location page
export const nearbyCitiesData: Record<string, Array<{ name: string; path: string }>> = {
  seattle: [
    { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning" },
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Redmond", path: "/redmond-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
    { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" }
  ],
  bellevue: [
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Redmond", path: "/redmond-roof-gutter-cleaning" },
    { name: "Sammamish", path: "/sammamish-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" }
  ],
  kirkland: [
    { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning" },
    { name: "Redmond", path: "/redmond-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" }
  ],
  redmond: [
    { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning" },
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Sammamish", path: "/sammamish-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" }
  ],
  bothell: [
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
    { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning" },
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" }
  ],
  kenmore: [
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
    { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
    { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
    { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning" }
  ],
  woodinville: [
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Redmond", path: "/redmond-roof-gutter-cleaning" },
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Sammamish", path: "/sammamish-roof-gutter-cleaning" },
    { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning" },
    { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning" }
  ],
  sammamish: [
    { name: "Bellevue", path: "/bellevue-roof-gutter-cleaning" },
    { name: "Redmond", path: "/redmond-roof-gutter-cleaning" },
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" }
  ],
  lynnwood: [
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
    { name: "Edmonds", path: "/edmonds-roof-gutter-cleaning" },
    { name: "Mountlake Terrace", path: "/mountlake-terrace-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" }
  ],
  shoreline: [
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
    { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
    { name: "Edmonds", path: "/edmonds-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Kirkland", path: "/kirkland-roof-gutter-cleaning" },
    { name: "Mountlake Terrace", path: "/mountlake-terrace-roof-gutter-cleaning" }
  ],
  edmonds: [
    { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
    { name: "Mountlake Terrace", path: "/mountlake-terrace-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning" }
  ],
  "mountlake-terrace": [
    { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" },
    { name: "Edmonds", path: "/edmonds-roof-gutter-cleaning" },
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Mill Creek", path: "/mill-creek-roof-gutter-cleaning" },
    { name: "Seattle", path: "/seattle-roof-gutter-cleaning" }
  ],
  "mill-creek": [
    { name: "Bothell", path: "/bothell-roof-gutter-cleaning" },
    { name: "Lynnwood", path: "/lynnwood-roof-gutter-cleaning" },
    { name: "Mountlake Terrace", path: "/mountlake-terrace-roof-gutter-cleaning" },
    { name: "Woodinville", path: "/woodinville-roof-gutter-cleaning" },
    { name: "Kenmore", path: "/kenmore-roof-gutter-cleaning" },
    { name: "Edmonds", path: "/edmonds-roof-gutter-cleaning" },
    { name: "Shoreline", path: "/shoreline-roof-gutter-cleaning" }
  ]
};
