import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({ subsets: ['arabic'], variable: '--font-vazir' })

export const metadata: Metadata = {
  title: 'پالس | سیستم مدیریت محصول',
  description: 'داشبورد عملیاتی تیم محصول برای تمرکز، اولویت‌بندی و تحویل بهتر.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl" className="bg-background"><body className={vazirmatn.variable}>{children}</body></html>
}
