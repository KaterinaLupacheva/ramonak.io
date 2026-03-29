import nextVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";

const config = [...nextVitals, prettierConfig];

export default config;
