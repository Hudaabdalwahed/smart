<template>
  <div class="services-page">
    <!-- رأس الصفحة -->

    <div class="section-header">
      <p class="sub-title">كل ما تحتاجه في مكان واحد</p>

      <h2 class="main-title">خدماتنا الإلكترونية</h2>

      <p class="description">
        نوفر لك مجموعة واسعة من الخدمات الحكومية لتسهيل حياتك
      </p>
    </div>

    <!-- شبكة البطاقات -->

    <div class="services-grid">
      <!--
        عرض البطاقات باستخدام v-for
        وتمرير البيانات إلى ServiceCard عن طريق Props
      -->

      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        @show-details="openDetails"
        :id="service.id"
      />
    </div>
  </div>
</template>

<script>
import ServiceCard from "@/components/Service-Card.vue";

export default {
  name: "ServicesView",

  // تسجيل الـ Component

  components: {
    ServiceCard,
  },

  // البيانات

  data() {
    return {
      services: [
        {
          id: "real-estate",
          title: "العقارات",

          description: "إصدار التراخيص ونقل الملكيات",

          image: require("@/assets/images/house.png"),
        },

        {
          id: "vehicles",
          title: "المركبات",

          description: "خدمات السيارات والرخص وتجديدها",

          image: require("@/assets/images/car.jpg"),
        },

        {
          id: "education",
          title: "التعليم",

          description: "خدمات الجامعات والمدارس والشهادات",

          image: require("@/assets/images/edu.jpg"),
        },

        {
          id: "documents",
          title: "الوثائق الرسمية",

          description:
            "إصدار وتجديد الوثائق الرسمية مثل الهوية والجواز والسجل المدني",

          image: require("@/assets/images/pass.jpg"),
        },
      ],
    };
  },

  // الدوال

  methods: {
    openDetails(service) {
      this.$router.push({
        name: "service-details",
        params: {
          id: service.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* =========================================
   صفحة الخدمات
========================================= */

.services-page {
  padding: 60px 20px;

  text-align: center;

  direction: rtl;

  min-height: calc(100vh - 80px);

  /* خلفية الصفحة */

  background: linear-gradient(
      rgba(248, 250, 248, 0.88),
      rgba(248, 250, 248, 0.88)
    ),
    url("@/assets/images/backg.jpg") center / cover no-repeat fixed;

  /* =========================================
     رأس الصفحة
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
     شبكة البطاقات
  ========================================= */

  .services-grid {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

    gap: 25px;

    max-width: 1000px;

    margin: 0 auto;
  }
}
</style>
