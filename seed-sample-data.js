// Script untuk membuat data penjualan dan pembelian contoh
const sampleSales = [
  {
    customerId: "customer-1",
    userId: "1",
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
    paymentStatus: "PAID",
    notes: "Penjualan laptop untuk kantor"
  },
  {
    customerId: "customer-2",
    userId: "1",
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
    paymentStatus: "PAID",
    notes: "Pembelian aksesoris komputer"
  },
  {
    customerId: "customer-4",
    userId: "1",
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
    paymentStatus: "PARTIAL",
    notes: "Pembelian monitor dengan cicilan"
  }
];

const samplePurchases = [
  {
    supplierId: "supplier-1",
    userId: "1",
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
    supplierId: "supplier-2",
    userId: "1",
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
    supplierId: "supplier-4",
    userId: "1",
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

console.log("Sample Sales Data:");
console.log(JSON.stringify(sampleSales, null, 2));

console.log("\nSample Purchases Data:");
console.log(JSON.stringify(samplePurchases, null, 2));