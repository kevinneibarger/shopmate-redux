import { ProductCard } from "../components";
import {useTitle} from "../hooks/useTitle";

export const ShopmateHome = () => {
    useTitle("Home");

    const products = [
        {"id" : 1, "name": "Sony wh-Ch510 Bluetooth Wireless", "price": 149.00, "image": "/assets/images/1001.png"},
        {"id" : 2, "name": "Boat Rockerz 450", "price": 169.00, "image": "/assets/images/1002.png"},
        {"id" : 3, "name": "Super Awesome Headphones", "price": 49.00, "image": "/assets/images/1003.png"},
        {"id" : 4, "name": "JBL Tune", "price": 249.00, "image": "/assets/images/1004.png"},
        {"id" : 5, "name": "Logitech 2000", "price": 29.99, "image": "/assets/images/1005.png"},
        {"id" : 6, "name": "Bose 360 Bluetooth Gold Plated", "price": 449.95, "image": "/assets/images/1006.png"},
    ];

    return (
        <main>
            <section className="products">
                { products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </section>
        </main>
    )
}