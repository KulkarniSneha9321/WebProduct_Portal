import { Product } from './product.model';

describe('Product', () => {
  it('should create an instance', () => {
    const product = new Product(1,'Airpods121v2','This Airpods is used by me',1200,5,1,['Amazing Product'],'Boat');
    expect(product).toBeTruthy();
  });
  it('should have correct Credentials',()=>{
    const product=new Product(2,'Rockers370','Good Headset',1000,4.8,2,['Good Product'],'Boat');
    expect(product.id).toBe(2);
    expect(product.name).toBe('Rockers370');
    expect(product.description).toBe('Good Headset');
    expect(product.price).toBe(1000);
    expect(product.rating).toBe(4.8);
    expect(product.reviews).toBe(['Good Headset']);
    expect(product.seller).toBe('Boat');

  });
});
