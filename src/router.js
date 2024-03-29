const express = require("express")
const Container= require("./Container")

const router = express.Router()
const container = new Container();

router.get("/",(req,res)=>{
    const products = container.getAll()
    res.send(products)
})

router.get("/:id",(req,res)=>{
    const id =req.params.id;
    const products= container.getById(parseInt(id));
    res.send(products)
})

router.post("/",(req,res)=>{
    const obj = req.body;
    const newObj = container.create(obj)
    res.send(newObj)
})

router.put("/:id",(req,res)=>{
    const id =req.params.id;
    const obj =req.body
    const updatedProduct= container.updateById(parseInt(id),obj);
    res.send(updatedProduct)
})

router.delete("/:id",(req,res)=>{
    res.send("delete ID")
})


module.exports =router