// for (var i = 1; i <= 10; i++) {
//   console.log(`${i}隻`);
// }
var i = 1;
while (i <= 10) {
  if (i === 3) {
    i++;
    continue;
  }
  console.log(`${i}隻`);
  i++;
}
// while (true) {
//   console.log(`${i}隻`);
//   if (i === 10) {
//     break;
//   }
//   i++;
// }
