/**
 * Add copyright year to footer.
 */
const addCopyright = () => {
  const year = document.getElementById('copyright-year');
  if(year) {
    year.innerText = (new Date()).getFullYear();
  }
};

/*
* Call common page tasks
*/
document.addEventListener('DOMContentLoaded', (event) => {
  addCopyright();
});