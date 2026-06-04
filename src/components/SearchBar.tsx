import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import API from '../services/api.ts'




export default function SearchBar() {
  const [search, setSearch] = useState('')


  interface Products {
    id: number,
    title: string,
    category: string,
    price: number
    description:string
    images:string
  }
  const [products, setProducts] = useState<Products[]>([])
  async function getProducts() {
    const { data } = await API.get('/products')
    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  const searchedProducts = products.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))


  return (
    <section className="mt-26 max-w-5xl mx-auto">
      <div className="relative group">
        {/* Search Icon */}
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors"
        />

        {/* Input */}
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search products..."
          className="
          mt-10
            w-full
            pl-12
            pr-4
            py-4
            rounded-2xl
            bg-white/10
            backdrop-blur-md
            border-2
            border-black
            text-white
            placeholder:text-gray-400
            outline-none
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
            focus:shadow-lg
            focus:shadow-blue-500/20
          "
        />
        

        {/* Glow Effect */}
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            bg-linear-to-r
            from-blue-500/10
            via-purple-500/10
            to-pink-500/10
            opacity-0
            group-focus-within:opacity-100
            transition-opacity
            duration-300
            -z-10
            blur-xl
          "
        />
      </div>

      <div className="mt-10  grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4  lg:gap-4 ">
        {searchedProducts.map((item, index) => (
          <div key={index} className="px-3 py-3 text-white border-2 rounded-2xl">
            <img src={item.images} alt="" />
            <h1 className="text-white font-bold">{item.title}</h1>
            <p className="text-sm  text-gray-500">{item.description}</p>
            <p className="font-bold">{item.price}</p>
            <p className="text-gray-400">{item.category}</p>
            <p className="text-gray-400">{item.category}</p>
            <p className="text-gray-400">{item.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}