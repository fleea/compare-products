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
        <label htmlFor={`selection-${Artikelnummer}`}>
            <input
                name="isGoing"
                id={`selection-${Artikelnummer}`}
                type="checkbox"
                checked={isSelected}
                onChange={handleChange}
            />
            {name}
        </label>
    );
};

export const ProductsFilterComponent = ({
    full,
    selected,
    onChange,
}: SelectionArrayProps<ProductFilter>) => {
    const isProductSelected = (Articlenumber: string) =>
        selected.includes(Articlenumber);
    const handleSelectedChange = (Articlenumber: string) => (isSelected: boolean) => {
        if(!!isSelected && !isProductSelected(Articlenumber)) onChange([...selected, Articlenumber])
        if(!isSelected && !!isProductSelected(Articlenumber)) onChange(selected.filter(a => a !== Articlenumber))
    }
    return (
        <>
            {(full || []).map((p: ProductFilter) => (
                <ProductFilterComponent
                    value={p}
                    isSelected={isProductSelected(p.Artikelnummer)}
                    onChange={handleSelectedChange(p.Artikelnummer)}
                />
            ))}
        </>
    );
};
