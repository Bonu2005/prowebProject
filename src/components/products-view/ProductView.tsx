import React, { useState } from 'react'
import Card from './Card'
import { ProductResponce } from '../../types'
const ProductView = ({ data }: { data: ProductResponce }) => {
    const [basket, setBasket] = useState<string[]>([]);

    return (
        
        <div className='relative'>
            <div className='absolute top-0 -right-75 border bg-white text-black shadow-lg rounded-lg p-4 min-w-[250px] min-h-[200px]'>
                <div className='w-[250px] text-center'>
                    <h2 className='text-lg font-semibold mb-2'>Заказы</h2>
                    {basket.map((item, index) => (
                        <div key={index} className='border-b py-1'>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container mx-auto grid lg:grid-cols-3 gap-5 md:grid-cols-3 grid-cols-2 mb-[118px] mt-[20px] '>
                {data?.products?.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        basket={basket}
                        setBasket={setBasket}
                    />

                ))}
            </div>
        </div>
    )
}

export default React.memo(ProductView)
