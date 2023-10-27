# HAR Sanitizer

https://har-sanitizer.pages.dev/

## To Update Fork and Github pages
* Pull from fork into main
* Merge into gh-pages
* Run `npm i && npm run build` This updates the docs/ files.
* Push changes.
## Development

To create a hot reload server running at localhost:3001

```
npm run dev
```

Example Request for API.

```
jq '{"har": .}' < /Users/jroyal/Downloads/test_har_sanitizer.har  | curl -X POST -H "Content-Type: application/json" --data @- localhost:3001/scrub > scrubbed.har
```
