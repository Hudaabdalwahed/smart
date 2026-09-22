<template>
  <main class="appointment-details-page">
    <!-- زر العودة -->
    <button class="back-btn" @click="$router.push('/appointments')">
      → العودة إلى مواعيدي
    </button>

    <!-- إذا وجد الموعد -->
    <section v-if="appointment" class="details-container">
      <!-- العنوان -->
      <div class="page-header">
        <p>بوابة المواطن الذكية</p>

        <h1>تفاصيل الموعد</h1>

        <span> معلومات الموعد الذي قمت بحجزه </span>
      </div>

      <!-- بطاقة التفاصيل -->
      <div class="details-card">
        <!-- رأس البطاقة -->
        <div class="details-header">
          <div class="calendar-icon">📅</div>

          <div>
            <span class="status">
              {{ appointment.status }}
            </span>

            <h2>
              {{ appointment.service }}
            </h2>

            <p>
              {{ appointment.department }}
            </p>
          </div>
        </div>

        <!-- معلومات الموعد -->
        <div class="details-grid">
          <!-- التاريخ -->
          <div class="detail-item">
            <span class="detail-label"> التاريخ </span>

            <strong> 📅 {{ appointment.date }} </strong>
          </div>

          <!-- الوقت -->
          <div class="detail-item">
            <span class="detail-label"> الوقت </span>

            <strong> 🕐 {{ appointment.time }} </strong>
          </div>

          <!-- رقم الموعد -->
          <div class="detail-item">
            <span class="detail-label"> رقم الموعد </span>

            <strong>
              {{ appointment.id }}
            </strong>
          </div>

          <!-- الجهة -->
          <div class="detail-item">
            <span class="detail-label"> الجهة </span>

            <strong> 📍 {{ appointment.department }} </strong>
          </div>
        </div>

        <!-- الملاحظات -->
        <div v-if="appointment.notes" class="notes-section">
          <h3>الملاحظات</h3>

          <p>
            {{ appointment.notes }}
          </p>
        </div>

        <!-- الأزرار -->
        <div class="actions">
          <button class="cancel-btn" @click="cancelAppointment">
            إلغاء الموعد
          </button>

          <button class="back-main-btn" @click="$router.push('/appointments')">
            العودة إلى مواعيدي
          </button>
        </div>
      </div>
    </section>

    <!-- إذا لم يوجد الموعد -->
    <section v-else class="not-found">
      <div class="not-found-icon">📅</div>

      <h2>الموعد غير موجود</h2>

      <p>لم نتمكن من العثور على هذا الموعد.</p>

      <button class="back-main-btn" @click="$router.push('/appointments')">
        العودة إلى مواعيدي
      </button>
    </section>
  </main>
</template>

<script>
export default {
  name: "AppointmentDetailsView",

  data() {
    return {
      appointment: null,
    };
  },

  created() {
    this.loadAppointment();
  },

  methods: {
    /* =====================================
       تحميل الموعد
    ====================================== */

    loadAppointment() {
      const appointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

      const appointmentId = this.$route.params.id;

      this.appointment = appointments.find(
        (appointment) => appointment.id === appointmentId
      );
    },

    /* =====================================
       إلغاء الموعد
    ====================================== */

    cancelAppointment() {
      const confirmed = confirm("هل أنت متأكد من إلغاء هذا الموعد؟");

      if (!confirmed) {
        return;
      }

      let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

      appointments = appointments.filter(
        (appointment) => appointment.id !== this.appointment.id
      );

      localStorage.setItem("appointments", JSON.stringify(appointments));

      alert("تم إلغاء الموعد بنجاح");

      this.$router.push("/appointments");
    },
  },
};
</script>

<style lang="scss" scoped>
.appointment-details-page {
  min-height: 100vh;

  padding: 45px 7% 80px;

  background: radial-gradient(
      circle at top right,
      rgba(201, 162, 39, 0.12),
      transparent 35%
    ),
    #f7f5ee;

  direction: rtl;
}

/* =====================================
   زر العودة
===================================== */

.back-btn {
  border: none;

  background: transparent;

  color: #1b5e45;

  font-family: "Cairo", sans-serif;

  font-size: 14px;

  font-weight: 700;

  cursor: pointer;

  margin-bottom: 30px;

  transition: 0.3s;

  &:hover {
    color: #c9a227;

    transform: translateX(4px);
  }
}

/* =====================================
   العنوان
===================================== */

