export NODE_ENV=production
GITHASH=${CIRCLE_SHA1:-$(git rev-parse HEAD)}

npm run build
npm run export
mv out/_next .
rm -rf out/static
mv out _out
mkdir -p out/builds/$GITHASH
mv _out/* out/builds/$GITHASH
rm -rf _out
mv _next out/
