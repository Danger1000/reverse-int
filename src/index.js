module.exports = function reverse(n) {
    return parser(n.toString().split('').reverse().join(''));
};
