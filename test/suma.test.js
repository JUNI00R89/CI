import test from 'node:test';
import assert from 'node:assert/strict';
function suma(a, b) {
return a + b;
}
test('suma 9 + 9 = 18', () => {
assert.equal(suma(9, 8), 17);
});
 