# aktenzeichen-js [![Build Status](https://travis-ci.org/0x46616c6b/aktenzeichen-js.svg?branch=master)](https://travis-ci.org/0x46616c6b/aktenzeichen-js)

Damn small javascript class to parse a german ["Aktenzeichen"](https://de.wikipedia.org/wiki/Aktenzeichen_(Deutschland)) and get the parts of it.

## Usage

    const Aktenzeichen = require('./Aktenzeichen');
    let aktenzeichen = new Aktenzeichen('212 Ds 142 Js 7294/17');
    
    aktenzeichen.courtNumber()      # "212"
    aktenzeichen.courtType()        # "Ds"
    aktenzeichen.prosecutorNumber() # "142"
    aktenzeichen.prosecutorType()   # "Js"
    aktenzeichen.reference()        # "7294"
    aktenzeichen.year()             # "17"

See tests for more examples.

## Contribute

Feel free to open issues and pull requests.
