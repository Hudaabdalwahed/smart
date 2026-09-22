<template>
  <div class="service-details">
    <!-- خلفيات زخرفية -->
    <div class="ambient ambient-green"></div>
    <div class="ambient ambient-gold"></div>
    <div class="organic-wave"></div>

    <!-- العنوان -->
    <section class="details-header">
      <div class="header-content">
        <span class="service-badge"> خدمة إلكترونية </span>

        <h1>
          {{ service.title }}
        </h1>

        <p>
          {{ service.subtitle }}
        </p>
      </div>
    </section>

    <!-- معلومات الخدمة -->
    <section class="details-container">
      <!-- الصورة -->
      <div class="image-section">
        <div class="image-card">
          <img :src="service.image" :alt="service.title" />

          <div class="image-overlay">
            <span>
              {{ service.title }}
            </span>
          </div>
        </div>
      </div>

      <!-- معلومات الخدمة -->
      <div class="service-info">
        <span class="small-title"> معلومات الخدمة </span>

        <h2>
          {{ service.title }}
        </h2>

        <p class="intro">
          {{ service.description }}
        </p>

        <!-- خيارات الخدمة -->
        <div class="service-options">
          <div
            v-for="(option, index) in service.options"
            :key="index"
            class="option"
          >
            <div class="option-icon">
              {{ option.icon }}
            </div>

            <div>
              <h3>
                {{ option.title }}
              </h3>

              <p>
                {{ option.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- زر تقديم الطلب -->
        <button class="request-btn" @click="showForm = !showForm">
          {{ showForm ? "إغلاق النموذج" : "تقديم طلب" }}

          <span>
            {{ showForm ? "↑" : "←" }}
          </span>
        </button>
      </div>
    </section>

    <!-- نموذج الطلب -->
    <transition name="slide">
      <section v-if="showForm" class="request-section">
        <div class="request-card">
          <div class="form-header">
            <span class="form-badge"> طلب جديد </span>

            <h2>تقديم طلب {{ service.title }}</h2>

            <p>يرجى تعبئة المعلومات التالية لإرسال طلبك</p>
          </div>

          <form @submit.prevent="submitRequest">
            <div class="form-grid">
              <!-- الاسم -->
              <div class="form-group">
                <label> الاسم الكامل </label>

                <input
                  v-model="form.fullName"
                  type="text"
                  placeholder="أدخل الاسم الكامل"
                  required
                />
              </div>

              <!-- الرقم الوطني -->
              <div class="form-group">
                <label> الرقم الوطني </label>

                <input
                  v-model="form.nationalId"
                  type="text"
                  placeholder="أدخل الرقم الوطني"
                  required
                />
              </div>

              <!-- الهاتف -->
              <div class="form-group">
                <label> رقم الهاتف </label>

                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="09xxxxxxxx"
                  required
                />
              </div>

              <!-- نوع المعاملة -->
              <div class="form-group">
                <label> نوع المعاملة </label>

                <select v-model="form.requestType" required>
                  <option value="">اختر نوع المعاملة</option>
                  <option
                    v-for="(option, index) in service.options"
                    :key="index"
                    :value="option.title"
                  >
                    {{ option.title }}
                  </option>
                </select>
              </div>
            </div>

            <!-- الملاحظات -->
            <div class="form-group">
              <label> ملاحظات </label>

              <textarea
                v-model="form.notes"
                rows="5"
                placeholder="اكتب أي ملاحظات إضافية..."
              ></textarea>
            </div>

            <!-- الملف -->
            <div class="form-group">
              <label> الوثيقة المطلوبة </label>

              <input type="file" @change="handleFile" />

              <small> يمكنك إرفاق الوثيقة المطلوبة للمعاملة </small>
            </div>

            <!-- إرسال -->
            <button type="submit" class="submit-btn">
              إرسال الطلب

              <span> ✓ </span>
            </button>
          </form>

          <!-- رسالة النجاح -->
          <transition name="success">
            <div v-if="submitted" class="success-message">
              <div class="success-icon">✓</div>

              <div>
                <h3>تم إرسال الطلب بنجاح 🎉</h3>

                <p>سيتم مراجعة طلبك وإعلامك بحالته لاحقاً.</p>
              </div>
            </div>
          </transition>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ServiceDetailsView",

  data() {
    return {
      showForm: false,

      submitted: false,

      /* =========================
         الخدمات
      ========================= */

      services: {
        "real-estate": {
          title: "خدمات العقارات",

          subtitle: "أنجز معاملاتك العقارية إلكترونياً بسهولة وأمان",

          description:
            "يمكنك من خلال هذه الخدمة إنجاز مجموعة من المعاملات العقارية إلكترونياً دون الحاجة إلى مراجعة الدوائر بشكل مباشر.",

          image: require("@/assets/images/house.png"),

          options: [
            {
              title: "تسجيل عقار",

              description: "تسجيل عقار جديد",

              icon: "🏠",
            },

            {
              title: "نقل ملكية",

              description: "نقل ملكية العقار",

              icon: "📄",
            },

            {
              title: "سند ملكية",

              description: "استخراج سند ملكية",

              icon: "📋",
            },
          ],
        },

        /* =========================
           المركبات
        ========================= */

        vehicles: {
          title: "خدمات المركبات",

          subtitle: "أنجز معاملات مركبتك بسهولة دون الحاجة إلى الانتظار",

          description:
            "يمكنك من خلال هذه الخدمة تنفيذ مجموعة من معاملات المركبات والرخص إلكترونياً بطريقة سهلة وسريعة.",

          image: require("@/assets/images/car.jpg"),

          options: [
            {
              title: "تجديد رخصة",

              description: "تجديد رخصة المركبة",

              icon: "🚗",
            },

            {
              title: "تسجيل مركبة",

              description: "تسجيل مركبة جديدة",

              icon: "📋",
            },

            {
              title: "نقل ملكية مركبة",

              description: "نقل ملكية المركبة",

              icon: "🔄",
            },
          ],
        },

        /* =========================
           التعليم
        ========================= */

        education: {
          title: "خدمات التعليم",

          subtitle: "الوصول إلى خدماتك التعليمية بسهولة",

          description:
            "يمكنك من خلال هذه الخدمة إنجاز مجموعة من المعاملات المتعلقة بالجامعات والمدارس والشهادات إلكترونياً.",

          image: require("@/assets/images/edu.jpg"),

          options: [
            {
              title: "طلب شهادة",

              description: "تقديم طلب للحصول على شهادة",

              icon: "🎓",
            },

            {
              title: "تصديق شهادة",

              description: "تصديق الوثائق والشهادات",

              icon: "📄",
            },

            {
              title: "كشف علامات",

              description: "طلب كشف العلامات",

              icon: "📋",
            },
          ],
        },

        /* =========================
           الوثائق
        ========================= */

        documents: {
          title: "الوثائق الرسمية",

          subtitle: "أنجز معاملاتك المتعلقة بالوثائق الرسمية إلكترونياً",

          description:
            "يمكنك من خلال هذه الخدمة تقديم طلبات إصدار وتجديد الوثائق الرسمية بسهولة وأمان.",

          image: require("@/assets/images/pass.jpg"),

          options: [
            {
              title: "تجديد وثيقة",

              description: "تجديد الوثائق الرسمية",

              icon: "📄",
            },

            {
              title: "إصدار وثيقة",

              description: "إصدار وثيقة رسمية جديدة",

              icon: "🪪",
            },

            {
              title: "بيان شخصي",

              description: "استخراج بيان شخصي",

              icon: "📋",
            },
          ],
        },
      },

      /* =========================
         بيانات النموذج
      ========================= */

      form: {
        fullName: "",

        nationalId: "",

        phone: "",

        requestType: "",

        notes: "",

        file: null,
      },
    };
  },

  /* =========================
     الخدمة الحالية
  ========================= */

  computed: {
    service() {
      const id = this.$route.params.id;

      return this.services[id] || this.services["real-estate"];
    },
  },

  /* =========================
     العمليات
  ========================= */

  methods: {
    handleFile(event) {
      this.form.file = event.target.files[0];
    },

    submitRequest() {
      /*
       * نجيب الطلبات القديمة
       */

      const oldRequests = JSON.parse(localStorage.getItem("requests")) || [];

      /*
       * إنشاء طلب جديد
       */

      const newRequest = {
        id: "REQ-" + Date.now(),

        service: this.service.title,

        serviceId: this.$route.params.id,

        requestType: this.form.requestType,

        fullName: this.form.fullName,

        nationalId: this.form.nationalId,

        phone: this.form.phone,

        notes: this.form.notes,

        status: "قيد المراجعة",

        statusClass: "pending",

        progress: 10,

        date: new Date().toLocaleDateString("ar-SY"),
      };

      /*
       * إضافة الطلب الجديد
       */

      oldRequests.push(newRequest);

      /*
       * حفظ الطلبات
       */

      localStorage.setItem(
        "requests",

        JSON.stringify(oldRequests)
      );

      /*
       * إظهار رسالة النجاح
       */

      this.submitted = true;

      console.log("تم إرسال الطلب:", newRequest);
    },
  },
};
</script>

<style lang="scss" scoped>
.service-details {
  position: relative;

  overflow: hidden;

  min-height: 100vh;

  direction: rtl;

  padding-bottom: 80px;
  background: linear-gradient(135deg, #edf8f1 0%, #ffffff 48%, #f8f2df 100%);
}

/* =========================
   الخلفيات الزخرفية
========================= */

.ambient {
  position: absolute;

  border-radius: 50%;

  filter: blur(70px);

  pointer-events: none;

  animation: float 8s ease-in-out infinite;
}

.ambient-green {
  width: 500px;

  height: 500px;

  background: rgba(27, 138, 97, 0.2);

  top: -250px;

  right: -150px;
}

.ambient-gold {
  width: 380px;

  height: 380px;

  background: rgba(201, 162, 39, 0.16);

  bottom: 100px;

  left: -180px;

  animation-delay: 2s;
}

.organic-wave {
  position: absolute;

  width: 120%;

  height: 600px;

  top: -330px;

  left: -10%;

  background: linear-gradient(135deg, #1b5e45, #1b8a61);

  opacity: 0.08;

  border-radius: 0 0 55% 45%;

  transform: rotate(-4deg);

  pointer-events: none;
}

/* =========================
   Header
========================= */

.details-header {
  position: relative;

  text-align: center;

  padding: 100px 20px 70px;
}

.header-content {
  position: relative;

  z-index: 2;
}

.service-badge,
.form-badge {
  display: inline-block;

  padding: 8px 18px;

  border-radius: 30px;

  background: rgba(201, 162, 39, 0.15);

  color: #9b7912;

  font-size: 14px;

  font-weight: 700;

  margin-bottom: 15px;
}

.details-header h1 {
  margin: 0;

  font-size: 48px;

  color: #1b5e45;

  font-weight: 800;
}

.details-header p {
  margin-top: 15px;

  color: #64746c;

  font-size: 18px;
}

/* =========================
   المحتوى الرئيسي
========================= */

.details-container {
  position: relative;

  z-index: 2;

  width: 90%;

  max-width: 1150px;

  margin: auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 45px;

  align-items: center;
}

/* =========================
   الصورة
========================= */

.image-card {
  position: relative;

  overflow: hidden;

  border-radius: 35px;

  padding: 10px;

  background: rgba(255, 255, 255, 0.55);

  backdrop-filter: blur(18px);

  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.7);

  box-shadow: 0 25px 60px rgba(27, 94, 69, 0.15);
}

.image-card img {
  width: 100%;

  height: 430px;

  object-fit: cover;

  border-radius: 27px;

  display: block;
}

.image-overlay {
  position: absolute;

  bottom: 25px;

  right: 25px;

  left: 25px;

  padding: 16px;

  border-radius: 18px;

  background: rgba(27, 94, 69, 0.75);

  color: white;

  backdrop-filter: blur(12px);

  font-weight: 700;
}

/* =========================
   معلومات الخدمة
========================= */

.service-info {
  padding: 35px;

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.55);

  backdrop-filter: blur(18px);

  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.75);

  box-shadow: 0 20px 50px rgba(27, 94, 69, 0.1);
}

