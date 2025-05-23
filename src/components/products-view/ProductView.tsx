import React, { useState } from 'react'
import Card from './Card'
import { ProductResponce } from '../../types'
const ProductView = ({ data }: { data: ProductResponce }) => {
    const [basket, setBasket] = useState<string[]>([]);
    const bas = JSON.parse(localStorage.getItem("basket") || "null") || [];
     console.log(bas);
     
    return (
        
        <div className='relative'>
            {bas.length===0?"":   <div className='absolute -top-50 -right-75 border bg-yellow-600 text-black shadow-lg rounded-lg p-4 min-w-[250px] min-h-[200px]'>
                <div className='w-[250px] text-center '>
                    <h2 className='text-lg font-semibold mb-2'>Заказы</h2>
                    {bas.map((item:string, index:number) => (
                        <div key={index} className='border-b py-1'>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>}
         

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
