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
  12. put a map in App.js
  13. run test and watch it succeed