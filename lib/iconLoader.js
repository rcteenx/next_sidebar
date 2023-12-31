const fs = require("fs");

export function getIcon(slug) {
  return fs.readFileSync(`./content/icons/${slug}.svg`, {
    encoding: "utf8",
    flag: "r",
  });
}
