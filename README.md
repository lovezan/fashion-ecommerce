
# Fashion E-commerce Website

A modern, responsive fashion e-commerce website built with Next.js and Tailwind CSS. This project showcases a complete shopping experience with product listings, filtering, and user authentication.

![Fashion E-commerce](/images/page.png)

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Mobile Navigation**: Hamburger menu for mobile with smooth transitions
- **Sticky Header**: Navigation bar that sticks to the top when scrolling
- **Product Catalog**: Browse products with filtering and sorting options
- **User Authentication**: Sign up and sign in functionality
- **Favorites**: Save and manage favorite products
- **Category Filtering**: Filter products by categories
- **Modern UI**: Clean and modern design with smooth animations

## Pages

1. **Home Page** (`/`): Landing page showcasing featured products and categories
2. **Catalogue** (`/catalogue`): Complete product listing with filtering and sorting options
3. **Fashion** (`/fashion`): Fashion-specific products with category tabs
4. **Lifestyle** (`/lifestyle`): Lifestyle products organized by categories
5. **Favorites** (`/favourite`): User's saved favorite products
6. **Sign Up** (`/signup`): User registration page
7. **Sign In** (`/signin`): User login page

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Simple and consistent icon set
- **React Hooks**: For state management and side effects

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lovezan/fashion-ecommerce.git
   cd fashion-ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
fashion-ecommerce/
├── app/                  # Next.js app directory
│   ├── catalogue/        # Catalogue page
│   ├── fashion/          # Fashion page
│   ├── favourite/        # Favorites page
│   ├── lifestyle/        # Lifestyle page
│   ├── signin/           # Sign in page
│   ├── signup/           # Sign up page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Page footer
│   ├── newsletter.tsx    # Newsletter signup component
│   └── product-card.tsx  # Product card component
├── lib/                  # Utility functions and data
│   ├── product-data.ts   # Mock product data
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.ts` file.

### Adding Products

To add more products, edit the `lib/product-data.ts` file. The project currently uses mock data, but you can replace it with an API integration.

## Deployment

This project can be easily deployed to Vercel:

```bash
npm run build
# or
yarn build
```

Then deploy the `out` directory to your hosting provider of choice.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
