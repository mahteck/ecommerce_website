export interface CartItem {
    name: string;
    price: number;
    quantity: number;
    weight?: number; // Add weight if it's part of your cart
}

export interface CartContextType {
    cart: CartItem[];
    removeFromCart: (name: string) => void;
    addToCart: (item: CartItem) => void;
}