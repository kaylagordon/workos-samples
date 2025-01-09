# WorkOS Sample Apps - Kayla (DSE)

## Live Site
- Deployed here: [https://kaylagordon.github.io/workos-samples/](https://kaylagordon.github.io/workos-samples/)
- Updated with every `git push`
- If you'd like to deploy your copy, follow [this video walkthrough](https://www.youtube.com/watch?v=uEEj2c3_ydg)

## Local Set Up
1. Fork and clone this repo
2. `cd` into the directory
3. `npm i`
4. `npm run dev`

## Adding New Tiles
Add new app data to `/src/appsData.js` in this format:
```js
  { 
    category: 'SSO', 
    language: 'TypeScript',
    codeToCopy: '<CLI command to copy>',
    url: '<port used by this app>'
  }
```
