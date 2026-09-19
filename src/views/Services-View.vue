<template>
  <div class="services-page">
    <div class="section-header">
      <p class="sub-title">كل ما تحتاجه في مكان واحد</p>
      <h2 class="main-title">خدماتنا الإلكترونية</h2>
      <p class="description">
        نوفر لك مجموعة واسعة من الخدمات الحكومية لتسهيل حياتك
      </p>
    </div>

    <div class="services-grid">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card"
      >
        <div class="card-image">
          <img :src="service.image" :alt="service.title" />
        </div>
        <div class="card-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <a href="#" class="more-link">المزيد &larr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesView",
  data() {
    return {
      services: [
        {
          title: "العقارت",
          description: "إصدارالتراخيص",
          image: require("@/assets/images/house.png"),
        },
        {
          title: "المركبات",
          description: "خدمات السيارات والرخص وتجديدها",
          image: require("@/assets/images/car.jpg"),
        },
        {
          title: "التعليم",
          description: "خدمات الجامعات والمدارس والشهادات",
          image: require("@/assets/images/edu.jpg"),
        },
        {
          title: "الوثائق الرسمية",
          description:
            "إصدار وتجديد الوثائق الرسمية مثل الهوية والجواز والسجل المدني",
          image: require("@/assets/images/pass.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/* =========================================
   صفحة الخدمات (الأب الرئيسي)
========================================= */
.services-page {
  padding: 60px 20px;
  text-align: center;
  direction: rtl;
  min-height: 80vh;

  /* =========================================
     رأس القسم (Header)
  ========================================= */
  .section-header {
    .sub-title {
      color: #25722c;
      font-size: 14px;
      margin-bottom: 5px;
    }

    .main-title {
      font-size: 32px;
      color: #1b5e20;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .description {
      color: #666;
      font-size: 15px;
      margin-bottom: 40px;
    }
  }

  /* =========================================
     شبكة الخدمات (Grid)
  ========================================= */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    max-width: 1000px;
    margin: 0 auto;

    /* بطاقة الخدمة */
    .service-card {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      text-align: right;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
      }

      /* صورة البطاقة */
      .card-image {
        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
      }

      /* محتوى البطاقة */
      .card-content {
        padding: 20px;

        h3 {
          font-size: 18px;
          color: #1b5e20;
          margin-bottom: 10px;
        }

        p {
          font-size: 13.5px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .more-link {
          color: #2e7d32;
          text-decoration: none;
          font-weight: bold;
          font-size: 13px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
