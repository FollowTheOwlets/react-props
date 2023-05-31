import React from 'react'

interface IPriceProps {
    code: string,
    count: string
}
export const Price = ({ code, count }: IPriceProps) => {
    return (
        <p className="item-price">
            {code === "USD" ? `$${count}` : code === "EUR" ? `€${count}` : `${code} ${count}`}
        </p>
    )
}
