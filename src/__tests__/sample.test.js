const sum = require("../main/sum");
const hello = require("../main/hello");
const Clazz = require("../main/classUsage");

test("1 + 2 は 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("5 + 8 は 13", () => {
  expect(sum(5, 8)).toBe(13);
});

test("-30 + -21 は -51", () => {
  expect(sum(-30, -21)).toBe(-51);
});

test("Clazzのコンストラクタに値を入れて値が取得できるか", () => {
  let clazz = new Clazz(1, 2);
  expect(clazz.value).toBe(3);
  expect(clazz.getValue()).toBe(3);
});

test("hello.jsのテスト hello to hello", () => {
  expect(hello("hello")).toBe("hello");
});
test("hello.jsのテスト hey  to hello", () => {
  expect(hello("hey")).toBe("hello");
});
test("hello.jsのテスト booooo to boy", () => {
  expect(hello("booooo")).toBe("boy");
});
test("hello.jsのテスト else to yeah", () => {
  expect(hello("ohmygod")).toBe("yeah");
});
