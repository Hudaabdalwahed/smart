<template>
  <main class="assistant-page">
    <!-- عنوان الصفحة -->
    <section class="page-header">
      <div class="assistant-icon">🤖</div>

      <p>بوابة المواطن الذكية</p>

      <h1>مساعد الخدمة الذكي</h1>

      <span> أخبرنا ماذا تريد وسنساعدك في الوصول إلى الخدمة المناسبة </span>
    </section>

    <!-- صندوق البحث -->
    <section class="assistant-box">
      <div class="box-title">
        <div class="title-icon">💬</div>

        <div>
          <h2>كيف يمكننا مساعدتك؟</h2>

          <p>اكتب المعاملة أو الخدمة التي تبحث عنها</p>
        </div>
      </div>

      <div class="search-area">
        <input
          v-model="searchText"
          type="text"
          placeholder="مثال: بدي جدّد رخصة السيارة"
          @keyup.enter="searchService"
        />

        <button @click="searchService">
          البحث عن الخدمة
          <span>←</span>
        </button>
      </div>

      <!-- أمثلة سريعة -->
      <div class="examples">
        <span> جرّب مثلاً: </span>

        <button @click="useExample('بدي جدّد رخصة السيارة')">
          🚗 تجديد رخصة السيارة
        </button>

        <button @click="useExample('بدي أطلع وثيقة شخصية')">
          📄 وثيقة شخصية
        </button>

        <button @click="useExample('بدي خدمة عقارية')">🏠 خدمة عقارية</button>

        <button @click="useExample('بدي خدمة تعليمية')">🎓 خدمة تعليمية</button>
      </div>
    </section>

    <!-- النتيجة -->
    <section v-if="result" class="result-card">
      <div class="result-header">
        <div class="result-icon">
          {{ result.icon }}
        </div>

        <div>
          <span class="result-label"> الخدمة المناسبة لك </span>

          <h2>
            {{ result.title }}
          </h2>

          <p>
            {{ result.description }}
          </p>
        </div>
      </div>

      <!-- المعلومات -->
      <div class="result-content">
        <!-- الوثائق -->
        <div class="info-section">
          <h3>📄 الوثائق المطلوبة</h3>

          <ul>
            <li v-for="document in result.documents" :key="document">
              {{ document }}
            </li>
          </ul>
        </div>

        <!-- الخطوات -->
        <div class="info-section">
          <h3>📋 خطوات إنجاز الخدمة</h3>

          <div class="steps">
            <div v-for="(step, index) in result.steps" :key="step" class="step">
              <span class="step-number">
                {{ index + 1 }}
              </span>

              <span>
                {{ step }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- أزرار -->
      <div class="result-actions">
        <button class="service-btn" @click="goToService">
          الانتقال إلى الخدمة
          <span>←</span>
        </button>

        <button class="appointment-btn" @click="goToAppointments">
          حجز موعد
          <span>📅</span>
        </button>
      </div>
    </section>

    <!-- لا توجد نتيجة -->
    <section v-if="searched && !result" class="no-result">
      <div>🔍</div>

      <h2>لم نجد خدمة مطابقة</h2>

      <p>جرّب كتابة كلمات مثل: سيارة، رخصة، عقار، وثيقة، تعليم</p>
    </section>

    <!-- نصائح -->
    <section v-if="!searched" class="tips">
      <h2>💡 نصيحة</h2>

      <p>
        لا تحتاج إلى كتابة اسم الخدمة بشكل دقيق، يكفي أن تكتب ما تريد القيام به.
      </p>

      <div class="tip-examples">
        <span> "بدي جدّد السيارة" </span>

        <span> "بدي أطلع وثيقة" </span>

        <span> "بدي خدمة للعقار" </span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "SmartAssistantView",

  data() {
    return {
      // النص الذي يكتبه المستخدم
      searchText: "",

      // هل قام المستخدم بالبحث؟
      searched: false,

      // نتيجة البحث
      result: null,

      // بيانات الخدمات
      services: [
        {
          id: "vehicles",

          title: "خدمات المركبات",

          description: "خدمات متعلقة بالمركبات والرخص وتجديدها.",

          icon: "🚗",

          keywords: [
            "سيارة",
            "سيارات",
            "مركبة",
            "مركبات",
            "رخصة",
            "رخص",
            "سواقة",
            "قيادة",
            "مرور",
            "نقل",
          ],

          documents: [
            "الهوية الشخصية",
            "رخصة المركبة",
            "وثائق المركبة المطلوبة",
          ],

          steps: [
            "اختيار الخدمة المطلوبة",
            "تقديم الطلب والوثائق المطلوبة",
            "حجز موعد عند الحاجة",
            "مراجعة الجهة المختصة",
          ],
        },

        {
          id: "documents",

          title: "الوثائق الرسمية",

          description: "خدمات إصدار وتجديد الوثائق الرسمية.",

          icon: "📄",

          keywords: [
            "وثيقة",
            "وثائق",
            "هوية",
            "شخصية",
            "بيان",
            "سجل",
            "أحوال",
            "إثبات",
          ],

          documents: [
            "الهوية الشخصية",
            "الوثائق الثبوتية المطلوبة",
            "صور شخصية عند الحاجة",
          ],

          steps: [
            "اختيار نوع الوثيقة",
            "تعبئة طلب الخدمة",
            "تقديم الوثائق المطلوبة",
            "مراجعة الجهة المختصة",
          ],
        },

        {
          id: "real-estate",

          title: "الخدمات العقارية",

          description: "خدمات الملكيات والتراخيص والمعاملات العقارية.",

          icon: "🏠",

          keywords: [
            "عقار",
            "عقارات",
            "بيت",
            "منزل",
            "ملكية",
            "ملكية عقارية",
            "أرض",
            "أراضي",
            "ترخيص",
            "سجل عقاري",
          ],

          documents: [
            "الهوية الشخصية",
            "وثيقة الملكية",
            "المستندات العقارية المطلوبة",
          ],

          steps: [
            "اختيار المعاملة العقارية",
            "إدخال معلومات العقار",
            "إرفاق الوثائق المطلوبة",
            "مراجعة الجهة العقارية",
          ],
        },

        {
          id: "education",

          title: "الخدمات التعليمية",

          description: "خدمات الجامعات والمدارس والشهادات.",

          icon: "🎓",

          keywords: [
            "تعليم",
            "تعليمية",
            "جامعة",
            "جامعات",
            "مدرسة",
            "مدارس",
            "شهادة",
            "طلاب",
            "طالب",
            "دراسة",
          ],

          documents: [
            "الهوية الشخصية",
            "الوثائق الدراسية المطلوبة",
            "الشهادة أو الإثبات المطلوب",
          ],

          steps: [
            "اختيار الخدمة التعليمية",
            "تعبئة البيانات المطلوبة",
            "إرفاق الوثائق",
            "متابعة حالة الطلب",
          ],
        },
      ],
    };
  },

  methods: {
    // البحث عن الخدمة
    searchService() {
      const text = this.searchText.trim().toLowerCase();

      this.searched = true;

      this.result = null;

      // إذا كان مربع البحث فارغاً
      if (!text) {
        return;
      }

      // البحث ضمن الخدمات
      const foundService = this.services.find((service) => {
        return service.keywords.some((keyword) => text.includes(keyword));
      });

      if (foundService) {
        this.result = foundService;
      }
    },

    // استخدام مثال جاهز
    useExample(text) {
      this.searchText = text;

      this.searchService();
    },

    // الانتقال إلى تفاصيل الخدمة
    goToService() {
      if (!this.result) {
        return;
      }

      this.$router.push({
        name: "service-details",

        params: {
          id: this.result.id,
        },
      });
    },

    // الانتقال إلى المواعيد
    goToAppointments() {
      this.$router.push("/appointments");
    },
  },
};
</script>

