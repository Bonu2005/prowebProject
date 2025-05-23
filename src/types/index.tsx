export type Product = {
  id: number;
  title: string
  price: number
  description:string
  thumbnail:string
};

export type Props = {
  item: Product;

};


export type ProductResponce = {
    products:Product[]
}

export type SkeletonProps = {
  count: number;
};
