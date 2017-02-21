# car-searcher

I have created a screencast video showing the application in action that can be viewed [here](https://www.screencast.com/t/gzohSxqVcBTn)

I decided to use Ember to build the app as I believe it's the most scalable framework and I wanted to try out [ember-cli-mirage](http://www.ember-cli-mirage.com/).

It's a bit much for a small application like this however it gives so much out of the box and I really love the organisation convention. 


Ember-cli-mirage lets you fake a server on the client which is perfect to try out here. The application flow is:
* on boot the instance-initializer makes a call to get a local copy of the JSON file
* this is then stored in localStorage to make it available to mirage
* mirage loads and gets the objects from local storage
* mirage formats the local storage in a way that EmberData can consume
* mirage then acts as if it's a server and GET requests are sent for
    * rental companies
    * rental details
    * cars
* this emulates an API response and means the front end work can continue wihout a backend dependancy
* data from mirage then populates the Ember models and can be worked with in the templates

The application meets all of the minimum criteria and is easily scalable. I don't have much more time I can spend on it but if I did I would:
* allow the user to sort based on the fields they want
* add better integration and acceptance tests - now I am using the defaults
* split the UI further down into components



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd car-searcher`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
