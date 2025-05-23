import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import AddToCartButton from '../basket/Basket';
type Props = {
  item: any;
  basket: any,
  setBasket:any

};

const Card: React.FC<Props> = ({ item, basket, setBasket }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="bg-gray-900 dark:bg-[#121212] text-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="relative h-[260px] w-full">
                <img
                    className="w-full h-full object-cover"
                    loading="lazy"
                    src={item.thumbnail}
                    alt={item.title}
                />
                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-3 right-3 z-10 p-2 text-xl text-red-500 bg-white/10 hover:bg-white/20 rounded-full transition"
                >
                    {liked ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>

            <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-amber-400 truncate">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-1" title={item.description}>{item.description}</p>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-base font-bold text-emerald-500">${item.price}</span>
                    <AddToCartButton
                        productName={item.title}
                        basket={basket}
                        setBasket={setBasket}
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(Card);
