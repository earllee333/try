exports.handler = async()=>{
    console.log('function running')
    const data = {name:'mario',age:25,job:'desinger'}

    return{
        statusCode:200,
        body:JSON.stringify(data)
    }
}