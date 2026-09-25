import { describe, expect, test } from "vitest";
import { classNames } from "./className";

describe("classNames", () => {
  // --- Strings ---
  test("1 argument", () => {
    expect(classNames("class1")).toBe("class1");
  });

  test("multiple strings are joined with a space", () => {
    expect(classNames("a", "b", "c")).toBe("a b c");
  });

  // --- Empty / ignored values ---
  test("no arguments returns empty string", () => {
    expect(classNames()).toBe("");
  });

  test("ignores undefined and null", () => {
    expect(classNames("a", undefined, null, "b")).toBe("a b");
  });

  test("ignores empty strings", () => {
    expect(classNames("a", "", "b")).toBe("a b");
  });

  test("only ignored values returns empty string", () => {
    expect(classNames(undefined, null, "")).toBe("");
  });

  // --- Objects ---
  test("object keeps keys with true", () => {
    expect(classNames({ active: true })).toBe("active");
  });

  test("object removes keys with false", () => {
    expect(classNames({ active: false })).toBe("");
  });

  test("object with mixed true and false", () => {
    expect(classNames({ red: true, blue: false, green: true })).toBe(
      "red green",
    );
  });

  test("empty object returns empty string", () => {
    expect(classNames({})).toBe("");
  });

  // --- Mixing ---
  test("strings and objects together", () => {
    expect(classNames("btn", { primary: true, large: false }, "extra")).toBe(
      "btn primary extra",
    );
  });

  test("order is preserved", () => {
    expect(classNames({ b: true }, "a", { c: true })).toBe("b a c");
  });
});
