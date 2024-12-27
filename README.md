<img src="https://th.bing.com/th/id/R.ce1b610b6ce7a92a69382007efb63b20?rik=JLsU1Wcqdv%2bGng&pid=ImgRaw&r=0" alt="logo" width="200" height="auto" />

# Messenger Clone

A real-time messaging application built with Next.js, React, MongoDB, NextAuth, Pusher and Prisma, designed to replicate the core features of popular chat platforms, offering seamless communication with modern design and robust functionality.

## Features
- UI/UX
  - Sleek and responsive design with Tailwind CSS
  - Tailwind animations and transition effects
  - Responsive design for both desktop and mobile devices
- Authentication and Authorization
  - Credential authentication with NextAuth
  - Google and GitHub authentication integration
- Real-Time Messaging
  - Real-time messaging powered by Pusher
  - Online/offline user status
  - Group chats and one-on-one messaging
  - Message read receipts
- File and Media Handling
  - File and image upload using Cloudinary

## Tech Stack

### Client
- TypeScript
- Next.js
- React
- TailwindCSS
- Prisma
- Pusher
- NextAuth
- react-toast
- react-hook-form

### Database
- MongoDB
- Cloudinary

## Getting Started

### Prerequisites

First Clone the repository:
```bash
git clone
```

Second Install the dependencies:

```bash
npm install
```

Third Start the development server:
```bash
npm run dev
```

### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `GITHUB_ID`
- `GITHUB_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_PUSHER_APP_KEY`
- `PUSHER_APP_ID`
- `PUSHER_SECRET`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