<style lang="scss" scoped>
.assistant-page {
  min-height: 100vh;

  padding: 65px 7% 80px;

  background: radial-gradient(
      circle at top right,
      rgba(201, 162, 39, 0.12),
      transparent 35%
    ),
    #f7f5ee;

  direction: rtl;
}

/* =====================================
   عنوان الصفحة
===================================== */

.page-header {
  text-align: center;

  margin-bottom: 40px;

  .assistant-icon {
    width: 75px;

    height: 75px;

    margin: 0 auto 15px;

    border-radius: 22px;

    background: #1b5e45;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 36px;

    box-shadow: 0 10px 25px rgba(27, 94, 69, 0.18);
  }

  p {
    color: #c9a227;

    font-size: 14px;

    font-weight: 700;

    margin-bottom: 8px;
  }

  h1 {
    color: #1b5e45;

    font-size: 38px;

    margin: 0 0 10px;

    font-weight: 800;
  }

  span {
    color: #777;

    font-size: 14px;
  }
}

/* =====================================
   صندوق البحث
===================================== */

.assistant-box {
  max-width: 950px;

  margin: 0 auto 30px;

  background: rgba(255, 255, 255, 0.82);

  border: 1px solid rgba(27, 94, 69, 0.08);

  border-radius: 25px;

  padding: 30px;

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.08);

  backdrop-filter: blur(10px);
}

