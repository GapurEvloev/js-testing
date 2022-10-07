import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

assert.equal(capitalize(''), '');

assert.equal(capitalize('hello'), 'Hello');

assert.notEqual(capitalize('hello'), 'hello');

console.log('Все тесты пройдены!');