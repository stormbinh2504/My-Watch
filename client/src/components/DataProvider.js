import React,{createContext, useState, useEffect} from 'react';
import axios from "axios"
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products,setProducts] = useState([
        // {
        //     "_id": "1",
        //     "title": "Wacth Product 01",
        //     "images": [
        //         "https://www.dangquangwatch.vn/upload/product/712042116_donghonhapkhau105.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/784845121_donghothuysy13.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/37569875_donghonhapkhau126.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/72429618_1034985426_donghokimnguu2.jpg"
        //         ],
        //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        //     "colors": ["red", "black", "teal"],
        //     "sizes": ["XL", "L", "M", "XM", "LX"],
        //     "price": 101
        // },
        // {
        //     "_id": "2",
        //     "title": "Wacth Product 02",
        //     "images": [
        //         "https://www.dangquangwatch.vn/upload/product/784845121_donghothuysy13.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/712042116_donghonhapkhau105.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/1359612914_donghokimnguu.jpg",
        //         "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
        //         ],
        //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        //     "colors": ["red", "black", "teal"],
        //     "sizes": ["XL", "L", "M", "XM", "LX"],
        //     "price": 102
        // },
        // {
        //     "_id": "3",
        //     "title": "Wacth Product 03",
        //     "images": [
        //         "https://www.dangquangwatch.vn/upload/product/1575675690_895214937_donghonhapkhau41.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/1359612914_donghokimnguu.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/712042116_donghonhapkhau105.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/784845121_donghothuysy13.jpg"
        //         ],
        //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        //     "colors": ["red", "black", "teal"],
        //     "sizes": ["XL", "L", "M", "XM", "LX"],
        //     "price": 103
        // },
        // {
        //     "_id": "4",
        //     "title": "Wacth Product 04",
        //     "images": [
        //         "https://www.dangquangwatch.vn/upload/product/1575675690_895214937_donghonhapkhau41.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/784845121_donghothuysy13.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/618042058_donghonhapkhau101.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/712042116_donghonhapkhau105.jpg"
        //         ],
        //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        //     "colors": ["red", "black", "teal"],
        //     "sizes": ["XL", "L", "M", "XM", "LX"],
        //     "price": 104
        // },
        // {
        //     "_id": "5",
        //     "title": "Wacth Product 05",
        //     "images": [
        //         "https://www.dangquangwatch.vn/upload/product/1575675690_895214937_donghonhapkhau41.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/1637158092_241571475_1083070878_donghocochinhang65.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/618042058_donghonhapkhau101.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/784845121_donghothuysy13.jpg"
        //         ],
        //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        //     "colors": ["red", "black", "teal"],
        //     "sizes": ["XL", "L", "M", "XM", "LX"],
        //     "price": 105
        // },
        // {
        //     "_id": "6",
        //     "title": "Wacth Product 06",
        //     "images": [
        //         "https://www.dangquangwatch.vn/upload/product/618042058_donghonhapkhau101.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/1637158092_241571475_1083070878_donghocochinhang65.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/1575675690_895214937_donghonhapkhau41.jpg",
        //         "https://www.dangquangwatch.vn/upload/product/1359612914_donghokimnguu.jpg"
        //         ],
        //     "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
        //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        //     "colors": ["red", "black", "teal"],
        //     "sizes": ["XL", "L", "M", "XM", "LX"],
        //     "price": 106
        // }
    ])

    useEffect(() => {
        const fetchData = async () =>{
            const res = await axios.get('http://localhost:5000/api/products')
            console.log(res);
            setProducts(res.data);
        }
        fetchData()
    },[])

        const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
