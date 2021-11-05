#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm build

# commit
git add -A
git commit -m "Updated gh-pages"

# push
git subtree push --prefix dist origin gh-pages
git push origin master
