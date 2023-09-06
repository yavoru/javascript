//Task 9
// const arr=[0, 10, 9, 0, 8, 7, 7, 0, 5, 0, 8, 1, 5, 5, 6];
// var n=arr[0];
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]>n) n=arr[i];
// }
// var cnt=new Array(n+1).fill(0);
// for(var i=0;i<n;i++)
// {
//     cnt[arr[i]]++;
// }
// for(var i=0;i<=n;i++)
// {
//     if(cnt[i]!=0) {console.log(i,cnt[i])}
// }
//Task 10

const arr=[0, 10, 9, 0, 8, 7, 7, 0, 5, 0, 8, 1, 5, 5, 6];
var n=arr.length,max=arr[0],ans=max;
for(var i=0;i<n;i++)
{
    if(arr[i]>max) max=arr[i];
    if((arr[i]<max)&&(arr[i]>ans)) ans=arr[i];
}
console.log(ans)