var fs = require('fs')
var test = require('tape')

test('exists template.ejs', function (t) {
    var actual = fs.existsSync('template.ejs')
    var expected = true

    t.same(actual, expected)
    t.end()
})

test('exists style.css', function (t) {
    var actual = fs.existsSync('style.css')
    var expected = true

    t.same(actual, expected)
    t.end()
})
