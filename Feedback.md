# Checklist for Northcoders News - Front End

## README

Reach readme, please include the following along with anything else you want when you rewrite

- [ ] provide general info about app
- [ ] clear instructions on how to run locally
- [ ] link to API & back end repo
- [ ] specify minimum versions
- [x] deployed
- [ ] link to deployed version

## UX

- [x] Basic styling added
- [ ] Responsive design - clipping on mobile
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc) though not so much on mobile due to clipping
- [x] Refreshing doesn’t cause an issue on sub-pages
- [x] No errors in the console
- [ ] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading
  - could not vote on comments or delete

## Functionality

### Login

- [ ] Some indication of who is logged in - add the name of the logged in user somewhere, maybe under login

### Articles

- [x] Serves all articles / top articles
- [x] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load - can vote infinitely
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes

### Individual Article / Comments

- [x] Individual articles are served with comments
- [ ] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- [x] Can post new comments, which are persistent
- [ ] Can only delete comments of logged in user
- [ ] Deleted comments don’t re-appear on re-render/refresh

### Additional functionality:

- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

## Error Handling - no error handling as of this point!

- [ ] Bad url
- [ ] Bad topic slug in url
- [ ] Bad article id in url
- [ ] Bad username in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [ ] Well named components
  - Card is not a very clear name, and i can't see where it's being used?
- [ ] Functional components used where possible
  - no functional components used, a few of the components you have can be simplified, for example taking the comments out of the Article component, especially when you add voting and deletion on them; the form for a new comment can be it's own component too.
- [x] `node_modules` git ignored
- [ ] Components reused where possible (`Articles` / `Voter`...)
  - reusing Articles but not Voting, as comments cannot be voted on
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [ ] Use object destructuring where possible - not used as much as possible
- [ ] No `console.log`s / comments - there are some about
- [ ] Tidy? If not: ESLint / Prettier - it's mostly CSS which is cluttering stuff up
- Link is required in App but never used
- Router is required in Topic but never used
- Card is required in Nav but never used
- when using default values use values of the appropriate data type in state, if you are going to have a string, start with an empty string
- working with window DOM element in React is not the way forward; as only used in Heading, you can extract the resizing logic to a css file and use onscroll css properties to change the size
- have .css files rather than styling in line, as it makes your code harder to read
- using "hidden" property is not ideal to for accessibility reasons, as it is still part of the DOM screen readers pick it up. Please use conditional rendering instead.
- PropTypes would be a good addition here

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Add integration tests with `cypress`
- [ ] Use Context API for sharing logged in user amongst components

- nothing when page first loads, needs some greeting screen or all articles by default - implementing now
- image's position displeases me, perhaps look at banners with 100% width
- the slash hanging over from the header even more so
- indicate 'date' is the default selected button, a css style you can add to the button which was pressed
- what went wrong with the login? password or name? please remember to provide instructions on the readme for hiring partners to know what credentials to use - not a big deal, leave if you have security concerns
- green box when logged in - perhaps re-route to home lol
- when comment is posted it needs to appear in the list of comments so you dont have to refresh, also, empty the writing box :D once a comment is posted and it appears at the top of the list, please have the page snap back to top so the user can see it without having to scroll potentially a few hundred comments
- voting on comments?
- logging out? :D
- scrolling on mobile should finish when the comments finish - aware and working on
- there is a lot of clipping happening on phone view
