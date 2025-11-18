# 🚀 Welcome to ERP System_Roobin

A modern, comprehensive Enterprise Resource Planning (ERP) system designed for business management with inventory, sales, purchases, and reporting capabilities.

## ✨ System Overview

ERP System_Roobin is a full-featured business management solution that helps streamline operations across various departments including:

- **📊 Dashboard** - Real-time business insights and analytics
- **📦 Product Management** - Complete inventory and catalog management
- **👥 Customer Management** - Customer relationship and data management
- **💰 Sales Management** - Invoice generation and payment tracking
- **🛒 Purchase Management** - Supplier and procurement management
- **📋 Inventory Management** - Stock tracking and low inventory alerts
- **📈 Reports & Analytics** - Business intelligence and reporting
- **⚙️ System Settings** - User management and system configuration

## 🎨 Professional Design

The system features a clean, professional interface with:
- **Color-coded sections** for easy navigation and identification
- **Responsive design** that works on all devices
- **Modern UI components** built with shadcn/ui
- **Intuitive navigation** with contextual color schemes

### Color Scheme by Section:
- **Dashboard**: Indigo - Central hub and overview
- **Products**: Green - Inventory and product management
- **Customers**: Blue - Customer relationship management
- **Sales**: Purple - Sales and revenue tracking
- **Purchases**: Orange - Procurement and supplier management
- **Inventory**: Red - Stock and inventory alerts
- **Reports**: Teal - Analytics and business intelligence
- **Settings**: Gray - System configuration and management

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup database
npm run db:push

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open https://r0fvh7nta1m0-deploy.space.z.ai to access your ERP System_Roobin.

## 🔧 Default Access

- **URL**: https://r0fvh7nta1m0-deploy.space.z.ai
- **Default Email**: admin@erpmini.com
- **Default Password**: password

## 📊 Key Features

### 📈 Dashboard
- Real-time business metrics and KPIs
- Interactive charts and graphs
- Quick access to common tasks
- Recent activities and alerts

### 📦 Product Management
- Complete product catalog
- Category management
- Stock tracking
- Product variants and pricing

### 👥 Customer Management
- Customer database and profiles
- Customer classification (Regular/Premium/VIP)
- Contact management
- Purchase history

### 💰 Sales Management
- Invoice generation and management
- Payment status tracking
- Sales analytics
- Customer billing

### 🛒 Purchase Management
- Supplier management
- Purchase order tracking
- Procurement workflow
- Supplier performance

### 📋 Inventory Management
- Real-time stock tracking
- Low inventory alerts
- Stock movement history
- Warehouse management

### 📈 Reports & Analytics
- Sales reports and trends
- Product performance analysis
- Customer insights
- Financial reporting

### ⚙️ System Settings
- User management and permissions
- System configuration
- Data backup and restore
- Audit logs

## 🎨 Technology Stack

- **Frontend**: Next.js 15, TypeScript, React 19
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Database**: SQLite with Prisma ORM
- **State Management**: Zustand, TanStack Query
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI, Lucide Icons

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── products/        # Product management
│   ├── customers/       # Customer management
│   ├── sales/          # Sales management
│   ├── purchases/      # Purchase management
│   ├── inventory/      # Inventory management
│   ├── reports/        # Reports and analytics
│   └── settings/       # System settings
├── components/          # Reusable React components
│   ├── layout/         # Layout components
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions and configurations
```

## 🚀 Getting Started

1. **Clone the repository** and install dependencies
2. **Set up the database** using `npm run db:push`
3. **Start the development server** with `npm run dev`
4. **Log in** with the default credentials
5. **Explore the system** and customize for your business needs

## 🤝 Support

For support and customization:
- Check the documentation in each module
- Review the database schema in `prisma/schema.prisma`
- Customize the color scheme in the component files
- Extend functionality as needed for your business requirements

---

Built with ❤️ for modern business management. ERP System_Roobin - Streamline your operations today!
