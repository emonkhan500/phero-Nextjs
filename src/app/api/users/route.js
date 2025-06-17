export async function GET(){
    return Response.json({
        comment
    })
    
}


export async function POST(request){
    const newComment = request.json()
    comment.push(newComment)
    return Response.json({
        
    }) 
}
const comment=[
    {
        id:1,
        name:'emon'
    },
    {
        id:1,
        name:'emon'
    },
    {
        id:1,
        name:'emon'
    },
    {
        id:1,
        name:'emon'
    }
]