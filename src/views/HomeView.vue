<template>
  <main class="home">
    <!-- =========================================
         HERO
    ========================================= -->
    <section class="hero">
      <!-- الصورة -->
      <div class="hero-image">
        <div class="image-bg"></div>

        <img src="@/assets/images/hero.jpg" alt="المواطن يستخدم الحاسوب" />
      </div>

      <!-- المحتوى -->
      <div class="hero-content">
        <p class="welcome">مرحباً بك في</p>

        <h1>بوابة المواطن الذكية</h1>

        <h2>خدماتك الحكومية بسهولة وأمان</h2>

        <p class="description">
          نوفر لك منصة إلكترونية متكاملة لإنجاز معاملاتك الحكومية من أي مكان وفي
          أي وقت، بكل سهولة وأمان.
        </p>

        <!-- زر الخدمات -->
        <router-link to="/services" class="services-btn">
          استعراض الخدمات
          <span>←</span>
        </router-link>

        <!-- الإحصائيات -->
        <div class="stats">
          <div class="stat">
            <img src="@/assets/images/i1.png" alt="" />

            <strong> +50 </strong>

            <span> خدمة حكومية </span>
          </div>

          <div class="stat">
            <img src="@/assets/images/i2.png" alt="" />

            <strong> +120 </strong>

            <span> معاملة إلكترونية </span>
          </div>

          <div class="stat">
            <img src="@/assets/images/i3.png" alt="" />

            <strong> 24/7 </strong>

            <span> متاح على مدار الساعة </span>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================
         MOST USED SERVICES
    ========================================= -->
    <section class="popular-services">
      <!-- عنوان القسم -->
      <div class="popular-header">
        <p class="popular-subtitle">خدمات يكثر استخدامها</p>

        <h2>الخدمات الأكثر استخداماً</h2>

        <p class="popular-description">
          يمكنك الوصول بسرعة إلى الخدمات التي يستخدمها المواطنون بشكل متكرر.
        </p>
      </div>

      <!-- بطاقات الخدمات -->
      <div class="popular-grid">
        <router-link
          v-for="service in popularServices"
          :key="service.id"
          :to="`/service/${service.id}`"
          class="popular-card"
        >
          <!-- الصورة -->
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />
          </div>

          <!-- المعلومات -->
          <div class="service-info">
            <h3>
              {{ service.title }}
            </h3>

            <p>
              {{ service.description }}
            </p>

            <div class="service-footer">
              <span class="requests-count"> {{ service.requests }} طلب </span>

              <span class="arrow"> ← </span>
            </div>
          </div>
        </router-link>
      </div>

      <!-- زر جميع الخدمات -->
      <div class="all-services">
        <router-link to="/services" class="all-services-btn">
          عرض جميع الخدمات
          <span>←</span>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
interface PopularService {
  id: string;
  title: string;
  description: string;
  image: string;
  requests: string;
}

const popularServices: PopularService[] = [
  {
    id: "real-estate",
    title: "العقارات",
    description: "خدمات الملكيات والتراخيص العقارية",
    image: require("@/assets/images/house.png"),
    requests: "1,240",
  },

  {
    id: "vehicles",
    title: "المركبات",
    description: "خدمات السيارات والرخص وتجديدها",
    image: require("@/assets/images/car.jpg"),
    requests: "980",
  },

  {
    id: "documents",
    title: "الوثائق الرسمية",
    description: "إصدار وتجديد الوثائق الرسمية",
    image: require("@/assets/images/pass.jpg"),
    requests: "850",
  },

  {
    id: "education",
    title: "التعليم",
    description: "خدمات الجامعات والمدارس والشهادات",
    image: require("@/assets/images/edu.jpg"),
    requests: "620",
  },
];
</script>

<style lang="scss" scoped>
/* =========================================
   الصفحة الأساسية
========================================= */

