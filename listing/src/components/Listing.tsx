import React from 'react'
import { IItem } from '../models/IItem'
import { Item } from './Item'

interface IListingProps {
    items: IItem[]
}
export const Listing = ({ items }: IListingProps) => {
    return (
        <div className="item-list">
            {items.map(e => {
                return <Item key={e.listing_id} item={e} />
            })}
        </div>
    )
}
