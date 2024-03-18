function addargy(){
    const adgu=Array.from(arguments);
    const addArguments=adgu.reduce((accumulator,current)=>{
       return accumulator+current
    })
    console.log(addArguments)
}
