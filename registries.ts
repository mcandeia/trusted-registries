export default function () {
  return Promise.resolve({
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
