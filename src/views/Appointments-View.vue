<template>
  <main class="appointments-page">
    <!-- =====================================
         عنوان الصفحة
    ====================================== -->

    <section class="page-header">
      <p>بوابة المواطن الذكية</p>

      <h1>مواعيدي</h1>

      <span> يمكنك حجز ومتابعة مواعيدك الحكومية بسهولة </span>
    </section>

    <!-- =====================================
         رسالة نجاح الحجز
    ====================================== -->

    <div v-if="successMessage" class="success-message">
      <div class="success-icon">✓</div>

      <div>
        <strong>{{ successMessage }}</strong>

        <p>تم إضافة الموعد إلى قائمة مواعيدك القادمة.</p>
      </div>
    </div>

    <!-- =====================================
         محتوى الصفحة
    ====================================== -->

    <section class="appointments-content">
      <!-- =====================================
           بطاقة حجز موعد
      ====================================== -->

      <div class="booking-card">
        <div class="card-title">
          <div class="title-icon">📅</div>

          <div>
            <h2>حجز موعد جديد</h2>

            <p>اختر الخدمة والتاريخ والوقت المناسب لك</p>
          </div>
        </div>

        <!-- نموذج الحجز -->

        <form @submit.prevent="bookAppointment">
          <!-- الخدمة -->

          <div class="input-group">
            <label> الخدمة </label>

            <select v-model="form.service" required>
              <option value="">اختر الخدمة</option>

              <option value="real-estate">الخدمات العقارية</option>

              <option value="vehicles">خدمات المركبات</option>

              <option value="documents">الوثائق الرسمية</option>

              <option value="education">الخدمات التعليمية</option>
            </select>
          </div>

          <!-- الجهة -->

          <div class="input-group">
            <label> الجهة </label>

            <select v-model="form.department" required>
              <option value="">اختر الجهة</option>

              <option value="real-estate-office">المديرية العقارية</option>

              <option value="traffic">مديرية النقل</option>

              <option value="civil-registry">الأحوال المدنية</option>

              <option value="education-office">مديرية التربية</option>
            </select>
          </div>

          <!-- التاريخ والوقت -->

          <div class="form-row">
            <!-- التاريخ -->

            <div class="input-group">
              <label> التاريخ </label>

              <input v-model="form.date" type="date" required />
            </div>

            <!-- الوقت -->

            <div class="input-group">
              <label> الوقت </label>

              <select v-model="form.time" required>
                <option value="">اختر الوقت</option>

                <option value="09:00">09:00 صباحاً</option>

                <option value="10:00">10:00 صباحاً</option>

                <option value="11:00">11:00 صباحاً</option>

                <option value="12:00">12:00 ظهراً</option>
                [9/23/2026 12:43 AM] Huda Abdalwahed:
                <option value="13:00">01:00 ظهراً</option>
              </select>
            </div>
          </div>

          <!-- الملاحظات -->

          <div class="input-group">
            <label> ملاحظات إضافية </label>

            <textarea
              v-model="form.notes"
              placeholder="اكتب أي ملاحظات إضافية..."
              rows="4"
            ></textarea>
          </div>

          <!-- زر الحجز -->

          <button type="submit" class="book-btn">
            تأكيد حجز الموعد

            <span> ← </span>
          </button>
        </form>
      </div>

      <!-- =====================================
           المواعيد القادمة
      ====================================== -->

      <div class="appointments-list">
        <div class="list-header">
          <h2>مواعيدي القادمة</h2>

          <span> {{ appointments.length }} موعد </span>
        </div>

        <!-- لا يوجد مواعيد -->

        <div v-if="appointments.length === 0" class="empty-state">
          <div class="empty-icon">📅</div>

          <h3>لا توجد مواعيد حالياً</h3>

          <p>لم تقم بحجز أي موعد بعد.</p>
        </div>

        <!-- يوجد مواعيد -->

        <div
          v-else
          v-for="appointment in appointments"
          :key="appointment.id"
          class="appointment-card"
          @click="viewAppointment(appointment.id)"
        >
          <div class="appointment-info">
            <!-- حالة الموعد -->

            <span class="appointment-status">
              {{ appointment.status }}
            </span>

            <!-- الخدمة -->

            <h3>
              {{ appointment.service }}
            </h3>

            <!-- الجهة -->

            <p>📍 {{ appointment.department }}</p>

            <!-- التاريخ والوقت -->

            <div class="appointment-details">
              <span> 📅 {{ appointment.date }} </span>

              <span> 🕐 {{ appointment.time }} </span>
            </div>

            <!-- رقم الموعد -->

            <small class="appointment-id">
              رقم الموعد:
              {{ appointment.id }}
            </small>
          </div>

          <!-- إلغاء الموعد -->

          <button class="cancel-btn" @click="cancelAppointment(appointment.id)">
            إلغاء الموعد
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AppointmentsView",

  data() {
    return {
      /* =====================================
         بيانات نموذج الحجز
      ====================================== */

      form: {
        service: "",
        department: "",
        date: "",
        time: "",
        notes: "",
      },

      /* =====================================
         قائمة المواعيد
      ====================================== */

      appointments: [],

      /* =====================================
         رسالة النجاح
      ====================================== */

      successMessage: "",
    };
  },

  /* =====================================
     عند فتح الصفحة
  ====================================== */

  created() {
    this.loadAppointments();
  },

  methods: {
    viewAppointment(id) {
      this.$router.push({
        name: "appointment-details",
        params: {
          id: id,
        },
      });
    },
    /* =====================================
       تحميل المواعيد من LocalStorage
    ====================================== */

    loadAppointments() {
      this.appointments =
        JSON.parse(localStorage.getItem("appointments")) || [];
    },

    /* =====================================
       حجز موعد جديد
    ====================================== */

    bookAppointment() {
      const newAppointment = {
        id: "APP-" + Date.now(),
        service: this.getServiceName(this.form.service),

        department: this.getDepartmentName(this.form.department),

        date: this.form.date,

        time: this.form.time,

        notes: this.form.notes,

        status: "موعد مؤكد",
      };

      /* إضافة الموعد للقائمة */

      this.appointments.push(newAppointment);

      /* حفظ المواعيد */

      localStorage.setItem("appointments", JSON.stringify(this.appointments));

      /* رسالة النجاح */

      this.successMessage = "تم حجز موعدك بنجاح 🎉";

      /* تفريغ النموذج */

      this.form = {
        service: "",

        department: "",

        date: "",

        time: "",

        notes: "",
      };

      /* إخفاء الرسالة بعد 4 ثواني */

      setTimeout(() => {
        this.successMessage = "";
      }, 4000);
    },

    /* =====================================
       إلغاء الموعد
    ====================================== */

    cancelAppointment(id) {
      const confirmed = confirm("هل أنت متأكد من إلغاء الموعد؟");

      if (!confirmed) {
        return;
      }

      this.appointments = this.appointments.filter(
        (appointment) => appointment.id !== id
      );

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    },

    /* =====================================
       تحويل ID الخدمة إلى اسم
    ====================================== */

    getServiceName(service) {
      const services = {
        "real-estate": "الخدمات العقارية",

        vehicles: "خدمات المركبات",

        documents: "الوثائق الرسمية",

        education: "الخدمات التعليمية",
      };

      return services[service];
    },

    /* =====================================
       تحويل ID الجهة إلى اسم
    ====================================== */

    getDepartmentName(department) {
      const departments = {
        "real-estate-office": "المديرية العقارية",

        traffic: "مديرية النقل",

        "civil-registry": "الأحوال المدنية",

        "education-office": "مديرية التربية",
      };

      return departments[department];
    },
  },
};
</script>

