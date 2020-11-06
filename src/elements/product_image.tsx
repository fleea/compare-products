import React, { useState } from 'react';

export interface ProductImageComponentProps {
    src: string;
}

export const ProductImageComponent = ({ src }: ProductImageComponentProps) => {
    const [imageSrc, setImageSrc] = useState<string>(src);
    // Sometimes image is not loaded, load defaul image here
    const handleImageError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        setImageSrc('https://via.placeholder.com/100');
    };
    return (
        <img
            onError={handleImageError}
            className="product__image"
            src={imageSrc}
        />
    );
};