.box-title {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 25px;

  .title-icon {
    width: 52px;

    height: 52px;

    border-radius: 16px;

    background: #e8f2ed;

    color: #1b5e45;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 24px;
  }

  h2 {
    color: #1b5e45;

    font-size: 21px;

    margin: 0 0 4px;
  }

  p {
    color: #888;

    font-size: 13px;

    margin: 0;
  }
}

/* =====================================
   البحث
===================================== */

.search-area {
  display: flex;

  gap: 12px;
}

.search-area input {
  flex: 1;

  padding: 15px 18px;

  border: 1px solid #ddd;

  border-radius: 14px;

  outline: none;

  font-family: "Cairo", sans-serif;

  font-size: 13px;

  direction: rtl;

  transition: 0.3s;
}

.search-area input:focus {
  border-color: #1b5e45;

  box-shadow: 0 0 0 3px rgba(27, 94, 69, 0.08);
}

.search-area button {
  border: none;

  background: #1b5e45;

  color: white;

  padding: 0 22px;

  border-radius: 14px;

  font-family: "Cairo", sans-serif;

  font-size: 13px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s;
}

.search-area button:hover {
  background: #c9a227;

  transform: translateY(-2px);
}

.search-area button span {
  margin-right: 7px;
}

/* =====================================
   الأمثلة
===================================== */

.examples {
  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 18px;
}

.examples > span {
  color: #999;

  font-size: 12px;

  margin-left: 3px;
}

.examples button {
  border: 1px solid #e4e4e4;

  background: #fafaf7;

  color: #555;

  padding: 7px 12px;

  border-radius: 20px;

  font-family: "Cairo", sans-serif;

  font-size: 11px;

  cursor: pointer;

  transition: 0.3s;
}

.examples button:hover {
  border-color: #c9a227;

  color: #1b5e45;

  background: #fffdf3;
}

/* =====================================
   نتيجة البحث
===================================== */

.result-card {
  max-width: 950px;
  margin: 0 auto 30px;

  background: white;

  border-radius: 25px;

  padding: 30px;

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.09);

  border: 1px solid rgba(27, 94, 69, 0.08);

  animation: resultAppear 0.4s ease;
}

