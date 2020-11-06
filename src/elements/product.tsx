import React from 'react';
import { Product } from '../interface/product';
import { ProductImageComponent } from './product_image';

export interface ProductComponentProps {
    product: Product;
}

export const ProductComponent = ({ product }: ProductComponentProps) => {
    const {
        Artikelnummer,
        atp,
        BUP_Conversion,
        BUP_UOM,
        BUP_Value,
        badges,
        channel,
        display,
        grossPrice,
        Hardheid,
        Kleur,
        listPrice,
        manufacturerImage,
        manufacturerName,
        Materiaal,
        minQuantity,
        name,
        productImage,
        salePrice,
        sku,
        Snoerdikte,
        Temperatuurgebied,
        Toepassing,
        stepQuantity,
        uom,
    } = product;
    return (
        <div className="product">
            <div className="product__header">
                {!!productImage && <ProductImageComponent src={productImage} />}
                <h2>{name}</h2>
            </div>
            <div>{Artikelnummer}</div>
            <div>{JSON.stringify(atp)}</div>
            <div>{BUP_Conversion}</div>
            <div>{BUP_UOM}</div>
            <div>{BUP_Value}</div>
            <div>{badges}</div>
            <div>{channel}</div>
            <div>{display}</div>
            <div>{grossPrice}</div>
            <div>{Hardheid}</div>
            <div>{product['Inwendige Diameter']}</div>
            <div>{Kleur}</div>
            <div>{listPrice}</div>
            <div>{product['Maat Volgens AS568']}</div>
            <div>{manufacturerImage}</div>
            <div>{manufacturerName}</div>
            <div>{Materiaal}</div>
            <div>{minQuantity}</div>
            <div>{name}</div>
            <div>{productImage}</div>
            <div>{salePrice}</div>
            <div>{sku}</div>
            <div>{Snoerdikte}</div>
            <div>{Temperatuurgebied}</div>
            <div>{Toepassing}</div>
            <div>{stepQuantity}</div>
            <div>{uom}</div>
        </div>
    );
};
