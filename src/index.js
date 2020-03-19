module.exports = function reverse(n) {
    return parser(n.toStr().split('').reverse().join(''));
};
