# ember-a-b

> Disclosure: This is in active development.

Simple AB testing for your Ember Apps.

```
ember install ember-a-b
```
## For Usage

### Examples

*Block with contextual components*: TODO
```
{{#ember-a-b as |ab|}}
  {{#ab.a}}
    Cute puppies!
  {{/ab.a}}

  {{#ab.b}}
    Tiny dog creatures
  {{/ab.b}}

  {{!TODO CTA stuff}}
  {{ab.cta}} 
    <button onclick={{action "purchase"}}>
      Buy now!
    </button>
  {{/ab.cta}}

{{/ember-a-b}}
```

TODO *Inline:* TODO
{{ember-a-b 
  a="Cute Puppies!"
  b="Tiny dog creatures"
  cta="#signUpButton"}}

### Configuration

Install and use right now.

TODO:

* Add a config option to randomize in testing
* configure to send data to external source
* configure to use extranal source to show a or b

### Testing

TODO:

* If testing, always show A by default
* add test helper to either show one or the other

### API

TODO:

## For Development

### Installation

* `git clone <repository-url>` this repository
* `cd ember-a-b`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
