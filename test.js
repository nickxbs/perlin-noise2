var perlin = require('./');
var assert = require('assert');

var noise1 = perlin.generateWhiteNoise(10, 10,{
	amplitude: 0.5,
	octaveCount: 8,
	persistence: 0.2,
	mode: 'random'
});
assert.strictEqual(noise1.length, 10 * 10);
for (var i = 0; i < noise1.length; i++) {
	assert.strictEqual(typeof noise1[i], 'number');
}
const sum1 = noise1.reduce((acc, i) => acc + i, 0) / 100
console.log(sum1)

/*
noise = perlin.generatePerlinNoise(25, 5);
assert.strictEqual(noise.length, 25 * 5);
for (var i = 0; i < noise.length; i++) {
	assert.strictEqual(typeof noise[i], 'number');
}

noise = perlin.generatePerlinNoise(100, 100, {
	amplitude: 0.5,
	octaveCount: 8,
	persistence: 0.2,
});
assert.strictEqual(noise.length, 100 * 100);
for (var i = 0; i < noise.length; i++) {
	assert.strictEqual(typeof noise[i], 'number');
}

*/
const noise2 = perlin.generatePerlinNoise(10, 10, {
	amplitude: 0.5,
	octaveCount: 8,
	persistence: 0.2,
	seed: Math.random().toString(),
	mode: 'daily'
});
assert.strictEqual(noise2.length, 10 * 10);
for (var i = 0; i < noise2.length; i++) {
	assert.strictEqual(typeof noise2[i], 'number');
	assert.strictEqual(noise2[i] > 1, false)
}
const sum2 = noise2.reduce((acc, i) => acc + i, 0) / 100

console.log(sum2)