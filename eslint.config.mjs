import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }
      ], // Ignore variables and arguments starting with '_'
      "@typescript-eslint/no-explicit-any": "error", // Disallow 'any' type
      "@typescript-eslint/explicit-function-return-type": "warn", // Enforce return types for functions
      "no-console": "warn", // Warn about console statements
      "no-var": "error", // Enforce using 'let' or 'const' instead of 'var'
    },
  },
];

export default eslintConfig;
