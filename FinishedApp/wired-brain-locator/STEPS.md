#Steps to make the wire-brain-locator

  1. create-react-app wired-brain-locator
  2. cd wired-brain-locator
  3. npm start (to show it off)
  4. copy App.test.js and rename to MapBox.test.js
  5. modify MapBox.test.js for new component
  6. npm test and watch it fail
  7. copy App.js and rename to MapBox.js
  8. modify App.js to be MapBox.js
  9. run test and watch it succeed
  10. write test: App.js should display a map
  11. npm test and watch it fail
  Note that it fails because of a problem with the child. problem?
  12. do I need to start doing shallow render with enzyme here?
  12. put a map in App.js
  13. run test and watch it succeed
  14. add some styles to make map look like something
  15. write a test that there should be a search box above the map
  16. npm test and watch it fail
  17. write a test that SearchBox should render
  18. make a new SearchBox component, put it in place on App
  19. Run test, watch things work.
  20. Style the searchbox
  21. 