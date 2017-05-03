# NPM Library Version(s) Fetcher

Return the latest 5 (or less) versions of a particular NPM library, using the Libraries.io public API.

## Frameworks

* *AngularJS* - Because at the moment I'm quicker in Angular than React
* *Bootstrap* - Useful for fast web app prototyping 
* *lodash* - Fun with arrays!

## Solution

Due to time constraints from being under the weather, I opted to just run with Bootstrap's default low-level styles and animations, otherwise I would have put more effort into wireframes and overall UI design. At this point I would basically consider this prototype the "wireframe", and iterate on UI/UX from here. 

### Current State:

* Displays library name, description, and link to homepage
* Collapsible panels keep the user from being overwhelmed by data
* If no versions exist in the array, `latest_release_number` & `latest_release_published_at` are pushed to the versions array to keep logic clutter out of the HTML
* Error messaging if no results are returned
* "Spinner" icon to alert user to data being retrieved
* Filtered only libraries on NPM platform

### If I had more time:

* Filtering/sorting on results returned
* Caret on panel to indicate expanded/collapsed state
* Pagination
* Keyword search
* Tests!

### Caveats:

* API key is totally exposed on the front end
* Clicking on homepage URL expands/collapses panel
* Sites that use Bootstrap look like Sites That Use Bootstrap