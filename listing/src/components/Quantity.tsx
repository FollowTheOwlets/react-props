import React from 'react'

interface IQuantityProps {
    quantity: number
}

export const Quantity = ({ quantity }: IQuantityProps) => {
    return (
        <p
            className={`item-quantity level-${quantity < 10 ? "low" : quantity < 20 ? "medium" : "high"}`}>
            {quantity} left
        </p>
    )
}