.home {
  direction: rtl;

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

    background-image: url("@/assets/images/backg.png");

    background-size: cover;

    background-position: center;

    background-repeat: no-repeat;

    /* =========================================
       صورة الـ Hero
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

      img {
        width: 100%;

        height: 100%;

        object-fit: cover;

        object-position: center;

        border-radius: 55% 0 0 55%;

        position: relative;

        z-index: 1;

        box-shadow: 0 12px 35px rgba(27, 94, 69, 0.12);
      }
    }

    /* =========================================
       محتوى الـ Hero
    ========================================= */

    .hero-content {
      width: 45%;

      text-align: right;

      direction: rtl;

      padding-right: 25px;

      z-index: 2;

      .welcome {
        color: #c9a227;

        font-size: 19px;

        font-weight: 700;

        margin: 0 0 8px;
      }

      .description {
        color: #66756e;

        font-size: 16px;

        line-height: 2;

        max-width: 570px;

        margin: 0 0 28px;
      }

      /* زر الخدمات */

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

        text-decoration: none;

        display: inline-flex;

        align-items: center;

        &:hover {
          background-color: #1b5e45;

          transform: translateY(-2px);
        }

        span {
          margin-right: 10px;

          font-size: 20px;
        }
      }

      /* =========================================
         الإحصائيات
      ========================================= */

      .stats {
        display: flex;

        align-items: center;

        margin-top: 45px;

        direction: rtl;

        .stat {
          width: 145px;

          text-align: center;

          padding: 0 20px;

          border-left: 1px solid #d7e3dc;

          &:last-child {
            border-left: none;
          }

          img {
            width: 38px;

            height: 38px;

            object-fit: contain;

            display: block;

            margin: 0 auto 7px;
          }

          strong {
            display: block;

            color: #1b5e45;

            font-size: 24px;

            font-weight: 800;

            line-height: 1.4;
          }

          span {
            display: block;

            color: #718078;

            font-size: 12px;

            margin-top: 2px;
          }
        }
      }
    }

    /* =========================================
       عناوين الـ Hero
    ========================================= */

    h1 {
      color: #1b5e45;

      font-size: 50px;

      font-weight: 800;

      line-height: 1.4;

      margin: 0 0 5px;
    }

    h2 {
      color: #1b5e45;

      font-size: 28px;

      font-weight: 600;

      line-height: 1.6;

      margin: 0 0 20px;
    }

    /* =========================================
       Responsive Hero
    ========================================= */

    @media (max-width: 1000px) {
      flex-direction: column;

      padding-top: 50px;

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

        .description {
          margin-right: auto;

          margin-left: auto;
        }

        .stats {
          justify-content: center;
        }
      }
    }

    @media (max-width: 600px) {
      padding: 30px 5%;

      .hero-image {
        width: 100%;

        height: 350px;

        border-radius: 45% 0 0 45%;

        img {
          border-radius: 45% 0 0 45%;
        }
      }

      h1 {
        font-size: 35px;
      }

      h2 {
        font-size: 21px;
      }

      .hero-content {
        .description {
          font-size: 14px;
        }

        .stats {
          flex-wrap: wrap;

          gap: 20px;

          .stat {
            width: 100px;

            padding: 0 10px;
          }
        }
      }
    }
  }

  /* =====================================================
     الخدمات الأكثر استخداماً
  ===================================================== */

  .popular-services {
    position: relative;

    padding: 80px 7%;

    direction: rtl;

    background: radial-gradient(
        circle at 10% 20%,
        rgba(27, 138, 97, 0.08),
        transparent 25%
      ),
      radial-gradient(
        circle at 90% 80%,
        rgba(201, 162, 39, 0.08),
        transparent 25%
      ),
      #f7f3df;

    overflow: hidden;
  }

  /* عنوان القسم */

  .popular-header {
    text-align: center;

    margin-bottom: 45px;

    .popular-subtitle {
      color: #c9a227;

      font-size: 14px;

      font-weight: 700;

      margin: 0 0 8px;
    }

    h2 {
      color: #1b5e45;

      font-size: 32px;

      font-weight: 800;

      margin: 0 0 12px;
    }

    .popular-description {
      color: #68746e;

      font-size: 15px;

      margin: 0;
    }
  }

  /* شبكة الخدمات */

  .popular-grid {
    max-width: 1100px;

    margin: 0 auto;

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 24px;
  }

  /* بطاقة الخدمة */

  .popular-card {
    display: block;

    text-decoration: none;

    color: inherit;

    background: rgba(255, 255, 255, 0.78);

    border: 1px solid rgba(255, 255, 255, 0.9);

    border-radius: 22px;

    overflow: hidden;

    box-shadow: 0 12px 30px rgba(27, 94, 69, 0.08);

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    backdrop-filter: blur(8px);

    &:hover {
      transform: translateY(-8px);

      box-shadow: 0 20px 40px rgba(27, 94, 69, 0.15);
    }
  }

  /* صورة البطاقة */

  .service-image {
    height: 155px;

    overflow: hidden;

    background-color: #e8f2ec;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      display: block;

      transition: transform 0.4s ease;
    }
  }

  .popular-card:hover {
    .service-image img {
      transform: scale(1.06);
    }
  }

  /* محتوى البطاقة */

  .service-info {
    padding: 20px;
  }

  .service-info h3 {
    color: #1b5e45;

    font-size: 19px;

    font-weight: 800;

    margin: 0 0 8px;
  }

  .service-info p {
    color: #68746e;

    font-size: 13px;

    line-height: 1.8;

    min-height: 47px;

    margin: 0 0 18px;
  }

  /* أسفل البطاقة */

  .service-footer {
    display: flex;

    align-items: center;

    justify-content: space-between;
  }

  .requests-count {
    color: #b08a16;

    font-size: 13px;

    font-weight: 700;
  }

  .arrow {
    width: 34px;

    height: 34px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background-color: #edf7f0;

    color: #1b5e45;

    font-size: 18px;

    transition: all 0.3s ease;
  }

  .popular-card:hover {
    .arrow {
      background-color: #1b5e45;

      color: white;
    }
  }

  /* =========================================
     زر جميع الخدمات
  ========================================= */

  .all-services {
    display: flex;

    justify-content: center;

    margin-top: 42px;
  }

  .all-services-btn {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    padding: 12px 25px;

    border: 2px solid #1b5e45;

    border-radius: 30px;

    color: #1b5e45;

    text-decoration: none;

    font-size: 14px;

    font-weight: 700;

    transition: all 0.3s ease;

    span {
      font-size: 18px;
    }

    &:hover {
      background-color: #1b5e45;

      color: white;

      transform: translateY(-2px);
    }
  }

  /* =========================================
     Responsive للخدمات
  ========================================= */

  @media (max-width: 1000px) {
    .popular-grid {
      grid-template-columns: repeat(2, 280px);

      justify-content: center;
    }
  }

  @media (max-width: 650px) {
    .popular-services {
      padding: 60px 20px;
    }

    .popular-header {
      h2 {
        font-size: 27px;
      }

      .popular-description {
        font-size: 14px;

        line-height: 1.8;
      }
    }

    .popular-grid {
      grid-template-columns: 280px;

      justify-content: center;
    }
  }
}
</style>
