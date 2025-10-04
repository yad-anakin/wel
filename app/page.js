"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(false);
  const TARGET_URL = "https://ai.kdhn.krd/";

  const handleContinue = (e) => {
    e.preventDefault();
    if (showSplash) return;
    setShowSplash(true);
    setTimeout(() => {
      router.push(TARGET_URL);
    }, 2000);
  };

  return (
    <main className="container full">
      {showSplash && (
        <div className="splash" role="status" aria-live="polite">
          <div className="splashMask" aria-hidden="true" />
        </div>
      )}
      <section className="stage" aria-hidden={showSplash}>
        <header className="header">
          <h1 className="title moving">بەخێربێیت، <span className="red">جەنابی سەرۆک مەسرور بارزانی</span></h1>
          <p className="subtitle">
            بەوپەڕی شادمانییەوە پشتگیری جەنابی سەرۆک بۆ یەکەمین زیرەکی دەستکردی پزیشکی لەسەر ئاستی هەرێمی کوردستان و ئێراقدا بەرز دەنرخێنین، کە دەبێتە سەرەتاییەکی پێشەنگ بۆ بەکارهێنانی تەکنەلۆژیای زیرەک لە کەرتی تەندرووستی و گۆڕینی داهاتووی کوردستان.
          </p>
        </header>

        <div className="brandRow compact">
          <div className="brand">
            <Image
              src="/masrour-barzani.jpg"
              alt="وێنەی جەنابی سەرۆک مەسرور بارزانی"
              width={220}
              height={220}
              className="img avatar"
              priority
            />
          </div>
          <div className="brand">
            <div className="img logo logoMask" aria-hidden="true" />
          </div>
        </div>

        <div className="actions">
          <a href={TARGET_URL} className="button" onClick={handleContinue}>
            بەردەوامبوون
          </a>
        </div>
      </section>
    </main>
  );
}
