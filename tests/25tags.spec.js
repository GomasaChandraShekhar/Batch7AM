import { test, expect } from '@playwright/test';


// Smoke, Stage, Prod, Regression

// tag

test.describe("Group01", { tag: '@Smoke' }, async () => {

  test("Test01", async () => {
    console.log("I am Test01");
  });

  test("Test02", async () => {
    console.log("I am Test02");
  });

});

test.describe("Group02", { tag: '@Stage' }, async () => {

  test("Test03", async () => {
    console.log("I am Test03");
  });

  test("Test04", async () => {
    console.log("I am Test04");
  });

});


test.describe("Group03", { tag: ['@Stage', '@Prod'] }, async () => {

  test("Test05", async () => {
    console.log("I am Test05");
  });

  test("Test06", async () => {
    console.log("I am Test06");
  });

});

test.describe("Group04", { tag: ['@Stage', '@Prod', '@Regression'] }, async () => {

  test("Test05", async () => {
    console.log("I am Test05");
  });

  test("Test06", async () => {
    console.log("I am Test06");
  });

  test("Test04", async () => {
    console.log("I am Test04");
  });

});



