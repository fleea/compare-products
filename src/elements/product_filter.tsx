import React from 'react';
import { ProductFilter } from '../interface/product';
import { SelectionArrayProps, SelectionProps } from '../interface/value';

export const ProductFilterComponent = ({
    value,
    isSelected,
    onChange,
}: SelectionProps<ProductFilter>) => {
    const { name, Artikelnummer } = value || {};
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event.target.checked);
    };
    return (
        <div className="products__selection">
            <input
                name="isGoing"
                id={`selection-${Artikelnummer}`}
                type="checkbox"
                checked={isSelected}
                onChange={handleChange}
            />
            <label htmlFor={`selection-${Artikelnummer}`}>{name}</label>
        </div>
    );
};

export const ProductsFilterComponent = ({
    full,
    selected,
    onChange,
}: SelectionArrayProps<ProductFilter>) => {
    const isProductSelected = (Articlenumber: string) =>
        selected.includes(Articlenumber);
    const handleSelectedChange = (Articlenumber: string) => (
        isSelected: boolean
    ) => {
        if (!!isSelected && !isProductSelected(Articlenumber))
            onChange([...selected, Articlenumber]);
        if (!isSelected && !!isProductSelected(Articlenumber))
            onChange(selected.filter((a) => a !== Articlenumber));
    };
    return (
        <div className="products__filter">
            {(full || []).map((p: ProductFilter, index: number) => (
                <ProductFilterComponent
                    key={index}
                    value={p}
                    isSelected={isProductSelected(p.Artikelnummer)}
                    onChange={handleSelectedChange(p.Artikelnummer)}
                />
            ))}
        </div>
    );
};
