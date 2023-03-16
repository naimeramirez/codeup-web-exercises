//Write a function (stringLength) that takes a string and returns the length of the string
function stringLength(string){
    return string.length();
}

//test

describe('Unit Tests for the dtringLength function', function () {
    //length of the string
    //make sure it's a function
    it('should be a function', function () {
       expect(typeof stringLength).toBe('function');
    });

    //make sure the value passed (argument) is a string
    it('should accept a string', function () {
        expect(typeof stringLength(80)).toBe(false);
    });

    //make sure it returns a number
    it('should return a number', function () {
        expect(typeof stringLength('codeup')).toBe('number');
        expect(typeof stringLength('raining')).toBe('number');
        expect(typeof stringLength('webdev')).toBe('number');
    });

    //should return null if not a string
    it('should return null if not a string', function () {
        expect(stringLength(18)).toBe(null);
    });

});