import React from 'react'
import { IItem } from '../models/IItem'
import { Price } from './Price'
import { Quantity } from './Quantity'

interface IItemProps {
    item: IItem
}

export const Item = ({ item }: IItemProps) => {
    console.log(item)
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage["url_570xN"]} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
                <Price code={item.currency_code} count={item.price} />
                <Quantity quantity={item.quantity} />
            </div>
        </div>
    )
}
