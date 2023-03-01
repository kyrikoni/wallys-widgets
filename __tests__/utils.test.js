const calculatePacks = require("../src/utils");

test("return 250 x 1 for 1 widget ordered", () => {
  expect(calculatePacks(1)).toEqual([{ size: 250, quantity: 1 }]);
});
test("return 250 x 1 for 250 widgets ordered", () => {
  expect(calculatePacks(250)).toEqual([{ size: 250, quantity: 1 }]);
});
test("return 500 x 1 for 251 widgets ordered", () => {
  expect(calculatePacks(251)).toEqual([{ size: 500, quantity: 1 }]);
});
test("return 5000 x 2, 2000 x 1, 250 x 1 for 12,001 widgets ordered", () => {
  expect(calculatePacks(12001)).toEqual([
    { size: 5000, quantity: 2 },
    { size: 2000, quantity: 1 },
    { size: 250, quantity: 1 },
  ]);
});
test("return 5000 x 3, 2000 x 1, 500 x 2 for 17,777 widgets ordered", () => {
  expect(calculatePacks(17777)).toEqual([
    { size: 5000, quantity: 3 },
    { size: 2000, quantity: 1 },
    { size: 500, quantity: 2 },
  ]);
});
test("return 5000 x 3, 2000 x 1, 500 x 1 for 17,385 widgets ordered", () => {
  expect(calculatePacks(17385)).toEqual([
    { size: 5000, quantity: 3 },
    { size: 2000, quantity: 1 },
    { size: 500, quantity: 1 },
  ]);
});
test("return 5000 x 3, 2000 x 1, 500 x 1, 250 x 1 for 17,666 widgets ordered", () => {
  expect(calculatePacks(17666)).toEqual([
    { size: 5000, quantity: 3 },
    { size: 2000, quantity: 1 },
    { size: 500, quantity: 1 },
    { size: 250, quantity: 1 },
  ]);
});
