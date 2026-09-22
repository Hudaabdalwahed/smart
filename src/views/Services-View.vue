<template>
  <div class="services-page">
    <!-- ================= HEADER ================= -->
    <div class="section-header">
      <p class="sub-title">كل ما تحتاجه في مكان واحد</p>

      <h2 class="main-title">خدماتنا الإلكترونية</h2>

      <p class="description">
        نوفر لك مجموعة واسعة من الخدمات الحكومية لتسهيل حياتك
      </p>
    </div>

    <!-- ================= SEARCH ================= -->
    <div class="search-box">
      <span class="search-icon"> 🔎 </span>

      <input type="text" v-model="searchText" placeholder="ابحث عن خدمة..." />

      <!-- زر مسح البحث -->
      <button v-if="searchText" class="clear-btn" @click="searchText = ''">
        ×
      </button>
    </div>

    <!-- ================= SERVICES ================= -->
    <div v-if="filteredServices.length > 0" class="services-grid">
      <ServiceCard
        v-for="(service, index) in filteredServices"
        :key="index"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :id="service.id"
        @show-details="openDetails"
      />
    </div>

    <!-- ================= NO RESULTS ================= -->
    <div v-else class="no-results">
      <div class="no-results-icon">🔎</div>

      <h3>لم يتم العثور على الخدمة</h3>

      <p>جرّب البحث باستخدام كلمة أخرى.</p>

      <button @click="searchText = ''">عرض جميع الخدمات</button>
    </div>
  </div>
</template>

<script>
import ServiceCard from "@/components/Service-Card.vue";

export default {
  name: "ServicesView",

  components: {
    ServiceCard,
  },

  data() {
    return {
      // النص الذي يكتبه المستخدم في البحث
      searchText: "",

      // جميع الخدمات
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

  // ================= COMPUTED =================

  computed: {
    filteredServices() {
      // إذا لم يكتب المستخدم شيئاً
      // نعرض جميع الخدمات

      if (!this.searchText.trim()) {
        return this.services;
      }

      // تحويل البحث إلى أحرف صغيرة
      // حتى يكون البحث أسهل

      const search = this.searchText.trim().toLowerCase();

      // تصفية الخدمات

      return this.services.filter((service) => {
        return (
          service.title.toLowerCase().includes(search) ||
          service.description.toLowerCase().includes(search)
        );
      });
    },
  },

  // ================= METHODS =================

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
.services-page {
  padding: 70px 20px;

  text-align: center;

  direction: rtl;

  min-height: calc(100vh - 80px);

  position: relative;

  overflow: hidden;

  background: radial-gradient(
      circle at 10% 20%,
      rgba(201, 162, 39, 0.18),
      transparent 25%
    ),
    radial-gradient(circle at 90% 80%, rgba(27, 94, 69, 0.2), transparent 30%),
    linear-gradient(135deg, #edf7f0 0%, #f7f3df 45%, #e6f2eb 100%);

  &::before {
    content: "";

    position: absolute;

    width: 260px;

    height: 260px;

    border-radius: 50%;

    background: rgba(27, 94, 69, 0.08);

    top: -80px;

    right: -70px;

    filter: blur(2px);
  }

  &::after {
    content: "";

    position: absolute;

    width: 220px;

    height: 220px;

    border-radius: 50%;

    background: rgba(201, 162, 39, 0.1);

    bottom: -70px;

    left: -50px;

    filter: blur(3px);
  }

  /* ================= HEADER ================= */

  .section-header {
    position: relative;

    z-index: 1;

    .sub-title {
      color: #b08a16;

      font-size: 14px;

      font-weight: bold;

      margin-bottom: 7px;
    }

    .main-title {
      font-size: 34px;

      color: #1b5e45;

      margin-bottom: 10px;

      font-weight: bold;
    }

    .description {
      color: #59665f;

      font-size: 15px;

      margin-bottom: 30px;
    }
  }

  /* ================= SEARCH ================= */

  .search-box {
    position: relative;

    z-index: 2;

    width: 100%;

    max-width: 650px;

    height: 58px;

    margin: 0 auto 45px;

    display: flex;

    align-items: center;

    background: rgba(255, 255, 255, 0.75);

    border: 1px solid rgba(27, 94, 69, 0.12);

    border-radius: 18px;

    box-shadow: 0 10px 30px rgba(27, 94, 69, 0.08);

    transition: all 0.3s ease;

    &:focus-within {
      border-color: #1b5e45;

      box-shadow: 0 12px 35px rgba(27, 94, 69, 0.14);

      transform: translateY(-2px);
    }

    .search-icon {
      font-size: 21px;

      margin-right: 18px;

      opacity: 0.75;
    }

    input {
      flex: 1;

      height: 100%;

      border: none;

      outline: none;

      background: transparent;

      padding: 0 14px;

      color: #1b5e45;

      font-size: 15px;

      font-family: inherit;

      text-align: right;

      &::placeholder {
        color: #89958f;
      }
    }

    .clear-btn {
      width: 32px;

      height: 32px;

      margin-left: 13px;

      margin-right: 5px;

      border: none;

      border-radius: 50%;

      background: #edf7f0;

      color: #1b5e45;

      font-size: 22px;

      line-height: 1;

      cursor: pointer;

      transition: all 0.3s ease;

      &:hover {
        background: #1b5e45;

        color: white;
      }
    }
  }

  /* ================= SERVICES ================= */

  .services-grid {
    position: relative;

    z-index: 1;

    display: grid;

    grid-template-columns: repeat(3, 280px);
    justify-content: center;

    gap: 28px;

    max-width: 1000px;

    margin: 0 auto;
  }

  /* ================= NO RESULTS ================= */

  .no-results {
    position: relative;

    z-index: 1;

    max-width: 500px;

    margin: 20px auto 0;

    padding: 45px 25px;

    background: rgba(255, 255, 255, 0.65);

    border-radius: 25px;

    box-shadow: 0 15px 40px rgba(27, 94, 69, 0.08);

    .no-results-icon {
      font-size: 42px;

      margin-bottom: 15px;

      opacity: 0.75;
    }

    h3 {
      color: #1b5e45;

      font-size: 22px;

      margin-bottom: 10px;
    }

    p {
      color: #68746e;

      font-size: 14px;

      margin-bottom: 25px;
    }

    button {
      border: none;

      background: #1b5e45;

      color: white;

      padding: 11px 25px;

      border-radius: 25px;

      cursor: pointer;

      font-family: inherit;

      font-size: 14px;

      transition: all 0.3s ease;

      &:hover {
        background: #c9a227;

        transform: translateY(-2px);
      }
    }
  }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 600px) {
  .services-page {
    padding: 50px 15px;
    .section-header {
      .main-title {
        font-size: 28px;
      }

      .description {
        font-size: 14px;
      }
    }

    .search-box {
      height: 54px;

      margin-bottom: 35px;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
