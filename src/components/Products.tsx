import { useEffect, useState } from "react"
import API from "../services/api"
// import { log } from "console";

function Products() {

    interface Product {
        id: number;
        title: string;
        description: string;
        price: number;
        category: string;
        images: string;
    }
    
    const [products, setProducts] = useState<Product[]>([])
    async function getProducts() {
        const { data } = await API.get('/products');
        setProducts(data.products)
    }
    useEffect(() => {
        getProducts()

    }, [])
    return (

        <section id="#products" className="mt-4  max-w-6xl mx-auto ">
            <div>
                <h1 className=" text-white text-5xl text-center ">ALL PRODUCTS</h1>
            </div>

            <div className="grid grid-cols-3 m-4 gap-2 ">
                {products.map((item, index) => (
                    <div key={index} className="px-3 py-3 text-white border-2 rounded-2xl">
                        <img src={item.images} alt="" />
                        <h1 className="text-white font-bold">{item.title}</h1>
                        <p className="text-sm  text-gray-500">{item.description}</p>
                        <p className="font-bold">{item.price}</p>
                        <p className="text-gray-400">{item.category}</p>
                        <button className="shadow-sm px-4 py-1 bg-blue-500 rounded-full">Add to cart</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
