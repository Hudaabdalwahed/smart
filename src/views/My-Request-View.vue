<template>
  <div class="requests-page">
    <!-- خلفيات زخرفية -->
    <div class="ambient ambient-green"></div>
    <div class="ambient ambient-gold"></div>

    <!-- رأس الصفحة -->
    <section class="page-header">
      <span class="page-badge"> متابعة المعاملات </span>

      <h1>طلباتي</h1>

      <p>يمكنك متابعة جميع طلباتك ومعرفة حالتها بسهولة</p>
    </section>

    <!-- إحصائيات الطلبات -->
    <section class="stats-container">
      <!-- إجمالي الطلبات -->
      <div class="stat-card">
        <div class="stat-icon">
          <img src="@/assets/images/requests.png" alt="الطلبات" />
        </div>

        <div>
          <strong>
            {{ totalCount }}
          </strong>

          <span> إجمالي الطلبات </span>
        </div>
      </div>

      <!-- قيد المراجعة -->
      <div class="stat-card">
        <div class="stat-icon pending">
          <img src="@/assets/images/pending.png" alt="قيد المراجعة" />
        </div>

        <div>
          <strong>
            {{ pendingCount }}
          </strong>

          <span> قيد المراجعة </span>
        </div>
      </div>

      <!-- مكتملة -->
      <div class="stat-card">
        <div class="stat-icon completed">
          <img src="@/assets/images/completed1.png" alt="طلبات مكتملة" />
        </div>

        <div>
          <strong>
            {{ completedCount }}
          </strong>

          <span> طلبات مكتملة </span>
        </div>
      </div>
    </section>

    <!-- الطلبات -->
    <section class="requests-container">
      <div class="section-title">
        <div>
          <span> المعاملات الخاصة بك </span>

          <h2>آخر الطلبات</h2>
        </div>

        <button class="filter-btn">
          جميع الطلبات
          <span> ⌄ </span>
        </button>
      </div>

      <!-- قائمة الطلبات -->
      <div class="requests-list">
        <div v-for="request in requests" :key="request.id" class="request-card">
          <!-- أعلى الكارد -->
          <div class="card-top">
            <div class="request-number">
              <span> رقم الطلب </span>

              <strong>
                {{ request.id }}
              </strong>
            </div>

            <span class="status" :class="request.statusClass">
              {{ request.status }}
            </span>
          </div>

          <!-- معلومات الطلب -->
          <div class="request-info">
            <div class="info-item">
              <span class="label"> الخدمة </span>

              <strong>
                {{ request.service }}
              </strong>
            </div>

            <div class="info-item">
              <span class="label"> نوع المعاملة </span>

              <strong>
                {{ request.requestType }}
              </strong>
            </div>

            <div class="info-item">
              <span class="label"> تاريخ التقديم </span>

              <strong>
                {{ request.date }}
              </strong>
            </div>
          </div>

          <!-- نسبة الإنجاز -->
          <div class="card-bottom">
            <div class="progress-area">
              <div class="progress-text">
                <span> نسبة الإنجاز </span>

                <strong> {{ request.progress }}% </strong>
              </div>

              <div class="progress-bar">
                <div
                  class="progress"
                  :style="{
                    width: request.progress + '%',
                  }"
                ></div>
              </div>
            </div>

            <button class="details-btn" @click="showDetials(request)">
              عرض التفاصيل
              <span> ← </span>
            </button>
          </div>
        </div>

        <!-- في حال ما في طلبات -->
        <div v-if="requests.length === 0" class="empty-state">
          <h3>لا يوجد لديك طلبات حالياً</h3>

          <p>عند إرسال طلب جديد سيظهر هنا.</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useRequestStore } from "../stores/requestStore";

const router = useRouter();

const requestStore = useRequestStore();

/* =====================================
   تحميل الطلبات
===================================== */

requestStore.loadRequests();

/* =====================================
   قائمة الطلبات
===================================== */

const requests = computed(() => {
  return requestStore.requests;
});

/* =====================================
   عدد كل الطلبات
===================================== */

const totalCount = computed(() => {
  return requests.value.length;
});

/* =====================================
   عدد الطلبات قيد المراجعة
===================================== */

const pendingCount = computed(() => {
  return requests.value.filter((request) => request.statusClass === "pending")
    .length;
});

/* =====================================
   عدد الطلبات المكتملة
===================================== */

