// import { assert } from "https://deno.land/std@0.73.0/testing/asserts.ts";
// const [diagnostics, emitMap] = await Deno.bundle("/foo.ts", {
//     "/foo.ts": `import * as bar from "./bar.ts";\nconsole.log(bar);\n`,
//     "/bar.ts": `export const bar = "bar";\n`,
//   },{
//       outDir: "dist"
//   }
//   );
  
//   assert(diagnostics == null); // ensuring no diagnostics are returned
//   console.log(emitMap);

const result = await Deno.transpileOnly({
    "/foo.ts": `enum Foo { Foo, Bar, Baz };\n`,
  });
  
  console.log(result["/foo.ts"].source);
  console.log(result["/foo.ts"].map);