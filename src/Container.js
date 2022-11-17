class Container{

    constructor(){
        this.products = []
    }


getAll(){
    return this.products
}

getById(id){
    const obj = this.products.find((products)=>products.id === id)
    if (obj) {
        return obj
    } else {
        return Error
    }
}

create(obj){
    const arrayOfIds = this.products.map((products)=> products.id)
    const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds)
    const id = maxId +1
    const newObj = {id,...obj}
    this.products.push(newObj) 
    }

    updateById(id,obj){
        const foundObj = this.products.find((product)=>product.id === id)
        if (foundObj) {
            const filteredProducts = this.products.filter(
                (product) => product.id !== id
                );
            const newObj = {id, ...obj}
            this.products=[...filteredProducts, newObj]
            return newObj
        } else {
            return error
        }
    }


}

module.exports=Container