exports.handler = async(event,context)=>{
    const guides=[
        {title:'Blog1'},
        {author:'Luigi'},
        {age:28}
    ]
    return{
        status:200,
        body:JSON.stringify(guides)
    }
}