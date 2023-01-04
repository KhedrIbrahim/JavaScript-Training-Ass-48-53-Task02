let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i > stop ; i--) {

    if (i < start) {
        i = `0${i}`;
    }
    console.log(i)
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04