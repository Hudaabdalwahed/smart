<template>
  <main class="home">
    <section class="hero">
      <!-- ================= الصورة ================= -->
      <div class="hero-image">
        <!-- الشكل الأخضر خلف الصورة -->
        <div class="image-bg"></div>

        <img src="@/assets/images/hero.jpg" alt="المواطن يستخدم الحاسوب" />
      </div>

      <!-- ================= المحتوى ================= -->
      <div class="hero-content">
        <p class="welcome">مرحباً بك في</p>

        <h1>بوابة المواطن الذكية</h1>

        <h2>خدماتك الحكومية بسهولة وأمان</h2>

        <p class="description">
          نوفر لك منصة إلكترونية متكاملة لإنجاز معاملاتك الحكومية من أي مكان وفي
          أي وقت، بكل سهولة وأمان.
        </p>

        <button class="services-btn">
          استعراض الخدمات
          <span>←</span>
        </button>

        <!-- ================= الإحصائيات ================= -->
        <div class="stats">
          <div class="stat">
            <img src="@/assets/images/i1.png" alt="" />

            <strong>+50</strong>

            <span> خدمة حكومية </span>
          </div>

          <div class="stat">
            <img src="@/assets/images/i2.png" alt="" />

            <strong>+120</strong>

            <span> معاملة إلكترونية </span>
          </div>

          <div class="stat">
            <img src="@/assets/images/i3.png" alt="" />

            <strong>24/7</strong>

            <span> متاح على مدار الساعة </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* =========================================
   الصفحة
========================================= */

.home {
  direction: rtl;
  background-color: #f8faf8;
}

/* =========================================
   HERO
========================================= */

.hero {
  min-height: 650px;

  padding: 45px 7%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  direction: rtl;

  background-color: #f8faf8;

  position: relative;
  overflow: hidden;
}

/* =========================================
   الصورة
========================================= */

.hero-image {
  width: 52%;
  height: 570px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;

  border-radius: 55% 0 0 55%;

  z-index: 1;
}

/* الشكل الأخضر خلف الصورة */

.image-bg {
  position: absolute;

  width: 560px;
  height: 560px;

  background-color: #e8f2ec;

  border-radius: 50%;

  right: -80px;
  top: 5px;

  z-index: 0;
}

/* الصورة */

.hero-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  object-position: center;

  border-radius: 55% 0 0 55%;

  position: relative;

  z-index: 1;

  box-shadow: 0 12px 35px rgba(27, 94, 69, 0.12);
}

/* =========================================
   المحتوى النصي
========================================= */

.hero-content {
  width: 45%;

  text-align: right;

  direction: rtl;

  padding-right: 25px;

  z-index: 2;
}

/* الترحيب */

.welcome {
  color: #c9a227;

  font-size: 19px;
  font-weight: 700;

  margin: 0 0 8px;
}

/* العنوان الرئيسي */

.hero h1 {
  color: #1b5e45;

  font-size: 50px;
  font-weight: 800;

  line-height: 1.4;

  margin: 0 0 5px;
}

/* العنوان الثاني */

.hero h2 {
  color: #1b5e45;

  font-size: 28px;
  font-weight: 600;

  line-height: 1.6;

  margin: 0 0 20px;
}

/* الوصف */

.description {
  color: #66756e;

  font-size: 16px;

  line-height: 2;

  max-width: 570px;

  margin: 0 0 28px;
}

/* =========================================
   زر الخدمات
========================================= */

.services-btn {
  border: none;

  background-color: #1b8a61;

  color: white;

  padding: 14px 30px;

  border-radius: 30px;

  font-family: "Cairo", sans-serif;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;
}

.services-btn:hover {
  background-color: #1b5e45;

  transform: translateY(-2px);
}

.services-btn span {
  margin-right: 10px;

  font-size: 20px;
}

/* =========================================
   الإحصائيات
========================================= */

.stats {
  display: flex;

  align-items: center;

  margin-top: 45px;

  direction: rtl;
}

/* كل إحصائية */

.stat {
  width: 145px;

  text-align: center;

  padding: 0 20px;

  border-left: 1px solid #d7e3dc;
}

/* آخر عنصر بدون خط */

.stat:last-child {
  border-left: none;
}

/* صورة الإحصائية */

.stat img {
  width: 38px;
  height: 38px;

  object-fit: contain;

  display: block;

  margin: 0 auto 7px;
}

/* الرقم */

.stat strong {
  display: block;

  color: #1b5e45;

  font-size: 24px;

  font-weight: 800;

  line-height: 1.4;
}

/* النص تحت الرقم */

.stat span {
  display: block;

  color: #718078;

  font-size: 12px;

  margin-top: 2px;
}

/* =========================================
   Responsive - تابلت
========================================= */

@media (max-width: 1000px) {
  .hero {
    flex-direction: column;

    padding-top: 50px;
  }

  .hero-image {
    width: 90%;
    height: 480px;

    order: 1;

    margin-bottom: 40px;
  }

  .hero-content {
    width: 90%;

    order: 2;

    text-align: center;

    padding-right: 0;
  }

  .description {
    margin-right: auto;
    margin-left: auto;
  }

  .stats {
    justify-content: center;
  }
}

/* =========================================
   Responsive - موبايل
========================================= */

@media (max-width: 600px) {
  .hero {
    padding: 30px 5%;
  }

  .hero-image {
    width: 100%;
    height: 350px;

    border-radius: 45% 0 0 45%;
  }

  .hero-image img {
    border-radius: 45% 0 0 45%;
  }

  .hero h1 {
    font-size: 35px;
  }

  .hero h2 {
    font-size: 21px;
  }

  .description {
    font-size: 14px;
  }

  .stats {
    flex-wrap: wrap;

    gap: 20px;
  }

  .stat {
    width: 100px;

    padding: 0 10px;
  }
}
</style>
