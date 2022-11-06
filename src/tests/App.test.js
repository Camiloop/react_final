import { reverseString } from "../App";

describe("Test de la funcion para revertir strings", () => {
  describe("reverseString", () => {
    test("Debe retornar string", () => {
      const result = reverseString("camilo");
      expect(typeof result).toBe("string");
    });

    test("Debe retornar un string invertido", () => {
      expect(reverseString("camilo")).toBe("olimac");
    });
  });
});
