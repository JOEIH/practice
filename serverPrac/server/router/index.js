const express = require("express");
const router = express.Router();


//아이템 삭제하려면 const가 아닌 let이어야
//TypeError: Assignment to constant variable. const로 두고 삭제하려고 하면 이런 오류 발생
let products = [
    {id: 1, text: "사과", store: false},
    {id: 2, text: "귤", store: true},
    {id: 3, text: "배", store: false},
]

// router.get("/", (req, res) => {
//     res.send("Hello")
// })

router.get("/api/products", (req, res) => {
    console.log(products);
    res.json(products);
})

//데이터 추가
router.post("/api/products", (req, res) => {
    const newItem = {
        id: products.length + 1,
        text: req.body.text,
        store: false
    }

    products.push(newItem);

    res.send(newItem);
})

//체크박스 변경 가능하도록 업데이트
router.put("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id, 10) //id를 10진수로
    const {store} = req.body

    const productIndex = products.findIndex((item) => item.id === id);

    if(productIndex === -1) {
        return res.status(404).json({message: "Product not found"});
    }

    products[productIndex].store = store;
    res.send(products[productIndex]);
})

//아이템 삭제
router.delete("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    //아이템 존재하는지 확인
    const productIndex = products.findIndex((item) => item.id === id);

    //아이템이 없으면 404
    if(productIndex === -1) {
        return res.status(404).json({message: "Product not found"})
    }

    //아이템 삭제
    products = products.filter((item) => item.id !== id);

    res.status(200).json({message: "Product deleted successfully"})
})

module.exports = router;
