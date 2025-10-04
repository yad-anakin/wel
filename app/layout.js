import "./globals.css";

export const metadata = {
  title: "بەخێربێیت جەنابی سەرۆک مەسرور بارزانی",
  description: "پەیجی بەخێرهاتن بۆ کرانەوەی یەکەم AI تەندروستی لە کوردستان و عێراق",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ckb" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
