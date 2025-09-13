# 🛍️ Ecommerce Store Frontend

A modern, responsive ecommerce store frontend built with Next.js 15, React 19, and TypeScript. This project features a complete shopping experience with product browsing, cart management, and Stripe integration for payments.

## ✨ Features

- **🏠 Homepage** - Featured products display with billboard banner
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🛒 Shopping Cart** - Add/remove items with persistent storage
- **🔍 Product Details** - Detailed product pages with image galleries
- **🏷️ Category Filtering** - Browse products by categories
- **💳 Stripe Integration** - Secure payment processing
- **🎨 Modern UI** - Clean, professional design with smooth animations
- **⚡ Performance** - Optimized with Next.js 15 and React 19
- **🔧 TypeScript** - Full type safety throughout the application

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **Payments**: Stripe
- **Image Optimization**: Next.js Image component
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
ecommerce-store/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups
│   │   ├── page.tsx             # Homepage
│   │   ├── cart/                # Shopping cart page
│   │   ├── category/            # Category pages
│   │   └── product/             # Product detail pages
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── ui/                      # UI components
│   ├── gallery/                 # Image gallery components
│   ├── navbar.tsx               # Navigation bar
│   ├── footer.tsx               # Footer component
│   └── product-list.tsx         # Product listing component
├── actions/                     # Server actions
│   ├── get-products.tsx         # Fetch products
│   ├── get-categories.tsx       # Fetch categories
│   └── get-product.tsx          # Fetch single product
├── hooks/                       # Custom React hooks
│   ├── use-cart.ts              # Cart state management
│   └── use-preview-modal.ts     # Modal state management
├── providers/                   # Context providers
│   ├── modal-providers.tsx      # Modal context
│   └── toast-providers.tsx      # Toast notifications
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions
└── types.ts                     # TypeScript type definitions
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### 1. Clone the repository

```bash
git clone <https://github.com/fazal7090/ecommerce-frontend-ts-next.git>
cd ecommerce-store
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🎯 Key Features Explained

### Shopping Cart
- **Persistent Storage**: Cart items are saved in localStorage
- **Add/Remove Items**: Easy item management with toast notifications
- **Real-time Updates**: Cart count updates instantly in the navbar

### Product Management
- **Image Galleries**: Multiple product images with tabbed interface
- **Product Details**: Comprehensive product information display
- **Related Products**: Smart product recommendations

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Intuitive mobile interactions
- **Modern UI**: Clean, professional design

### Performance
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js
- **TypeScript**: Compile-time error checking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Screenshots
Inside Screenshots folder


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Stripe](https://stripe.com/) for payment processing
- [Vercel](https://vercel.com/) for hosting and deployment

---

⭐ If you found this project helpful, please give it a star!