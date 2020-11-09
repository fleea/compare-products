export interface General {
    [key: string]: string | number;
}

export interface RowAttribute {
    name: string;
    key: string; // Key of JSON Attributes
    toBeCompared: boolean;
}