.page-header {
  text-align: center;

  margin-bottom: 40px;

  p {
    color: #c9a227;

    font-size: 14px;

    font-weight: 700;

    margin-bottom: 8px;
  }

  h1 {
    color: #1b5e45;

    font-size: 36px;

    font-weight: 800;

    margin: 0 0 10px;
  }

  span {
    color: #777;

    font-size: 14px;
  }
}

/* =====================================
   بطاقة التفاصيل
===================================== */

.details-card {
  max-width: 850px;

  margin: auto;

  background: rgba(255, 255, 255, 0.82);

  border: 1px solid rgba(27, 94, 69, 0.08);

  border-radius: 28px;

  padding: 35px;

  box-shadow: 0 18px 45px rgba(27, 94, 69, 0.09);

  backdrop-filter: blur(10px);
}

/* =====================================
   رأس البطاقة
===================================== */

.details-header {
  display: flex;

  align-items: center;

  gap: 18px;

  padding-bottom: 28px;

  border-bottom: 1px solid #eeeeee;

  margin-bottom: 28px;
}

.calendar-icon {
  width: 70px;

  height: 70px;

  min-width: 70px;

  border-radius: 20px;

  background: #1b5e45;

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 32px;
}

.status {
  display: inline-block;

  background: #e8f2ed;

  color: #1b5e45;

  padding: 5px 12px;

  border-radius: 20px;

  font-size: 11px;

  font-weight: 700;

  margin-bottom: 8px;
}

.details-header h2 {
  color: #1b5e45;

  font-size: 23px;

  margin: 0 0 5px;
}

.details-header p {
  color: #777;

  font-size: 13px;

  margin: 0;
}

/* =====================================
   شبكة التفاصيل
===================================== */

.details-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 18px;

  margin-bottom: 28px;
}

.detail-item {
  background: #fafaf7;

  border: 1px solid #eeeeea;

  border-radius: 16px;

  padding: 18px;
}

.detail-label {
  display: block;

  color: #999;

  font-size: 12px;

  margin-bottom: 7px;
}

.detail-item strong {
  color: #1b5e45;

  font-size: 14px;
}

/* =====================================
   الملاحظات
===================================== */

.notes-section {
  background: rgba(201, 162, 39, 0.08);

  border-right: 4px solid #c9a227;

  border-radius: 12px;

  padding: 18px;

  margin-bottom: 28px;
}

.notes-section h3 {
  color: #1b5e45;

  font-size: 15px;

  margin: 0 0 8px;
}

.notes-section p {
  color: #666;

  font-size: 13px;

  line-height: 1.8;

  margin: 0;
}

/* =====================================
   الأزرار
===================================== */

.actions {
  display: flex;

  justify-content: center;

  gap: 15px;
  padding-top: 5px;
}

.cancel-btn,
.back-main-btn {
  border: none;

  padding: 12px 25px;

  border-radius: 13px;

  font-family: "Cairo", sans-serif;

  font-size: 13px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s;
}

.cancel-btn {
  background: #f6eeee;

  color: #a94442;

  &:hover {
    background: #a94442;

    color: white;
  }
}

.back-main-btn {
  background: #1b5e45;

  color: white;

  &:hover {
    background: #c9a227;

    transform: translateY(-2px);
  }
}

/* =====================================
   الموعد غير موجود
===================================== */

.not-found {
  max-width: 600px;

  margin: 80px auto;

  text-align: center;

  background: rgba(255, 255, 255, 0.8);

  border-radius: 25px;

  padding: 50px 30px;

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.08);
}

.not-found-icon {
  font-size: 55px;

  margin-bottom: 15px;
}

.not-found h2 {
  color: #1b5e45;

  margin-bottom: 10px;
}

.not-found p {
  color: #888;

  font-size: 13px;

  margin-bottom: 25px;
}

/* =====================================
   Responsive
===================================== */

@media (max-width: 650px) {
  .appointment-details-page {
    padding: 30px 5% 60px;
  }

  .page-header h1 {
    font-size: 30px;
  }

  .details-card {
    padding: 22px;

    border-radius: 22px;
  }

  .details-header {
    align-items: flex-start;
  }

  .calendar-icon {
    width: 55px;

    height: 55px;

    min-width: 55px;

    font-size: 25px;
  }

  .details-header h2 {
    font-size: 18px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .actions {
    flex-direction: column;
  }

  .cancel-btn,
  .back-main-btn {
    width: 100%;
  }
}
</style>
