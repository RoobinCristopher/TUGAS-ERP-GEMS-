// Script untuk generate data demo penjualan dan pembelian

const demoSales = [
  {
    customerId: "customer-1", // Ahmad Wijaya
    userId: "cmh1oo3ld0000pakxl4etwf3t",
    items: [
      {
        productId: "cmh1nc9tw000gpaaeh08dh4no", // Laptop ASUS VivoBook 15
        quantity: 1,
        price: 8500000
      }
    ],
    discount: 0,
    tax: 0,
    paymentMethod: "Transfer Bank",
    notes: "Penjualan laptop untuk kantor"
  },
  {
    customerId: "customer-2", // Siti Nurhaliza
    userId: "cmh1oo3ld0000pakxl4etwf3t",
    items: [
      {
        productId: "cmh1nc9tz000qpaaeztwyybk9", // Mouse Wireless Logitech M185
        quantity: 2,
        price: 200000
      },
      {
        productId: "cmh1nc9u1000spaae80kp0588", // Keyboard Mechanical RGB
        quantity: 1,
        price: 650000
      }
    ],
    discount: 50000,
    tax: 0,
    paymentMethod: "Tunai",
    notes: "Pembelian aksesoris komputer"
  },
  {
    customerId: "customer-4", // Dewi Lestari
    userId: "cmh1oo3ld0000pakxl4etwf3t",
    items: [
      {
        productId: "cmh1nc9ua001epaaepvpfvxdj", // Monitor LG 24 inch IPS
        quantity: 1,
        price: 2200000
      }
    ],
    discount: 0,
    tax: 220000,
    paymentMethod: "Kredit",
    notes: "Pembelian monitor dengan cicilan"
  }
];

const demoPurchases = [
  {
    supplierId: "supplier-1", // ASUS Indonesia
    userId: "cmh1oo3ld0000pakxl4etwf3t",
    items: [
      {
        productId: "cmh1nc9tw000gpaaeh08dh4no", // Laptop ASUS VivoBook 15
        quantity: 5,
        price: 7500000
      }
    ],
    discount: 0,
    tax: 0,
    notes: "Pembelian stok laptop ASUS"
  },
  {
    supplierId: "supplier-2", // Logitech Indonesia
    userId: "cmh1oo3ld0000pakxl4etwf3t",
    items: [
      {
        productId: "cmh1nc9tz000qpaaeztwyybk9", // Mouse Wireless Logitech M185
        quantity: 50,
        price: 150000
      },
      {
        productId: "cmh1nc9u1000spaae80kp0588", // Keyboard Mechanical RGB
        quantity: 20,
        price: 500000
      }
    ],
    discount: 1000000,
    tax: 0,
    notes: "Pembelian aksesoris dari Logitech"
  },
  {
    supplierId: "supplier-4", // LG Electronics
    userId: "cmh1oo3ld0000pakxl4etwf3t",
    items: [
      {
        productId: "cmh1nc9ua001epaaepvpfvxdj", // Monitor LG 24 inch IPS
        quantity: 10,
        price: 1800000
      }
    ],
    discount: 0,
    tax: 1800000,
    notes: "Pembelian monitor LG"
  }
];

console.log("Demo Sales Data:");
demoSales.forEach((sale, index) => {
  console.log(`\nSale ${index + 1}:`);
  console.log(`Customer ID: ${sale.customerId}`);
  console.log(`Items: ${sale.items.length}`);
  console.log(`Payment Method: ${sale.paymentMethod}`);
  console.log(`Notes: ${sale.notes}`);
});

console.log("\nDemo Purchases Data:");
demoPurchases.forEach((purchase, index) => {
  console.log(`\nPurchase ${index + 1}:`);
  console.log(`Supplier ID: ${purchase.supplierId}`);
  console.log(`Items: ${purchase.items.length}`);
  console.log(`Notes: ${purchase.notes}`);
});

console.log("\nTo create this data, run the following curl commands:");

demoSales.forEach((sale, index) => {
  console.log(`\n# Create Sale ${index + 1}`);
  console.log(`curl -X POST http://localhost:3000/api/sales \\`);
  console.log(`  -H "Content-Type: application/json" \\`);
  console.log(`  -d '${JSON.stringify(sale)}'`);
});

demoPurchases.forEach((purchase, index) => {
  console.log(`\n# Create Purchase ${index + 1}`);
  console.log(`curl -X POST http://localhost:3000/api/purchases \\`);
  console.log(`  -H "Content-Type: application/json" \\`);
  console.log(`  -d '${JSON.stringify(purchase)}'`);
});