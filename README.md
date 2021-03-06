# stack-epic-flow [![Build Status](https://travis-ci.org/emascarinas/stack-epic-flow.svg)](https://travis-ci.org/emascarinas/stack-epic-flow) [![Coverage Status](https://coveralls.io/repos/emascarinas/stack-epic-flow/badge.svg?branch=master)](https://coveralls.io/r/emascarinas/stack-epic-flow?branch=master)

Live site: http://emascarinas.github.io/stack-epic-flow/  - authentication needed

An impersonate option to view other profile by passing user_id as below.

http://emascarinas.github.io/stack-epic-flow/#/?id=581205  - just a random user_id

### About the site
A front end web site using Stack Exchange API to provide a more epic stackoverflow.com user experience.

When the application starts, a user will authenticate, and view own profile and stats. Able to view and search questions.

#### Home page have the following:
* Profile Information
* Badges
* Timeline of activity including Reputation, Badges, and Responses.
* A list of favorites.
* A tag cloud that will bring them directly to a search of open questions on that subject.

#### Search page have the following:
* List of questions with multiple sorting options.
* Title of question
* # of votes, answers, views for questions.
* When question was asked
* Tags associated with question.
* Tag cloud of questions in search results.

####Question page have the following:
* Title
* Body
* Comments with # of votes, duration for the Question
* Answers
* Comments with # of votes, duration for the Answer
* User can flag/unflag question as favorite.

### Technologies used:
* AngularJS
* Twitter Bootstrap
* Sass

### Added features:
* Fully responsive layout
* Can view any profile by providing id
* Loading indicator
* Global error handler
* Paginator
* Added open questions link for questions with no tag
* unit test using karma test runner and jasmine with istanbul as code coverage
* end to end test using protractor and jasmine
* travis ci and coverall - only had intial test running, will add more soon. Click on badges above to see details.
* grunt build system, npm/bower 
