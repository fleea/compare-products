import { RowAttribute } from './general';

export interface SelectionProps<T> {
    value: T;
    isSelected: boolean;
    onChange: (isSelected: boolean) => void;
}

export interface SelectionArrayProps<T> {
    full: T[];
    selected: string[];
    onChange: (t: string[]) => void;
}

export interface WithAttributes {
    attributes: RowAttribute[];
}
