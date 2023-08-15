/*
Warning: Don't change anything here.
*/

describe('matchObjects', function () {
    it('firstObject has additional properties than secondObject and values are equal', function () {
        assert.equal(matchObjects({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }), true);
    });

    it('firstObject has same number of properties as secondObject and values are equal', function () {
        assert.equal(matchObjects({ hair: 'long', beard: true }, { hair: 'long', beard: true }), true);
    });

    it('firstObject is missing some properties than secondObject and values are equal', function () {
        assert.equal(matchObjects({ beard: true }, { hair: 'long', beard: true }), false);
    });

    it('firstObject has same number of properties as secondObject and values are different', function () {
        assert.equal(matchObjects({ hair: 'long', beard: true }, { hair: 'short', beard: true }), false);
    });
});