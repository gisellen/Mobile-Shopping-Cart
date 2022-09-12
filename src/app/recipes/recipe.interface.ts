export interface Recipe{
    id: string;
    title: string;
    imageURL: string;
    ingredients: string[];
    amount: number;
}

export interface Cart{
    id: string;
    title: string;
    imageURL: string;
    quantity: number;
    amount: number;
}