<style lang="scss" scoped>
/* =====================================
   الصفحة
===================================== */

.appointments-page {
  min-height: 100vh;

  padding: 70px 7%;

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

  margin-bottom: 50px;

  p {
    color: #c9a227;

    font-size: 14px;

    font-weight: 700;

    margin-bottom: 8px;
  }

  h1 {
    color: #1b5e45;

    font-size: 38px;

    margin: 0 0 12px;

    font-weight: 800;
  }

  span {
    color: #777;

    font-size: 15px;
  }
}

/* =====================================
   رسالة نجاح الحجز
===================================== */

.success-message {
  max-width: 1100px;

  margin: 0 auto 25px;

  padding: 18px 22px;

  background: #edf7f1;

  border: 1px solid #b9ddc8;

  border-radius: 18px;

  display: flex;

  align-items: center;

  gap: 15px;

  color: #1b5e45;

  animation: slideDown 0.4s ease;

  .success-icon {
    width: 42px;

    height: 42px;

    min-width: 42px;

    border-radius: 50%;

    background: #1b5e45;

    color: white;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 22px;

    font-weight: 700;
  }

  strong {
    display: block;

    font-size: 15px;

    margin-bottom: 3px;
  }

  p {
    margin: 0;

    color: #6d8277;

    font-size: 12px;
  }
}

/* =====================================
   Animation
===================================== */

@keyframes slideDown {
  from {
    opacity: 0;

    transform: translateY(-10px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }
}

/* =====================================
   المحتوى
===================================== */

.appointments-content {
  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 30px;

  align-items: start;
}

/* =====================================
   بطاقات الصفحة
===================================== */

.booking-card,
.appointments-list {
  background: rgba(255, 255, 255, 0.75);

  border-radius: 25px;

  padding: 30px;

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.08);

  border: 1px solid rgba(27, 94, 69, 0.08);

  backdrop-filter: blur(10px);
}

