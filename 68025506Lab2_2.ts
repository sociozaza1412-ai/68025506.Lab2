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


const p4 = new Product("Laptop", 25000, 5);

p4.showInfo();
p4.setPrice(-500);
p4.setPrice(30000);
console.log(`ราคาปัจจุบัน: ${p4.getPrice()}`);
p4.setQuantity(-3);
p4.setQuantity(8);
console.log(`มูลค่ารวม: ${p4.calcTotal()}`);

console.log("--------------------");


class BankAccount {
  private accountNo: string;
  private owner: string;
  private balance: number;

  constructor(accountNo: string, owner: string, balance: number) {
    this.accountNo = accountNo;
    this.owner = owner;

    if (balance >= 0) {
      this.balance = balance;
    } else {
      this.balance = 0;
    }
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`ฝากเงิน ${amount} บาท | ยอดคงเหลือ: ${this.balance} บาท`);
    } else {
      console.log("จำนวนเงินฝากต้องมากกว่า 0");
    }
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("จำนวนเงินถอนต้องมากกว่า 0");
    } else if (amount > this.balance) {
      console.log("ยอดเงินไม่เพียงพอ");
    } else {
      this.balance -= amount;
      console.log(`ถอนเงิน ${amount} บาท | ยอดคงเหลือ: ${this.balance} บาท`);
    }
  }

  public getBalance(): number {
    return this.balance;
  }

  public getOwner(): string {
    return this.owner;
  }

  public showInfo(): void {
    console.log(`บัญชี: ${this.accountNo} | เจ้าของ: ${this.owner} | ยอด: ${this.balance} บาท`);
  }
}

const acc1 = new BankAccount("001-100-200", "สมชาย", 5000);
const acc2 = new BankAccount("002-200-300", "สมหญิง", 10000);

acc1.showInfo();
acc2.showInfo();

acc1.deposit(2000);
acc1.withdraw(1000);
acc2.withdraw(15000);
acc1.deposit(-500);

console.log(`ยอดคงเหลือ acc1: ${acc1.getBalance()} บาท`);