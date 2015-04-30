
var isValid = require('../lib/isValidColor'),
    should = require('should'),
    // Hex examples
    invalidHex = ['#nope', '#ffff', '#ff', '#ffFfFg', '#fffffff'],
    validHex = ['#123456', '#123', '#fff', '#ffffff', '#ABCDEF', '#AbC'],
    // RGB examples
    invalidRgb = ['rgb(2,3,4,5)','rgb(256,3,4 )','rgb(-1,100,200)', 'rgp(255,255,255)','rgb(3,2)', 'rgb(    0,0,0   )'],
    validRgb = ['rgb( 100, 200, 255 )','rgb(1,2,3)','rgb( 0, 0, 0)'],
    // RGBa examples
    invalidRgba = ['rgbd(2,3,4,5)','rgba(256,0,300,100)','rgba(1000,3,4, 4000 )','rgpa(255,255,255,255)','rgb(3,2)', 'rgb(    0,0,0   )'],
    validRgba = ['rgba( 100, 200, 255, 0 )','rgba(123,222,111,0)','rgba( 0, 0, 0, 0)'],
    invalidColorStrings = ['start-wearing-purple', ' black ', 'bleck', 'weit', 'transparent '],
    validColorStrings = ['black', 'white', 'red', 'green', 'transparent'];

describe("Hex value tester", function () {
    // HEX
    it("should return false on invalid hex strings", function(done) {
        invalidHex.forEach(function (hex) {
            isValid(hex).should.equal(false);
        });
        done();
    });
    it("should return true on valid hex strings", function(done) {
        validHex.forEach(function (hex) {
            isValid(hex).should.equal(true);
        });
        done();
    });
    // RGB
    it("should return false on invalid rgb strings", function(done) {
        invalidRgb.forEach(function (rgb) {
            isValid(rgb).should.equal(false);
        });
        done();
    });
    it("should return true on valid rgb strings", function(done) {
        validRgb.forEach(function (rgb) {
            isValid(rgb).should.equal(true);
        });
        done();
    });
    // RGBa
    it("should return false on invalid rgb strings", function(done) {
        invalidRgba.forEach(function (rgba) {
            isValid(rgba).should.equal(false);
        });
        done();
    });
    it("should return true on valid rgb strings", function(done) {
        validRgba.forEach(function (rgba) {
            isValid(rgba).should.equal(true);
        });
        done();
    });
    // Color strings
    it("should return false on invalid color strings", function(done) {
        invalidColorStrings.forEach(function (color) {
            isValid(color).should.equal(false);
        });
        done();
    });
    it("should return true on valid rgb strings", function(done) {
        validColorStrings.forEach(function (color) {
            isValid(color).should.equal(true);
        });
        done();
    });
});