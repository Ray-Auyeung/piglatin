const translate = require("../src/piglatin.js");

describe(`At least five (5) tests for words starting with different vowels.`, () => {
  test(`translate("apple") → "appleway"`, () => {
    expect(translate("apple")).toBe("appleway");
  });
  test(`translate("elephant") → "elephantway"`, () => {
    expect(translate("elephant")).toBe("elephantway");
  });
  test(`translate("igloo") → "iglooway"`, () => {
    expect(translate("igloo")).toBe("iglooway");
  });
  test(`translate("octopus") → "octopusway"`, () => {
    expect(translate("octopus")).toBe("octopusway");
  });
  test(`translate("umbrella") → "umbrellaway"`, () => {
    expect(translate("umbrella")).toBe("umbrellaway");
  });
});

describe("At least two (2) tests for words starting with one consonant.", () => {
  test(`translate("giraffe") → "iraffegay"`, () => {
    expect(translate("giraffe")).toBe("iraffegay");
  });
  test(`translate("sushi") → "ushisay"`, () => {
    expect(translate("sushi")).toBe("ushisay");
  });
});

describe("At least one (1) test for words starting with two consonants.", () => {
  test(`translate("phone") → "onephay"`, () => {
    expect(translate("phone")).toBe("onephay");
  });
});
