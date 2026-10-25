import type { Product } from "../models/Product"
import { ProductCard } from "./ProductCard"

export interface ProductListProps {
    products: Product[]
}
export function ProductList({ products }: ProductListProps) {
    return (
        <section>
            {products.length === 0 ?
                <span>Nenhum produto encontrado.</span>
                :
                products.map((product) =>
                    <ProductCard key={product.id} product={product} />
                )}
        </section>
    );
}