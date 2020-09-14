# Vue.js 3.x.rc Step by Step

## Setup

```sh
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev


// or use yarn

$ yarn create vite-app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev

```

## vite 配置

根目录下创建 `vite.config.(js|ts)`（src 同级目录）, [可配置项](https://github.com/vitejs/vite/blob/master/src/node/config.ts)

## Vuex

```shell
npm i -S vuex@next
```

## Vue-Router

```shell
npm i -S vue-router@next
```

## Axios

```shell
npm i -S axios
```

> axios 装完后必须要重启 devServer，否则会提示 axios 没有默认导出，重启之后即可正常使用。
