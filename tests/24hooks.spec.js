import { test, expect } from '@playwright/test';

test("Test01", async () => {
  console.log("I am Test01");
});

test("Test02", async () => {
  console.log("I am Test02");
});

test("Test03", async () => {
  console.log("I am Test03");
});

test("Test04", async () => {
  console.log("I am Test04");
});

test.beforeAll("beforeAll", async () => {
  console.log('beforeAll test');
});

test.afterAll("afterAll", async () => {
  console.log('afterAll test');
});

test.beforeEach("beforeEach", async () => {
  console.log('beforeEach test');
});

test.afterEach("afterEach", async () => {
  console.log('afterEach test');
});

// Order of execution 


// beforeAll 
// beforeEach - Test01 -afterEach -
// beforeEach - Test02 - afterEach -
// beforeEach - Test03 - afterEach -
// beforeEach - Test04 - afterEach -
// afterAll
