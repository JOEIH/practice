import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import {PacmanLoader} from "react-spinners"
import axios from "axios"
// import { response } from 'express'; //이게 왜 추가됐지 -> 이거 있으니까 오류 발생
//Module not found: Error: Can't resolve 'zlib' in ...

const fetchProducts = async () => {
    return fetch("http://localhost:4000/api/products")
    .then((res) => res.json())
    // .then((data) => console.log(data)) //데이터 잘 불러와지는지 확인
}

//아이템 추가
const addItem = async (newItem) => {
    const response = await axios.post("http://localhost:4000/api/products", newItem)

    return response.data;
}

//체크박스 작동하도록
const updateProductStore = async (product) => {
    const response = await axios.put(`http://localhost:4000/api/products/${product.id}`, {store: !product.store})

    return response.data;
}

//아이템 삭제
const deleteProduct = async (itemId) => {
    const response = await axios.delete(`http://localhost:4000/api/products/${itemId}`)

    return response.data;
}

const ProductPage = () => {
    // fetchProducts(); //데이터 잘 불러와지는지 확인

    // 특정 쿼리 새로고침해 최신 데이터 서버에서 가져오기 위해 사용
    // 이거 작성하기 전에는 상품 추가 후 새로고침 해야 화면에 반영되었음
    const queryClient = useQueryClient();

    const {data, error, isLoading} = useQuery({
        queryKey: ["products"], //'products'로 캐시 관리
        queryFn: fetchProducts, // 데이터 가져오는 함수
    })

    //데이터 추가
    const addItemMutation = useMutation({
        mutationFn: addItem,

        onSuccess: (result) => {
            console.log("Products created successfully: ", result)
            //아이템 추가 후 데이터 바로 가져옴
            queryClient.invalidateQueries({queryKey: ["products"]})
        },
        onError: (error) => {
            console.error("Error creating todo: ", error)
        }

    })

    //아이템 업데이트 -> 체크박스 상태 반영
    const updateMutation = useMutation({
        mutationFn: updateProductStore,
        
        onSuccess: (result) => {
            console.log("Products updated successfully: ", result)
            queryClient.invalidateQueries({queryKey: ["products"]})
        },
        onError: (error) => {
            console.error("Error adding item: ", error);
            alert("Failed to adding item. Please try again");
        }
    })

    //아이템 삭제
    const deleteMutation = useMutation({
        mutationFn: deleteProduct,

        onSuccess: (result) => {
            console.log("Product deleted successfully", result);
            queryClient.invalidateQueries({queryKey: ["products"]});
        },
        onError: (error) => {
            console.error("Error deleting item: ", error);
            alert("Failed to deleting item. Try again.")
        }
    })

    //데이터 추가 함수
    const addNewItem = () => {
        const newProduct = prompt("상품을 입력하세요:)")

        // if (newProduct === '' || newProduct === null) {
        //     alert('상품을 한 개 입력해야 해요.')
        // } else {
        //     addItemMutation.mutate({text: newProduct})
        // }   

        //이렇게 쓰면 ''일 때, null일 때 둘 다 처리됨
        if(newProduct) {
            addItemMutation.mutate({text: newProduct})
        } else {
            alert('상품을 한 개 입력해야 해요.')
        }
    }

    const changeHandler = (product) => {
        updateMutation.mutate(product)
    }

    const deleteHandler = (itemId) => {
        deleteMutation.mutate(itemId)
    }

    if (isLoading) return <div><PacmanLoader color="lightblue" size={30} /></div>

    if (error) return <div>Error</div>
    
    return (
        <div>
            <h1>상품 목록</h1>
            {
                data.map((item) => (
                    <p key={item.id}>
                        <input type="checkbox" checked={item.store} onChange={() => changeHandler(item)} />
                        {item.text}
                        <button onClick={() => deleteHandler(item.id)}>Delete</button>
                    </p>
                ))
            }
            <button onClick={addNewItem}>Add Item</button>
        </div>
    );
};

export default ProductPage;