const arr=[55,5,8,5,8,1,545,5,]

//just for display item indexs
for(const a in arr)
    console.log('--',a)

//just for display item values
for(const a of arr)
    console.log('--',a)

//for display both
arr.forEach((item,index)=>console.log(index,item))