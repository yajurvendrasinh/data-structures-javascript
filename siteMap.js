const UNCHECKED = 0;
const CHECKED = 1;
const INDETERMINATE = 2;

class TableController {
  constructor() {
    // Initialize some variables?
    this.siteMap = new Map();
    this.selectAll = UNCHECKED;
  }

  ////////////////////////////////////////
  // Questions answered by this class
  ////////////////////////////////////////

  // When called, should return true when the site
  // with the specified site is checked. "site" is
  // a string.
  getIsSiteCheckboxSelected(site) {
    if (this.selectAll === 1) return true;
    // if the site exists inthe lis
    if (this.siteMap.has(site)) {
      return Boolean(this.siteMap.get(site).value); // 1 or 0
    }
    return false;
  }

  // When called, should return either CHECKED, UNCHECKED,
  // or INDETERMINATE indicating the current state of the
  // 'select all' checkbox.
  getSelectAllCheckboxState() {
    // ???
    let counter = 0;
    for (let stateValue of this.siteMap.values) {
      // [0, 1, 0, 1, 1]
      counter = counter + stateValue;
    }

    if (counter >= 1 && counter < this.siteMap.size) {
      this.selectAll = INDETERMINATE;
      return this.selectAll;
    }
    if (counter === this.siteMap.size) {
      this.selectAll = CHECKED;
      return this.selectAll;
    }
    return UNCHECKED;
  }

  ////////////////////////////////////////
  // Information received by this class
  ////////////////////////////////////////

  // Will be called by the UI whenever the "select all" checkbox
  // is clicked.
  handleSelectAllCheckboxClicked() {
    if (this.selectAll === INDETERMINATE || this.selectAll === UNCHECKED) {
      this.selectAll = CHECKED;
      for (let site of this.siteMap) {
        this.siteMap.set(site, CHECKED);
      }
    } else {
      this.selectAll = UNCHECKED;
      for (let site of this.siteMap) {
        this.siteMap.set(site, UNCHECKED);
      }
    }
    // ???
  }

  // Will be called by the UI whenever any of the checkboxes
  // next to a single site are clicked. site is a string.
  handleSingleSiteCheckboxClicked(site) {
    // ???
    //
  }

  // This function will be called when new sites are loaded into the
  // UI from the server. newSites is an array of strings.
  addSites(newSites) {
    // ???
    const selectAllState = this.selectAll === 1 ? 1 : 0;
    newSites.forEach((site) => {
      this.siteMap.set(site, selectAllState);
    });
  }

  // This function will be called in order to notify this
  // instance of the total number of sites that are in the
  // list on the SERVER. This will be called only once.
  // totalNumberOfSitesOnServer is a number.
  setTotalNumberOfSitesInList(totalNumberOfSitesOnServer) {
    // ???
  }
}