const completedCount = computed(() => {
  return requests.value.filter((request) => request.statusClass === "completed")
    .length;
});

/* =====================================
   فتح تفاصيل الطلب
===================================== */

function showDetials(request: { id: string }): void {
  router.push({
    name: "request-details",
    params: {
      id: request.id,
    },
  });
}
</script>

<style lang="scss" scoped>
/* ===================================
   الصفحة الرئيسية
=================================== */

.requests-page {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  direction: rtl;

  padding-bottom: 100px;

  background: radial-gradient(
      circle at 90% 10%,
      rgba(201, 162, 39, 0.28),
      transparent 28%
    ),
    radial-gradient(circle at 10% 80%, rgba(27, 138, 97, 0.35), transparent 32%),
    linear-gradient(135deg, #d8eee1 0%, #edf7f0 38%, #f5f0dc 72%, #e2f1e8 100%);
}

/* ===================================
   الخلفيات الضبابية
=================================== */

.ambient {
  position: absolute;

  border-radius: 50%;

  filter: blur(80px);

  pointer-events: none;

  opacity: 0.8;
}

.ambient-green {
  width: 500px;

  height: 500px;

  background: radial-gradient(
    circle,
    rgba(27, 138, 97, 0.32),
    rgba(27, 94, 69, 0.08),
    transparent 70%
  );

  top: -180px;

  right: -150px;
}

.ambient-gold {
  width: 420px;

  height: 420px;

  background: radial-gradient(
    circle,
    rgba(201, 162, 39, 0.25),
    rgba(201, 162, 39, 0.05),
    transparent 70%
  );

  bottom: 0;

  left: -170px;
}

/* ===================================
   Header
=================================== */

.page-header {
  position: relative;

  z-index: 2;

  text-align: center;

  padding: 90px 20px 50px;
}

.page-badge {
  display: inline-block;

  padding: 8px 18px;

  border-radius: 30px;

  background: rgba(201, 162, 39, 0.18);

  color: #967714;

  font-size: 14px;

  font-weight: 700;

  margin-bottom: 15px;
}

.page-header h1 {
  margin: 0;

  color: #1b5e45;

  font-size: 46px;

  font-weight: 800;
}

.page-header p {
  margin-top: 15px;

  color: #526a5e;

  font-size: 17px;
}

/* ===================================
   الإحصائيات
=================================== */

.stats-container {
  position: relative;

  z-index: 2;

  width: 90%;

  max-width: 1100px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}

.stat-card {
  display: flex;

  align-items: center;

  gap: 18px;

  padding: 22px;

  border-radius: 22px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.72),
    rgba(232, 245, 237, 0.68)
  );

  backdrop-filter: blur(18px);

  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.85);

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.1);

  transition: 0.3s;
}

.stat-card:hover {
  transform: translateY(-6px);

  box-shadow: 0 22px 50px rgba(27, 94, 69, 0.15);
}

/* ===================================
   أيقونات الإحصائيات
=================================== */

.stat-icon {
  width: 58px;

  height: 58px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 17px;

  background: linear-gradient(135deg, #d9f0e2, #bfe4ce);
}

.stat-icon.pending {
  background: linear-gradient(135deg, #f8efd0, #ead99b);
}
.stat-icon.completed {
  background: linear-gradient(135deg, #d9f0e2, #b8dfca);
}

.stat-icon img {
  width: 50px;

  height: 50px;

  object-fit: contain;
}

.stat-card strong {
  display: block;

  color: #1b5e45;

  font-size: 25px;
}

.stat-card span {
  display: block;

  margin-top: 4px;

  color: #62776b;

  font-size: 13px;
}

/* ===================================
   عنوان الطلبات
=================================== */

.requests-container {
  position: relative;

  z-index: 2;

  width: 90%;

  max-width: 1100px;

  margin: 60px auto 0;
}

.section-title {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;
}

.section-title span {
  color: #a08318;

  font-size: 13px;

  font-weight: 700;
}

.section-title h2 {
  margin: 5px 0 0;

  color: #1b5e45;

  font-size: 28px;
}

/* ===================================
   زر الفلترة
=================================== */

.filter-btn {
  border: none;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.75),
    rgba(232, 245, 237, 0.75)
  );

  padding: 12px 18px;

  border-radius: 12px;

  color: #1b5e45;

  font-family: inherit;

  cursor: pointer;

  backdrop-filter: blur(10px);

  box-shadow: 0 8px 20px rgba(27, 94, 69, 0.08);
}

/* ===================================
   قائمة الطلبات
=================================== */

.requests-list {
  display: flex;

  flex-direction: column;

  gap: 18px;
}

/* ===================================
   Request Card
=================================== */

.request-card {
  padding: 25px;

  border-radius: 24px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.78),
    rgba(235, 247, 239, 0.7)
  );

  backdrop-filter: blur(18px);

  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.85);

  box-shadow: 0 15px 45px rgba(27, 94, 69, 0.1);

  transition: 0.3s;
}

