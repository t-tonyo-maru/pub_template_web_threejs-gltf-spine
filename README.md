# pub_pub_template_web_threejs-gltf-spine-gltf-spine

## Summary

This repository is starter template of [Three.js](https://threejs.org/) + [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) + [Spine](https://esotericsoftware.com/).

- [explanatory article (ja)](https://zenn.dev/t_tonyo_maru/articles/61d4d374c3b5d8/)
- [Sample page](https://t-tonyo-maru.github.io/pub_template_web_threejs-gltf-spine/)

## Development environment

| tool | version |
| ---- | ------- |
| node | >=20    |

## Commands

| Command         | Content           |
| --------------- | ----------------- |
| npm run dev     | run dev server    |
| npm run build   | build app         |
| npm run preview | preview built app |
| npm run format  | run code format   |
| npm run test    | run vitest        |

## Quik Start

1. Match your environment to the Development environment.
2. Setup Github pages path. (If don't use github pages, you can skip this step.)
   1. Create /.env
   2. Write `VITE_GITHUB_PAGES_PATH=/github-pages-path` in .env.
      - Please refer .env.sample.
3. Run `npm i` command
4. Run `npm run dev` command

## Github-pages Deploy Flow

1. Setup Github Pages.
2. Create /.env .
   - Write `VITE_GITHUB_PAGES_PATH=/github-pages-path`.
3. Run `npm run build`.
   - If the command completes successfully, dist directory generated at root directory.
4. Rename dist directory to docs.
5. Push branch that setuped for Github Pages.

## Github-pages deploy check list

- [ ] Create .env
  - [ ] write `VITE_GITHUB_PAGES_PATH=/github-pages-path`
- [ ] Create images
  - [ ] OGP Image: /public/assets/images/ogp_image.jpg
  - [ ] Icon(ico): public/assets/images/icon/favicon.ico
  - [ ] Icon(png): public/assets/images/icon/favicon.png
- [ ] Fix index.html's url
  - OGP url …etc
- [ ] Rename dist directory to docs

## Directory structure

```
/
├── .env
├── .env.sample
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── assets
│       ├── images … image files
│       ├── models … GLTF(3D data) files
│       │   ├── boombox.glb
│       │   └── texture.jpg
│       └── spines … Spine files
│           ├── model.atlas
│           ├── model.json
│           └── model.png
├── src
│   ├── main.ts
│   ├── reset.css
│   ├── utils … util functions
│   └── vite-env.d.ts
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Links

- Three.js
  - [Three.js](https://threejs.org/)
- Three.js x Spine
  - [spine-ts/spine-threejs/example](https://github.com/EsotericSoftware/spine-runtimes/tree/4.2/spine-ts/spine-threejs/example)
  - [spine-ts/spine-threejs/example/index.html](https://github.com/EsotericSoftware/spine-runtimes/blob/4.2/spine-ts/spine-threejs/example/index.html)
- GLTFLoader | Three.js
  - [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- Spine
  - [Spine](https://esotericsoftware.com/)
