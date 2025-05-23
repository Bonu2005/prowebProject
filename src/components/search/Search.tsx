import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ProductResponce } from '../../types'
import ProductView from '../products-view/ProductView'
import Skeleton from '../skeleton/Skeleton'
import NotFoundInfo from '../notFoundInfo/NotFoundInfo'

const Search = () => {
    const [value, setValue] = useState("")
    const { data, loading } = useFetch<ProductResponce>(`/products/search?q=${value}`)

    return (
        <div className='container'>
            <input
             autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Поиск товаров..."
                className="w-full  mb-6 px-4 py-2 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mt-[120px]"
            />

            {loading ? (
                <Skeleton count={6} />
            ) : data?.products && data.products.length > 0 ? (
                <ProductView data={{ products: data.products }} />
            ) : (
                <NotFoundInfo />
            )}
        </div>
    )
}

export default React.memo(Search)
