# 24dot7 FE

## Recommended system

- Nodejs: >= 18
- Pnpm: latest version

## Structure - monorepo

```sh
|- 24dot7
  |- apps
    |- landing-page #landing page
  |- packages # this folder used to shared source code for apps
    |- types
    |- tsconfig
    ...
  package.json
  ...
```

## Commands

- Installation:

```sh
# Install all packages includes root, apps/*, packages/*
pnpm i
# Add new package to landing-page
pnpm add <package@version> --filter landing-page
```

- Run Dev:

```sh
# Run only landing-page
pnpm dev --filter landing-page
```

- Run Build:

```sh
# Build all apps and packages
pnpm build
# Build only landing-page
pnpm build --filter landing-page
```
