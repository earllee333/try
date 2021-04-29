exports.handler = async(event,context)=>{
    const guides=[
        {title:'Blog1',author:'Luigi',age:18},
        {title:'Blog2',author:'Mario',age:25},
        {title:'Blog3',author:'Naween',age:35},
    ]
    
    if(context.clientContext.user){
         return{
        statusCode:200,
        body:JSON.stringify(guides)
     }
    }
    return{
        statusCode:401,
        body:JSON.stringify({mssg:'Sorry... You do not have permession to see'})
    }
   
}
