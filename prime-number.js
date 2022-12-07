let num=13;
let count=0;
for(i=2;i<num.length;i++){
if(num%i==0)
count+=1;
}
if(count==0){
console.log("yes")
}else {
console.log("no")
}