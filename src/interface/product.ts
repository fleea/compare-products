export interface Product {
    Artikelnummer: string;
    atp: any;
    BUP_Conversion: string;
    BUP_UOM: string;
    BUP_Value: string;
    badges: string;
    channel: string;
    display: boolean;
    grossPrice: number;
    Hardheid: number;
    'Inwendige Diameter': number;
    Kleur: string;
    listPrice: number;
    'Maat Volgens AS568': number;
    manufacturerImage: string;
    manufacturerName: string;
    Materiaal: string;
    minQuantity: number;
    name: string;
    productImage: string;
    salePrice: number;
    sku: number;
    Snoerdikte: number;
    Temperatuurgebied: string;
    Toepassing: string;
    stepQuantity: number;
    uom: string;
}

export interface ProductFilter {
    Artikelnummer: string;
    name: string;
}
