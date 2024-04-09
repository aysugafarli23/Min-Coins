let deno = [1,2,5,10,20,50,100,200,500];
let n=deno.length;

function findMin(V){
    
    let ans=[];
    for (let i =n-1; 1>=0; i--){
        while(V>=deno[i]){

            V-=deno[i];
            ans.push(deno[i]);
        }
    }


    for (let i=0; i<ans.length; i++){
        console.log(" " + ans[i]);
    }
}

n=93;
console.log(
    "Following is minimal number " +"of change for" + n + ": ");
     findMin();
