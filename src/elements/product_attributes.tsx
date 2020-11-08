import React from 'react';
import { WithAttributes } from '../interface/value';

export const ProductsAttributesComponent = ({
    attributes = [],
}: WithAttributes) => {
    return (
        <div className="product__attributes product__attributes-key">
            <div>Keurmerk</div>
            {attributes.map(({ key, name, toBeCompared }) => (
                <div
                    key={key}
                    className={`attr-name${toBeCompared ? ' compare' : ''}`}
                >
                    {name}
                </div>
            ))}
        </div>
    );
};
