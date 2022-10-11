var a = [1, 2, 3, 4, 5];
const b = [2, 3, 4];

b.forEach((v) => {
	a = a.filter((u) => u !== v);
});
console.log(a);