.small-title {
  color: #c9a227;

  font-weight: 700;

  font-size: 14px;
}

.service-info h2 {
  color: #1b5e45;

  font-size: 32px;

  margin: 8px 0 15px;
}

.intro {
  color: #64746c;

  line-height: 1.9;
}

/* =========================
   خيارات الخدمة
========================= */

.service-options {
  display: flex;

  flex-direction: column;

  gap: 12px;

  margin: 25px 0;
}

.option {
  display: flex;

  align-items: center;

  gap: 15px;

  padding: 15px;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.65);

  transition: 0.3s;
}

.option:hover {
  transform: translateX(-6px);

  background: rgba(255, 255, 255, 0.9);
}

.option-icon {
  width: 50px;

  height: 50px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 15px;
  background: #edf8f1;

  font-size: 22px;
}

.option h3 {
  margin: 0 0 4px;

  color: #1b5e45;

  font-size: 16px;
}

.option p {
  margin: 0;

  color: #77847e;

  font-size: 13px;
}

/* =========================
   زر تقديم الطلب
========================= */

.request-btn {
  width: 100%;

  border: none;

  border-radius: 16px;

  padding: 16px;

  background: linear-gradient(135deg, #1b5e45, #1b8a61);

  color: white;

  font-size: 16px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s;

  box-shadow: 0 12px 25px rgba(27, 94, 69, 0.22);
}

.request-btn span {
  margin-right: 10px;
}

.request-btn:hover {
  transform: translateY(-3px);

  box-shadow: 0 18px 30px rgba(27, 94, 69, 0.28);
}

/* =========================
   نموذج الطلب
========================= */

.request-section {
  position: relative;

  z-index: 3;

  width: 90%;

  max-width: 900px;

  margin: 70px auto 0;
}

.request-card {
  padding: 45px;

  border-radius: 32px;

  background: rgba(255, 255, 255, 0.68);

  backdrop-filter: blur(20px);

  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.8);

  box-shadow: 0 25px 70px rgba(27, 94, 69, 0.15);
}

