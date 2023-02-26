const { fahrenheitToCelsius, celsiusToFahrenheit } = require("../src/math");

test("Should convert 32 F to 0 C", () => {
  const degree = fahrenheitToCelsius(32);
  expect(degree).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  const degree = celsiusToFahrenheit(0);
  expect(degree).toBe(32);
});
