const path = require("path");

const buildEslintCommand = (filenames) => [
  `eslint --fix --no-warn-ignored ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .map((f) => JSON.stringify(f))
    .join(" ")}`,
  `npx prettier --write ${filenames.join(" ")}`,
];

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