@keyframes resultAppear {
  from {
    opacity: 0;

    transform: translateY(10px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }
}

.result-header {
  display: flex;

  align-items: center;

  gap: 18px;

  padding-bottom: 25px;

  border-bottom: 1px solid #eeeeee;
}

.result-icon {
  width: 68px;

  height: 68px;

  min-width: 68px;

  border-radius: 20px;

  background: #1b5e45;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 32px;
}

.result-label {
  display: block;

  color: #c9a227;

  font-size: 12px;

  font-weight: 700;

  margin-bottom: 5px;
}

.result-header h2 {
  color: #1b5e45;

  font-size: 24px;

  margin: 0 0 5px;
}

.result-header p {
  color: #777;

  font-size: 13px;

  margin: 0;
}

/* =====================================
   محتوى النتيجة
===================================== */

.result-content {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 25px;

  padding: 28px 0;
}

.info-section {
  background: #fafaf7;

  border-radius: 16px;

  padding: 20px;
}

.info-section h3 {
  color: #1b5e45;

  font-size: 15px;

  margin: 0 0 15px;
}

.info-section ul {
  margin: 0;

  padding-right: 20px;

  color: #666;

  font-size: 13px;

  line-height: 2;
}

/* =====================================
   الخطوات
===================================== */

.steps {
  display: flex;

  flex-direction: column;

  gap: 12px;
}

.step {
  display: flex;

  align-items: center;

  gap: 10px;

  color: #666;

  font-size: 13px;
}

.step-number {
  width: 28px;

  height: 28px;

  min-width: 28px;

  border-radius: 50%;

  background: #e8f2ed;

  color: #1b5e45;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 12px;

  font-weight: 700;
}

/* =====================================
   أزرار النتيجة
===================================== */

.result-actions {
  display: flex;

  justify-content: center;

  gap: 12px;
}

.service-btn,
.appointment-btn {
  border: none;

  padding: 13px 22px;

  border-radius: 13px;

  font-family: "Cairo", sans-serif;

  font-size: 13px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s;
}

.service-btn {
  background: #1b5e45;

  color: white;
}

.service-btn:hover {
  background: #c9a227;

  transform: translateY(-2px);
}

.appointment-btn {
  background: #f1e7b8;

  color: #1b5e45;
}

.appointment-btn:hover {
  background: #c9a227;

  color: white;

  transform: translateY(-2px);
}

/* =====================================
   لا توجد نتيجة
===================================== */

.no-result {
  max-width: 700px;

  margin: 0 auto 30px;

  text-align: center;

  background: white;

  border-radius: 22px;

  padding: 40px 25px;

  box-shadow: 0 15px 35px rgba(27, 94, 69, 0.07);
}

.no-result div {
  font-size: 45px;

  margin-bottom: 10px;
}

.no-result h2 {
  color: #1b5e45;

  font-size: 20px;

  margin-bottom: 8px;
}

.no-result p {
  color: #888;

  font-size: 13px;

  margin: 0;
}

/* =====================================
   النصائح
===================================== */

.tips {
  max-width: 950px;

  margin: auto;

  text-align: center;

  padding: 25px;

  color: #777;
}

.tips h2 {
  color: #1b5e45;

  font-size: 18px;

  margin-bottom: 8px;
}

.tips p {
  font-size: 13px;

  margin-bottom: 18px;
}

.tip-examples {
  display: flex;

  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;
}

.tip-examples span {
  background: #e8f2ed;

  color: #1b5e45;

  padding: 8px 15px;

  border-radius: 20px;

  font-size: 11px;
}

/* =====================================
   Responsive
===================================== */

@media (max-width: 700px) {
  .assistant-page {
    padding: 45px 5% 60px;
  }
  .page-header h1 {
    font-size: 30px;
  }

  .assistant-box,
  .result-card {
    padding: 22px;
  }

  .search-area {
    flex-direction: column;
  }

  .search-area button {
    padding: 13px;
  }

  .result-content {
    grid-template-columns: 1fr;
  }

  .result-header {
    align-items: flex-start;
  }

  .result-icon {
    width: 55px;

    height: 55px;

    min-width: 55px;

    font-size: 26px;
  }

  .result-header h2 {
    font-size: 19px;
  }

  .result-actions {
    flex-direction: column;
  }

  .service-btn,
  .appointment-btn {
    width: 100%;
  }
}
</style>
