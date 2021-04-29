exports.handler = async(event,context)=>{
    const guides=[
        {title:'Blog1'},
        {author:'Luigi'},
        {age:28}
    ]
    if(context.clientContext.user){
        return{
        status:200,
        body:JSON.stringify(guides)
     }
    }
    return{
        status:401,
        body:JSON.stringify({mssg:'You do not have promision to see this'})
    }

    
}