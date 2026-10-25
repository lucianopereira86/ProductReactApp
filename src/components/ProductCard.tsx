import { useState } from 'react';
import type { Product } from '../models/Product';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [quantity, setQuantity] = useState(1);

    const effectiveQuantity = product.stock === 0
        ? 0
        : Math.min(Math.max(quantity, 1), product.stock);
    
    return (
        <article>
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price}</p>
            <p>Estoque: {product.stock}</p>

            <div>
                <button disabled={effectiveQuantity <= 1} onClick={() => setQuantity(Math.max(1, effectiveQuantity - 1))}>-</button>
                <span>{effectiveQuantity}</span>
                <button disabled={effectiveQuantity >= product.stock} onClick={() => setQuantity(Math.min(product.stock, effectiveQuantity + 1))}>+</button>
            </div>

            <p>R$ {effectiveQuantity * product.price}</p>
        </article>
    );
}