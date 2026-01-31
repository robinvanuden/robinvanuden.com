import { blankIconSet } from "@iconify/tools";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import type { IconifyInfo, IconifyJSON } from "@iconify/types";

// put the icons and the prefix you want them to have together in one object.
const icons = [
  { icons: far, prefix: "far" },
  { icons: fas, prefix: "fas" },
  { icons: fab, prefix: "fab" },
];

// set the base info
const baseInfo = {
  name: "Font Awesome",
  author: {
    name: "Font Awesome",
  },
  license: {
    title: "Commercial License",
    url: "https://fontawesome.com/license",
  },
  height: 512,
} as const satisfies IconifyInfo;

export function defineIcons() {
  const collections: IconifyJSON[] = [];
  // iterate through the icons and generate the json files
  for (const iconData of icons) {
    const iconSet = blankIconSet(iconData.prefix);
    iconSet.info = structuredClone(baseInfo);
    for (const { icon, iconName } of Object.values(iconData.icons)) {
      const [width, height, ligatures, _, svgPathData] = icon;

      // handle strings and array differently from each other
      const body =
        typeof svgPathData === "string"
          ? `<path fill="currentColor" d="${svgPathData}" />`
          : `<g fill="currentColor">${svgPathData.map((x) => `<path d="${x}" />`).join("")}</g>`;

      iconSet.setIcon(iconName, {
        body,
        height,
        width,
      });

      ligatures.forEach((x) => {
        // ignore the aliases that are numbers.
        if (Number.isNaN(+x)) iconSet.setAlias(x, iconName);
      });
    }
    collections.push(iconSet.export());
  }
  return collections;
}
