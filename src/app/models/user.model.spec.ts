import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    const user = new User('XYZ','123456789','XYZ@samp.com','pass1');
    expect(user).toBeTruthy();
  });
  it('should have correct credentials',()=>{
    const user=new User('ABC','987654321','abc@samp.com','pass2');

    expect(user.name).toBe('ABC');
    expect(user.mob).toBe('987654321');
    expect(user.email).toBe('abc@samp.com');
    expect(user.password).toBe('pass2');

  });
});