.form-header {
  text-align: center;

  margin-bottom: 35px;
}

.form-header h2 {
  color: #1b5e45;

  font-size: 30px;

  margin: 5px 0 10px;
}

.form-header p {
  color: #718078;
}

/* =========================
   الحقول
========================= */

.form-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;
}

.form-group {
  display: flex;

  flex-direction: column;

  gap: 8px;

  margin-bottom: 20px;
}

.form-group label {
  color: #1b5e45;

  font-weight: 700;

  font-size: 14px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;

  box-sizing: border-box;

  border: 1px solid rgba(27, 94, 69, 0.15);

  background: rgba(255, 255, 255, 0.75);

  border-radius: 14px;

  padding: 14px;

  font-family: inherit;

  font-size: 14px;

  outline: none;

  transition: 0.3s;
}

.form-group textarea {
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #1b8a61;

  box-shadow: 0 0 0 4px rgba(27, 138, 97, 0.08);

  background: white;
}

.form-group small {
  color: #87938d;

  font-size: 12px;
}

/* =========================
   زر الإرسال
========================= */

.submit-btn {
  width: 100%;

  border: none;

  padding: 16px;

  border-radius: 15px;

  background: linear-gradient(135deg, #c9a227, #b38d19);

  color: white;

  font-size: 16px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s;
}

.submit-btn:hover {
  transform: translateY(-2px);

  box-shadow: 0 12px 25px rgba(201, 162, 39, 0.25);
}

.submit-btn span {
  margin-right: 8px;
}

/* =========================
   رسالة النجاح
========================= */

.success-message {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-top: 25px;

  padding: 18px;

  border-radius: 18px;

  background: rgba(27, 138, 97, 0.1);

  border: 1px solid rgba(27, 138, 97, 0.15);
}

.success-icon {
  width: 45px;

  height: 45px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #1b8a61;

  color: white;

  font-size: 20px;

  font-weight: bold;
}

.success-message h3 {
  margin: 0 0 5px;

  color: #1b5e45;
}

.success-message p {
  margin: 0;

  color: #718078;

  font-size: 14px;
}

/* =========================
   Animations
========================= */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;

  transform: translateY(-30px);
}

.success-enter-active,
.success-leave-active {
  transition: 0.4s;
}

.success-enter-from,
.success-leave-to {
  opacity: 0;

  transform: translateY(15px);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(25px);
  }
}

/* =========================
   Responsive
========================= */

@media (max-width: 850px) {
  .details-container {
    grid-template-columns: 1fr;
  }

  .details-header h1 {
    font-size: 38px;
  }

  .image-card img {
    height: 350px;
  }
}

@media (max-width: 600px) {
  .details-header {
    padding-top: 70px;
  }

  .details-header h1 {
    font-size: 30px;
  }

  .details-header p {
    font-size: 15px;
  }

  .service-info {
    padding: 25px;
  }

  .request-card {
    padding: 25px 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;

    gap: 0;
  }
}
</style>
