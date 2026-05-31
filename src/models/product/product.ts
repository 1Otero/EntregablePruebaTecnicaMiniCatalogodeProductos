import { Rating } from "../rating/rating";

export interface Product {
    id: Number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}
