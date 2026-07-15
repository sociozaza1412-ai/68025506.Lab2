"use strict";
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    showInfo() {
        console.log(`สินค้า: ${this.name} | ราคา: ${this.price} | จำนวน: ${this.quantity}`);
    }
    calcTotal() {
        return this.price * this.quantity;
    }
    getPrice() {
        return this.price;
    }
    getQuantity() {
        return this.quantity;
    }
    setPrice(p) {
        if (p > 0) {
            this.price = p;
        }
        else {
            console.log("ราคาต้องมากกว่า 0");
        }
    }
    setQuantity(q) {
        if (q >= 0) {
            this.quantity = q;
        }
        else {
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
const p4 = new Product("Laptop", 25000, 5);
p4.showInfo();
p4.setPrice(-500);
p4.setPrice(30000);
console.log(`ราคาปัจจุบัน: ${p4.getPrice()}`);
p4.setQuantity(-3);
p4.setQuantity(8);
console.log(`มูลค่ารวม: ${p4.calcTotal()}`);
console.log("--------------------");
