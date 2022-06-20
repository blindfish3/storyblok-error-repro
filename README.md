Demo of issue with importing Storyblok components from a Sveltekit library


This folder contains two projects:
- my-library: a component library intended to be packaged and imported into other projects
- my-app: an application that consumes library components


**Repro steps**

- in each project run `npm install`

- in my-library run the following commands:
  - `npm run package`
  - `cd package`
  - `npm link`
- in Storyblok set up components corresponding to those in the library:
  - `page` - a content type containing a Blocks field named `body`
  - `wrapper` - Nestable, containing a Blocks field named `body`
  - `content` - Nestable, containing a Text field named `text`

- in my-app:
  - add a .env file containing your Storyblok API-Key
  - run `npm link my-library`
  - run `npm run dev`

---
- in Storyblok add a page
- add a wrapper to the page
- add content to the wrapper

- open localhost:3000 in Storyblok.  You should see the following error:

```
500
Cannot read properties of null (reading 'wrapper')
TypeError: Cannot read properties of null (reading 'wrapper')
    at Module.getComponent (/home/bcalder/_/repro/my-library/node_modules/@storyblok/svelte/index.ts:55:34)
    at StoryblokComponent.svelte:8:16
    at Object.$$render (/home/bcalder/_/repro/my-app/node_modules/svelte/internal/index.js:1758:22)
    at eval (/@fs/home/bcalder/_/repro/my-library/package/components/page/SB_Page.svelte:15:118)
    at Proxy.each (/home/bcalder/_/repro/my-app/node_modules/svelte/internal/index.js:1724:16)
    at eval (/@fs/home/bcalder/_/repro/my-library/package/components/page/SB_Page.svelte:14:39)
    at Object.$$render (/home/bcalder/_/repro/my-app/node_modules/svelte/internal/index.js:1758:22)
    at StoryblokComponent.svelte:15:33
    at Object.$$render (/home/bcalder/_/repro/my-app/node_modules/svelte/internal/index.js:1758:22)
    at eval (/src/routes/[...path]/[slug].svelte:40:112)
```

To confirm that there's no issue with the components themselves I've included a duplicate lib folder in my-app.  In my-app/src/routes/__layout.svelte comment out the component import from my-library and uncomment the local import and everything works as expected.
