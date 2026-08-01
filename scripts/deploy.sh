#!/usr/bin/env bash
#
# Build and publish to GitHub Pages.
#
# Pages serves the `gh-pages` branch, which holds the BUILT site and nothing
# else — no source, no history worth keeping. So it is rebuilt from scratch and
# force-pushed each time rather than merged into; there is no state on that
# branch anyone would want to preserve.
#
# The alternative is a GitHub Actions workflow (one is written and sitting at
# .github/workflows/deploy.yml). It needs a token with `workflow` scope, which
# the current one does not have:
#
#     gh auth refresh -s workflow      # then commit and push that file
#
# Until then, this script is the deploy.
set -euo pipefail

cd "$(dirname "$0")/.."

REPO="https://github.com/precraft-studio/island-webgl.git"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

# Refuse to publish a build made from uncommitted work: the live site would
# then correspond to no commit anyone can check out.
if [ -n "$(git status --porcelain -- src astro.config.mjs)" ]; then
  echo "error: uncommitted changes in src/ or astro.config.mjs — commit first." >&2
  exit 1
fi
SHA="$(git rev-parse --short HEAD)"

npx astro build

# `dist/.` rather than `dist` so the dotfiles come too — .nojekyll is in there,
# and without it GitHub's legacy Jekyll pipeline would drop the _astro/
# directory, which is every script and stylesheet the site has.
cp -r dist/. "$STAGE"/

# Carry the identity across explicitly. The staging repo is created from
# scratch in a temp directory, so it inherits nothing from this one, and git
# refuses to commit with the hostname-derived address it falls back to.
NAME="$(git -C "$OLDPWD" config user.name || git config --global user.name)"
EMAIL="$(git -C "$OLDPWD" config user.email || git config --global user.email)"

cd "$STAGE"
git init -q -b gh-pages
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" \
    commit -q -m "deploy: built site from master ${SHA}"
git push --force --quiet "$REPO" gh-pages:gh-pages

echo "deployed ${SHA} → https://precraft-studio.github.io/island-webgl/"
