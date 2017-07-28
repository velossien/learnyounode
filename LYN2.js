var sum=0;
for(var i=2; i<process.argv.length;i++) {
 sum=sum+parseInt(process.argv[i],10);
}
console.log(sum);