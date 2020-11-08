import { General } from './general';

/**
 * There are quite some ways to annoy a front-end developer
 * Inconsistent attributes naming and spaces in JSON key are two of them :P
 */
export interface Product extends General {
    Artikelnummer: string;
    // atp: any;
    BUP_Conversion: string;
    BUP_UOM: string;
    BUP_Value: string;
    badges: string;
    channel: string;
    // display: boolean; What is this attribute about? Should I take it as default display filter?
    grossPrice: number;
    Hardheid: number;
    // 'Inwendige Diameter'?: number;
    Kleur: string;
    listPrice: number;
    // 'Maat Volgens AS568'?: number;
    manufacturerImage: string;
    manufacturerName: string;
    Materiaal: string;
    minQuantity: number;
    name: string;
    productImage: string;
    salePrice: number;
    sku: string;
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
