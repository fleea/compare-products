import React from 'react';
import { Product } from '../interface/product';
import { Image } from './image';
import { ProductsAttributesComponent } from './product_attributes';

export interface ProductComponentProps {
    product: Product;
}

export const ProductComponent = ({ product }: ProductComponentProps) => {
    const {
        Artikelnummer,
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
        <div className="product" role="listitem">
            <div className="product__header">
                {!!productImage && (
                    <Image
                        src={productImage}
                        key={productImage}
                        defaultSize={100}
                    />
                )}
                <h2 className="title" role="columnheader">
                    {name}
                </h2>
                <div className="product__price">
                    <h3>{listPrice}</h3>
                    <span className="product_uom">
                        {!!uom && `per ${uom} / excl. btw`}
                    </span>
                </div>
            </div>
            <div className="product__attributes-container">
                <ProductsAttributesComponent />
                <div className="product__attributes">
                    <div className="product__badges">
                        {(badges.split('|') || []).map(
                            (src: string, index: number) => (
                                <Image
                                    key={`${index}-${src}`}
                                    src={src}
                                    defaultSize={40}
                                />
                            )
                        )}
                    </div>
                    <div>{Artikelnummer || '-'}</div>
                    <div>{BUP_Conversion || '-'}</div>
                    <div>{BUP_UOM || '-'}</div>
                    <div>{BUP_Value || '-'}</div>
                    <div>{channel || '-'}</div>
                    <div>{display || '-'}</div>
                    <div>{grossPrice || '-'}</div>
                    <div>{Hardheid || '-'}</div>
                    <div>{product['Inwendige Diameter'] || '-'}</div>
                    <div>{Kleur || '-'}</div>
                    <div>{listPrice || '-'}</div>
                    <div>{product['Maat Volgens AS568'] || '-'}</div>
                    <div>{manufacturerName || '-'}</div>
                    <div>{Materiaal || '-'}</div>
                    <div>{minQuantity || '-'}</div>
                    <div>{salePrice || '-'}</div>
                    <div>{sku || '-'}</div>
                    <div>{Snoerdikte || '-'}</div>
                    <div>{Temperatuurgebied || '-'}</div>
                    <div>{Toepassing || '-'}</div>
                    <div>{stepQuantity || '-'}</div>
                    <div>{uom || '-'}</div>
                </div>
            </div>
        </div>
    );
};
