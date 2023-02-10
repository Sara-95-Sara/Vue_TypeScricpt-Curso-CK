import { Product } from "@/models/product";

export interface IProductsState {
    products: Product[];
    isLoading: boolean;
}

function state(): IProductsState {
    return {
        products: [],
        isLoading: false,
    }
}

export default state;