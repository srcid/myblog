# Instruction

Instructions to run locally and contribute. I recommend to use asdf-vm/asdf to install the development stack.

## .tool-version

Rename the file dottool-version to .tool-version, then install the install the respective versions. Due to a bug with cloudflare pages I can't let it with the proper name.

## Installing dependencies

```shell
npm install
bundle install
```

## Running locallly


```shell
bundle exec jekyll serve [-l|--livereload --trace --incremental]
```

## Build

```shell
JEKYLL_ENV=production bundle exec jekyll build
```
