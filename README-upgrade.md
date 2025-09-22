# Torino Café — Upgraded Setup

This project includes:
- Split Webpack configs (common/dev/prod) with HtmlWebpackPlugin
- Babel presets for React + modern JS (with core-js)
- ESLint + Prettier ready to use
- GitHub Actions CI (lint + build + format check)

## Scripts
- `npm run start` — Dev server on http://localhost:3000
- `npm run build` — Production build to `dist/`
- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`

## Structure
```
.
├─ package.json
├─ .babelrc
├─ .eslintrc.json
├─ .prettierrc
├─ webpack.common.js
├─ webpack.dev.js
├─ webpack.prod.js
├─ public/
│  └─ index.html
├─ src/
│  ├─ index.js
│  ├─ App.jsx
│  └─ styles.css
└─ .github/workflows/ci.yml
```

## Notes
- If you target older browsers, `core-js` is already added and used via `preset-env` (`useBuiltIns: "usage"`).
- Do **not** commit `dist/` or `node_modules/`.
