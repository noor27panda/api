const data = [
    {id: 1, name: "men clothes",content: 'avatar', deletedAt: null},
    {id: 2, name: "women clothes", content: 'avatar',deletedAt: null},
]
const getallcategories = (req, res) => {
    const allcategories = data.filter(category => category.deletedAt == null)
    
    return res.send({
        success: true,
        msg: "you get all categories",
        data: allcategories.map(category => {
            return {id: category.id, content: category.content, name: category.name}
        })
    })
}

const createcategory = (req, res) => {
    const {content} = req.body
    if(content?.length) {
        data.push({
            id: data.length + 1,
            content,
            deletedAt: null
        })
        return res.send({
            success: true,
            msg: "category is created !",
            data : data[data.length - 1]
        })
    }
    return res.send({
        success: false,
        msg: "content in null",
        data : []
    })
}
module.exports={
    getallcategories,
    createcategory,

}