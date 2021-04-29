exports.handler = async()=>{
    console.log('function running')
    const data = {name:'JJ',age:25,job:'desinger'}

    return{
        statusCode:200,
        body:JSON.stringify(data)
    }
}