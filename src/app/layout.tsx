import './global.css';
import React from 'react';

export const metadata = {
  title: 'Welcome to React E-commerce Dashboard Monorepo',
  description: 'Author: Anton Repin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
