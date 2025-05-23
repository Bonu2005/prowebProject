import React, { useState } from 'react';
import { Modal, message } from 'antd';
import { SlBasket } from 'react-icons/sl';

export interface Props {
  // item: Product;
  basket: string[];
  productName:any
  setBasket: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddToCartButton: React.FC<Props> = ({ productName, basket, setBasket }) => {
  const [open, setOpen] = useState(false);

  const showConfirmModal = () => setOpen(true);

  const handleOk = () => {
    if (!basket.includes(productName)) {
      setBasket([...basket, productName]);
      message.success(`Товар "${productName}" добавлен в корзину!`);
    } else {
      message.info(`Товар "${productName}" уже в корзине.`);
    }
    setOpen(false);
  };

  const handleCancel = () => setOpen(false);

  return (
    <>
      <button
        className="px-4 py-1 bg-amber-500 hover:bg-amber-600 text-sm rounded-full text-white transition"
        onClick={showConfirmModal}
      >
        <SlBasket />
      </button>

      <Modal
        title="Добавить в корзину"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Да, добавить"
        cancelText="Нет, отмена"
      >
        <p>
          Вы уверены, что хотите добавить товар "<strong>{productName}</strong>" в корзину?
        </p>
      </Modal>
    </>
  );
};

export default AddToCartButton;
