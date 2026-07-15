class Product {
  public name: string;
  private price: number;
  private quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  public showInfo(): void {
    console.log(`สินค้า: ${this.name} | ราคา: ${this.price} | จำนวน: ${this.quantity}`);
  }

  public calcTotal(): number {
    return this.price * this.quantity;
  }

  public getPrice(): number {
    return this.price;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setPrice(p: number): void {
    if (p > 0) {
      this.price = p;
    } else {
      console.log("ราคาต้องมากกว่า 0");
    }
  }

  public setQuantity(q: number): void {
    if (q >= 0) {
      this.quantity = q;
    } else {
      console.log("จำนวนต้องไม่ติดลบ");
    }
  }
}

// ทดสอบกิจกรรมที่ 1
const p1 = new Product("Laptop", 25000, 5);
const p2 = new Product("Phone", 8500, 10);
const p3 = new Product("Tablet", 12000, 3);

p1.showInfo();
console.log(`มูลค่ารวม: ${p1.calcTotal()}`);

p2.showInfo();
console.log(`มูลค่ารวม: ${p2.calcTotal()}`);

p3.showInfo();
console.log(`มูลค่ารวม: ${p3.calcTotal()}`);

console.log("--------------------");

export {};
