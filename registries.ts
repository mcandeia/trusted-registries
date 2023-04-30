export default function () {
  return Promise.resolve({
    "deco-sites": {
      type: "http",
      baseUrl: (alias: string) => {
        const [deployment, ...urls] = alias.split(
          "@",
        );
        return `https://deco-sites-${deployment}.deno.dev${urls.join("@")}`;
      }, // `deco-sites.name-deployment@/url
    },
    "local": {
      type: "http",
      baseUrl: "http://localhost:8000",
    },
    "deco": {
      org: "deco-sites",
      repo: "deco",
      type: "github",
    },
    "fashion": {
      org: "deco-sites",
      repo: "fashion",
      path: "/workflows",
      type: "github",
    },
    "mcandeia": {
      org: "mcandeia",
      repo: "/workflows",
      type: "github",
    },
  });
}
