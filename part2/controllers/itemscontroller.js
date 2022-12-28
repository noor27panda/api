const data = [
    {id: 1, content: "this is 1st item", deletedAt: null},
    {id: 2, content: "this is 2nd item", deletedAt: null},
]

const getallitems = (req, res) => {
    const allitems = data.filter(item => item.deletedAt == null)
    
    return res.send({
        success: true,
        msg: "you get all posts",
        data: allitems.map(item => {
            return {id: item.id, content: item.content}
        })
    })
}

const getsingleitems  = (req, res) => {
     const itemID = req.params.id
     const item = data.find(item => item.id == itemID)
     if(!item)  
        return res.send({ success: false, msg: "not found !", data : [] })
     if(item.deletedAt != null)
        return res.send({ success: false, msg: "not found !", data : [] })
     return res.send({
        success: true,
        msg: "you get single post",
        data : item
    })
}

const createitem = (req, res) => {
    const {content} = req.body
    if(content?.length ) {
        data.push({
            id: data.length + 1,
            content,
            deletedAt: null
        })
        return res.send({
            success: true,
            msg: "item is created !",
            data : data[data.length - 1]
        })
    }
    return res.send({
        success: false,
        msg: "content is null",
        data : []
    })
}

const deleteitem = (req, res) => {
    const { id } = req.params
    const index = data.findIndex(item => item.id == id)
    if(index != -1) {
        if(data[index].deletedAt) {
            return res.send({
                success: false,
                msg: "not found",
                data : []
            })
        }else {
            data[index].deletedAt = Date.now() 
            return res.send({
                success: true,
                msg: "item has deleted",
                data : []
            })
        }
    }
    return res.send({
        success: false,
        msg: "not found",
        data : []
    })
}




module.exports = {
    getallitems,
    getsingleitems,
    createitem,
    deleteitem,
}