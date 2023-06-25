import Card from './card';

export const product = [
    {
        id: 1,
        title: "ASUS ROG STRIX RTX 4090 OC 24GB GDDR6X",
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/12/035c6f02-f027-4005-93a6-e1ca0de652d5.png",
        price: "Rp36.249.000"
    },
    {
        id: 2,
        title: "GIGABYTE GeForce RTX 4070 AERO OC 12GB GDDR6X",
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/13/d1cf3660-f7f3-4c95-a11a-38af42effe02.jpg",
        price: "Rp11.840.000"
    },
    {
        id: 3,
        title: "GIGABYTE GeForce RTX 4070 WINDFORCE OC 12GB GDDR6X",
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/13/c604b9b7-8d5c-4df3-8047-934430a691c4.jpg",
        price: "Rp10.850.000"
    },
    {
        id: 4,
        title: "GIGABYTE GeForce RTX 3050 EAGLE 8GB GDDR6",
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/10/4486bb43-52d1-481a-acf8-27339aa2c6a6.jpg",
        price: "Rp4.370.000"
    },
    {
        id: 5,
        title: "ASUS RTX 2060 DUAL EVO OC 6GB GDDR6",
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/6/4/f7761de0-130f-43ad-b33b-882b18ec7a93.png",
        price: "Rp3.880.000"
    }
]

const ListProduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
            {product.map((index) => (
               <Card key={index.id} product={index}/>
            ))}
            
        </div>
    )
}

export default ListProduct