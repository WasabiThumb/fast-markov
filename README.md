# fast-markov
Quick and easy Markov chain generator for NodeJS
(The first functional build is 1.2.0. Please do not download a version earlier than that.)

Markov chain generator for creating similar but not identical phrases.

To use this library, simply require the module and use require(...).generate("") as a function, with the only arguments being the name of a file full of training data sentences, seperated by newlines.

You may need a large amount of training data for the module to pick up on intonation, vowel and consonant rules, etcetera. This module is relatively fast compared to other chain generators, but will still take some time.

Example of usage:
```
const markov = require("fast-markov")
var generated = markov.generate("../bData.txt");
generated
	.then((res) => { console.log(res) })
	.catch((err) => { console.error(err) });
// bData contains the bee movie script
// console: humm, honey.
```
