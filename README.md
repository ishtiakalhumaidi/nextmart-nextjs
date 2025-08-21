# NextMart

A modern e-commerce web application built with Next.js featuring authentication, product management, and a sleek dark-themed interface.

## 🚀 Project Description

NextMart is a full-stack product management system that allows users to browse products publicly and manage inventory through a protected dashboard. Features Google OAuth authentication, responsive design with DaisyUI components, and smooth user interactions.

## Live Demo

Check out the live project [here](https://nextmart-nextjs.vercel.app/).

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS + DaisyUI
- **UI Components**: React Icons
- **Notifications**: React Toastify
- **Carousel**: Swiper

## 🚦 Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with hero section and product highlights |
| `/login` | Public | Authentication page with Google OAuth |
| `/products` | Public | Product catalog with search and filtering |
| `/products/[id]` | Public | Individual product details page |
| `/dashboard/add-product` | Protected | Product management form (requires authentication) |

## 🔧 Setup & Installation

### Prerequisites
- Node.js 
- MongoDB database

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd nextmart
npm install
```

### 2. Environment Variables
Create `.env.local`:

```env
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=mongodb://localhost:27017/nextmart
```

### 3. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Copy credentials to `.env.local`

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

## 🎨 Features

- **Public**: Landing page, product catalog, product details
- **Protected**: Dashboard with product management
- **UI**: toast notifications
- **Database**: MongoDB integration for data persistence

## 🚀 Deployment

Deploy to Vercel:
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Update `NEXTAUTH_URL` to production domain

## 🐛 Troubleshooting

**Authentication Issues**: Check Google OAuth credentials and restart server
**Database Issues**: Verify MongoDB connection string
**Build Errors**: Clean install with `rm -rf node_modules && npm install`

---

**Built with Next.js, NextAuth.js, and MongoDB**