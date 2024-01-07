const path = require("path");

const buildEslintCommand = (filenames) => [
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`,
  `npx prettier --write ${filenames.join(" ")}`,
];

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "npm run tsc --noEmit",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
