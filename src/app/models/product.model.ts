export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    rating:number;
    delivery_days:number;
    reviews:string[];
    seller:string;

    constructor(id:number,
        name:string,
        description:string,
        price:number,
        rating:number,
        delivery_days:number,
        reviews:string[],
        seller:string){
            this.id=id;
            this.name=name;
            this.description=description;
            this.price=price;
            this.rating=rating;
            this.delivery_days=delivery_days;
            this.reviews=reviews;
            this.seller=seller;
        }
}
