function hello(str) {
    if (str.beginWith("h")) {
        return "hello";
    } else if (str.beginWith('b')) {
        return "boy";
    } else {
        return "yeah";
    }
}
module.exports = hello;