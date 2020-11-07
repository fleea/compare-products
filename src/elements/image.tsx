import React, { useState } from 'react';

export interface ImageProps {
    src: string;
    defaultSize?: number;
}

export const Image = ({ src, defaultSize = 100 }: ImageProps) => {
    const [isError, setIsError] = useState<boolean>(false);
    // Sometimes image is not loaded, load defaul image here
    const handleImageError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        setIsError(true);
    };
    return (
        <div
            className={`placeholder${!!isError ? ' error' : ''}`}
            style={{
                minWidth: `${defaultSize}px`,
                minHeight: `${defaultSize}px`,
            }}
        >
            {!isError && (
                <img
                    onError={handleImageError}
                    className="product__image"
                    src={src}
                    key={src}
                    alt={src}
                />
            )}
        </div>
    );
};
