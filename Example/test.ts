import { assertEquals } from "https://deno.land/std@0.73.0/testing/asserts.ts";
import { sum } from "./testLogi.ts";
Deno.test("check on foo", () => {
    class Foo {}
    const foo1 = new Foo();
    const foo2 = new Foo();
    assertEquals(foo1, foo2, "not eq");
  });
  Deno.test("check on sum",()=>{
    let result = sum(2,2)
    assertEquals(result,4,`result should be 4, but output is ${result}.`);
  });