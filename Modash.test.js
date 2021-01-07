import Modash from './Modash';

function assertEqual(description, actual, expected) {
    if (actual === expected) {
        console.log(`[PASS] ${description}`);
    } else {
      console.log(`[FAIL] ${description}`);
      console.log(`\tactual: '${actual}'`);
      console.log(`\texpected: '${expected}'`);
    }
}

let actual;
let expected;
let string;

string = 'there was one catch, and that was CATCH-22';
actual = Modash.truncate(string, 19);
expected = 'there was one catch...';

assertEqual('`truncate()`: truncates a string', actual, expected);