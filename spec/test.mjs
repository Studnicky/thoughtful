import assert from 'assert';
import { sort } from '../src/index.mjs';

assert.strictEqual(sort(50, 50, 50, 5), 'STANDARD', 'Test case 1 failed');
assert.strictEqual(sort(100, 100, 100, 19), 'SPECIAL', 'Test case 2 failed');
assert.strictEqual(sort(200, 100, 100, 10), 'SPECIAL', 'Test case 3 failed');
assert.strictEqual(sort(50, 50, 50, 25), 'SPECIAL', 'Test case 4 failed');
assert.strictEqual(sort(200, 200, 200, 30), 'REJECTED', 'Test case 5 failed');
assert.throws(() => sort('100', 100, 100, 10), /must be numbers/, 'Invalid type test 1 failed');
assert.throws(() => sort(100, null, 100, 10), /must be numbers/, 'Invalid type test 2 failed');
assert.throws(() => sort(100, 100, 'abc', 10), /must be numbers/, 'Invalid type test 3 failed');
assert.throws(() => sort(-50, 50, 50, 5), /positive values/, 'Negative dimension test failed');
assert.throws(() => sort(50, 50, 50, -1), /positive values/, 'Negative mass test failed');
assert.throws(() => sort(0, 50, 50, 5), /positive values/, 'Zero dimension test failed');

