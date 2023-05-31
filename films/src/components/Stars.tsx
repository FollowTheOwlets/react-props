import React from 'react'
import { Star } from './Star';

interface IStarsProps {
    count: 1 | 2 | 3 | 4 | 5;
}

export const Stars = ({ count }: IStarsProps) => {
    return (
        <ul className="card-body-stars u-clearfix">
            {[...Array(count)].map((item, index) => <Star key={index} />)}
        </ul>
    )
}