/* =====================================
   عنوان بطاقة الحجز
===================================== */

.card-title {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 30px;

  .title-icon {
    width: 52px;

    height: 52px;

    border-radius: 16px;

    background: #1b5e45;

    color: white;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 24px;
  }

  h2 {
    margin: 0;

    color: #1b5e45;

    font-size: 22px;
  }

  p {
    margin: 5px 0 0;

    color: #888;

    font-size: 13px;
  }
}

/* =====================================
   الحقول
===================================== */

.input-group {
  margin-bottom: 20px;

  label {
    display: block;

    margin-bottom: 8px;

    color: #1b5e45;

    font-size: 14px;

    font-weight: 700;
  }

  input,
  select,
  textarea {
    width: 100%;

    box-sizing: border-box;

    padding: 13px 15px;

    border: 1px solid #ddd;

    border-radius: 12px;

    background: white;

    font-family: "Cairo", sans-serif;

    font-size: 13px;

    outline: none;

    transition: 0.3s;

    direction: rtl;

    &:focus {
      border-color: #1b5e45;

      box-shadow: 0 0 0 3px rgba(27, 94, 69, 0.08);
    }
  }

  textarea {
    resize: vertical;
  }
}

/* =====================================
   التاريخ والوقت
===================================== */

.form-row {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 15px;
}

/* =====================================
   زر الحجز
===================================== */

.book-btn {
  width: 100%;

  border: none;

  background: #1b5e45;

  color: white;

  padding: 14px;

  border-radius: 14px;

  font-family: "Cairo", sans-serif;

  font-size: 14px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s;

  span {
    margin-right: 8px;
  }

  &:hover {
    background: #c9a227;

    transform: translateY(-2px);
  }
}

/* =====================================
   قائمة المواعيد
===================================== */

.list-header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;

  h2 {
    color: #1b5e45;

    font-size: 22px;

    margin: 0;
  }

  span {
    background: #f1e7b8;

    color: #1b5e45;

    padding: 5px 12px;

    border-radius: 20px;

    font-size: 12px;

    font-weight: 700;
  }
}

/* =====================================
   الحالة الفارغة
===================================== */

.empty-state {
  text-align: center;

  padding: 50px 20px;

  .empty-icon {
    font-size: 45px;

    margin-bottom: 15px;
  }

  h3 {
    color: #1b5e45;

    margin-bottom: 8px;
  }

  p {
    color: #999;

    font-size: 13px;
  }
}

/* =====================================
   بطاقة الموعد
===================================== */

.appointment-card {
  border: 1px solid #e5e5e5;

  border-radius: 18px;

  padding: 20px;

  margin-bottom: 15px;

  transition: 0.3s;

  &:hover {
    border-color: #c9a227;

    transform: translateY(-2px);
  }
}

/* =====================================
   حالة الموعد
===================================== */

.appointment-status {
  display: inline-block;

  background: #e8f2ed;

  color: #1b5e45;
  padding: 5px 10px;

  border-radius: 20px;

  font-size: 11px;

  font-weight: 700;

  margin-bottom: 10px;
}

/* =====================================
   معلومات الموعد
===================================== */

.appointment-info {
  h3 {
    color: #1b5e45;

    margin: 0 0 8px;

    font-size: 17px;
  }

  p {
    color: #777;

    font-size: 13px;

    margin-bottom: 12px;
  }
}

/* =====================================
   التاريخ والوقت
===================================== */

.appointment-details {
  display: flex;

  gap: 20px;

  color: #555;

  font-size: 12px;

  margin-bottom: 12px;
}

/* =====================================
   رقم الموعد
===================================== */

.appointment-id {
  display: block;

  color: #999;

  font-size: 11px;

  margin-top: 5px;
}

/* =====================================
   إلغاء الموعد
===================================== */

.cancel-btn {
  border: none;

  background: #f6eeee;

  color: #a94442;

  padding: 8px 15px;

  border-radius: 10px;

  font-family: "Cairo", sans-serif;

  font-size: 12px;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #a94442;

    color: white;
  }
}
.appointment-card {
  cursor: pointer;
}

/* =====================================
   Responsive
===================================== */

@media (max-width: 850px) {
  .appointments-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .appointments-page {
    padding: 45px 5%;
  }

  .page-header {
    h1 {
      font-size: 30px;
    }
  }

  .booking-card,
  .appointments-list {
    padding: 22px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .appointment-details {
    flex-direction: column;

    gap: 6px;
  }

  .success-message {
    align-items: flex-start;

    padding: 15px;
  }
}
</style>