.request-card:hover {
  transform: translateY(-4px);

  box-shadow: 0 22px 50px rgba(27, 94, 69, 0.15);
}

/* ===================================
   أعلى الكارد
=================================== */

.card-top {
  display: flex;

  align-items: center;

  justify-content: space-between;

  padding-bottom: 18px;

  border-bottom: 1px solid rgba(27, 94, 69, 0.1);
}

.request-number span {
  display: block;

  color: #7a8b82;

  font-size: 12px;

  margin-bottom: 5px;
}

.request-number strong {
  color: #1b5e45;

  font-size: 16px;
}

/* ===================================
   الحالات
=================================== */

.status {
  padding: 7px 14px;

  border-radius: 30px;

  font-size: 12px;

  font-weight: 700;
}

.status.pending {
  background: rgba(201, 162, 39, 0.18);

  color: #947612;
}

.status.completed {
  background: rgba(27, 138, 97, 0.15);

  color: #18764f;
}

.status.needs-edit {
  background: rgba(190, 75, 75, 0.12);

  color: #ad4949;
}

/* ===================================
   معلومات الطلب
=================================== */

.request-info {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;

  padding: 22px 0;
}

.info-item {
  display: flex;

  flex-direction: column;

  gap: 7px;
}

.info-item .label {
  color: #7c8c84;

  font-size: 12px;
}

.info-item strong {
  color: #334a40;

  font-size: 14px;
}

/* ===================================
   Progress
=================================== */

.card-bottom {
  display: flex;

  align-items: center;

  gap: 30px;

  padding-top: 18px;

  border-top: 1px solid rgba(27, 94, 69, 0.1);
}

.progress-area {
  flex: 1;
}

.progress-text {
  display: flex;

  justify-content: space-between;

  margin-bottom: 8px;
}

.progress-text span {
  color: #7c8c84;

  font-size: 12px;
}

.progress-text strong {
  color: #1b5e45;

  font-size: 12px;
}

.progress-bar {
  height: 8px;

  overflow: hidden;

  border-radius: 20px;

  background: #d7e7dd;
}

.progress {
  height: 100%;

  border-radius: 20px;

  background: linear-gradient(90deg, #1b5e45, #1b8a61, #4cae7f);

  transition: width 0.5s ease;
}
/* ===================================
   زر التفاصيل
=================================== */

.details-btn {
  border: none;

  padding: 12px 18px;

  border-radius: 12px;

  background: linear-gradient(135deg, #1b5e45, #1b8a61);

  color: white;

  font-family: inherit;

  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;
}

.details-btn:hover {
  transform: translateY(-2px);

  box-shadow: 0 10px 20px rgba(27, 94, 69, 0.2);
}

.details-btn span {
  margin-right: 7px;
}

/* ===================================
   لا يوجد طلبات
=================================== */

.empty-state {
  text-align: center;

  padding: 60px 20px;

  border-radius: 24px;

  background: rgba(255, 255, 255, 0.65);

  backdrop-filter: blur(15px);

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.08);
}

.empty-state h3 {
  color: #1b5e45;

  margin-bottom: 10px;
}

.empty-state p {
  color: #62776b;

  margin: 0;
}

/* ===================================
   Responsive
=================================== */

@media (max-width: 800px) {
  .stats-container {
    grid-template-columns: 1fr;
  }

  .request-info {
    grid-template-columns: 1fr;

    gap: 15px;
  }

  .card-bottom {
    flex-direction: column;

    align-items: stretch;
  }
}

@media (max-width: 600px) {
  .page-header {
    padding-top: 65px;
  }

  .page-header h1 {
    font-size: 34px;
  }

  .requests-container {
    width: 92%;
  }

  .section-title {
    align-items: flex-start;

    gap: 15px;
  }

  .section-title h2 {
    font-size: 23px;
  }

  .filter-btn {
    font-size: 12px;
  }
}
</style>
