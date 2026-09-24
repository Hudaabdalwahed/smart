<template>
  <div class="request-details-page">
    <!-- العنوان -->
    <div class="page-header">
      <p>تفاصيل المعاملة</p>
      <h1>تفاصيل الطلب</h1>
      <span> يمكنك الاطلاع على جميع معلومات طلبك وحالته الحالية </span>
    </div>

    <!-- إذا الطلب موجود -->
    <div v-if="request" class="details-container">
      <!-- معلومات أساسية -->
      <div class="top-card">
        <div class="request-info">
          <span class="label">رقم الطلب</span>
          <h2>{{ request.id }}</h2>
        </div>

        <div class="status" :class="request.statusClass">
          {{ request.status }}
        </div>
      </div>

      <!-- نسبة الإنجاز -->
      <div class="progress-card">
        <div class="progress-header">
          <span>نسبة إنجاز الطلب</span>
          <strong>{{ request.progress }}%</strong>
        </div>

        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: request.progress + '%' }"
          ></div>
        </div>
      </div>

      <!-- معلومات الخدمة -->
      <div class="section-card">
        <div class="section-title">
          <h3>معلومات الخدمة</h3>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <span>الخدمة</span>
            <strong>{{ request.service }}</strong>
          </div>

          <div class="info-item">
            <span>نوع المعاملة</span>
            <strong>
              {{ request.requestType || "غير محدد" }}
            </strong>
          </div>

          <div class="info-item">
            <span>تاريخ تقديم الطلب</span>
            <strong>{{ request.date }}</strong>
          </div>
        </div>
      </div>

      <!-- بيانات المواطن -->
      <div class="section-card">
        <div class="section-title">
          <h3>بيانات المواطن</h3>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <span>الاسم الكامل</span>
            <strong>{{ request.fullName }}</strong>
          </div>

          <div class="info-item">
            <span>الرقم الوطني</span>
            <strong>{{ request.nationalId }}</strong>
          </div>

          <div class="info-item">
            <span>رقم الهاتف</span>
            <strong>{{ request.phone }}</strong>
          </div>
        </div>
      </div>

      <!-- الملاحظات -->
      <div v-if="request.notes" class="notes-card">
        <div class="section-title">
          <h3>ملاحظات الطلب</h3>
        </div>

        <p>{{ request.notes }}</p>
      </div>

      <!-- زر العودة -->
      <button class="back-btn" @click="goBack">
        <span>→</span>
        العودة إلى طلباتي
      </button>
    </div>

    <!-- إذا الطلب غير موجود -->
    <div v-else class="not-found">
      <h2>الطلب غير موجود</h2>

      <p>عذراً، لم نتمكن من العثور على تفاصيل هذا الطلب.</p>

      <button class="back-btn" @click="goBack">العودة إلى طلباتي</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useRequestStore } from "../stores/requestStore";
import type { Request } from "../stores/requestStore";

/* =====================================
   Router
===================================== */

const route = useRoute();
const router = useRouter();

/* =====================================
   Pinia Store
===================================== */

const requestStore = useRequestStore();

/* =====================================
   الطلب الحالي
===================================== */

const request = ref<Request | null>(null);

/* =====================================
   تحميل الطلب
===================================== */

function loadRequest(): void {
  const requestId = route.params.id as string;

  request.value = requestStore.getRequestById(requestId) || null;
}

/* =====================================
   العودة إلى طلباتي
===================================== */

function goBack(): void {
  router.push({
    name: "my-requests",
  });
}

/* =====================================
   تحميل البيانات عند فتح الصفحة
===================================== */

requestStore.loadRequests();

loadRequest();
</script>

<style scoped>
.request-details-page {
  min-height: 100vh;
  padding: 70px 20px;
  direction: rtl;

  background: radial-gradient(
      circle at 10% 20%,
      rgba(201, 162, 39, 0.14),
      transparent 25%
    ),
    radial-gradient(circle at 90% 80%, rgba(27, 94, 69, 0.14), transparent 30%),
    linear-gradient(135deg, #edf7f0, #f7f3df, #e6f2eb);
}

/* العنوان */

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header p {
  color: #b08a16;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.page-header h1 {
  color: #1b5e45;
  font-size: 34px;
  margin: 0 0 10px;
}

.page-header span {
  color: #68756e;
  font-size: 15px;
}

/* الحاوية */

.details-container {
  max-width: 950px;
  margin: auto;
}

/* البطاقة العلوية */

.top-card {
  background: rgba(255, 255, 255, 0.88);
  border-radius: 20px;
  padding: 25px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 12px 35px rgba(27, 94, 69, 0.1);

  margin-bottom: 20px;
}

.request-info .label {
  display: block;
  color: #78847d;
  font-size: 13px;
  margin-bottom: 7px;
}

.request-info h2 {
  color: #1b5e45;
  margin: 0;
  font-size: 22px;
}

/* الحالة */

.status {
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
}

.status.pending {
  background: #fff4cf;
  color: #9a7610;
}

.status.completed {
  background: #dff3e8;
  color: #1b6b4b;
}

/* نسبة الإنجاز */

.progress-card {
  background: rgba(255, 255, 255, 0.88);
  padding: 25px 30px;
  border-radius: 20px;

  margin-bottom: 20px;

  box-shadow: 0 12px 35px rgba(27, 94, 69, 0.08);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  color: #59665f;
  font-size: 14px;
}

.progress-header strong {
  color: #1b5e45;
}

.progress-bar {
  width: 100%;
  height: 10px;

  background: #e3ebe6;
  border-radius: 20px;

  overflow: hidden;
}

.progress-fill {
  height: 100%;

  background: linear-gradient(90deg, #1b5e45, #c9a227);

  border-radius: 20px;

  transition: width 0.5s ease;
}

/* البطاقات */

.section-card,
.notes-card {
  background: rgba(255, 255, 255, 0.88);

  border-radius: 20px;

  padding: 28px 30px;

  margin-bottom: 20px;

  box-shadow: 0 12px 35px rgba(27, 94, 69, 0.08);
}

/* عنوان القسم */

.section-title {
  border-right: 4px solid #c9a227;

  padding-right: 12px;

  margin-bottom: 25px;
}

.section-title h3 {
  margin: 0;

  color: #1b5e45;

  font-size: 19px;
}

/* المعلومات */

.info-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;
}

.info-item {
  background: #f5f8f5;

  border-radius: 14px;

  padding: 18px;
}

.info-item span {
  display: block;

  color: #7a857f;

  font-size: 13px;

  margin-bottom: 8px;
}

.info-item strong {
  color: #294d3e;

  font-size: 15px;
}

/* الملاحظات */

.notes-card p {
  color: #59665f;

  line-height: 1.8;

  margin: 0;
}

/* زر العودة */

.back-btn {
  display: block;

  margin: 30px auto 0;

  border: none;

  background: #1b5e45;

  color: white;

  padding: 13px 25px;

  border-radius: 30px;

  font-size: 14px;

  cursor: pointer;

  transition: 0.3s;
}

.back-btn span {
  margin-left: 8px;
}

.back-btn:hover {
  background: #144936;

  transform: translateY(-2px);
}

/* الطلب غير موجود */

.not-found {
  max-width: 600px;

  margin: 80px auto;

  text-align: center;

  background: rgba(255, 255, 255, 0.9);

  padding: 50px 30px;

  border-radius: 25px;

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.1);
}

.not-found h2 {
  color: #1b5e45;

  margin-bottom: 10px;
}

.not-found p {
  color: #68756e;
}

/* Responsive */

@media (max-width: 700px) {
  .request-details-page {
    padding: 45px 15px;
  }

  .page-header h1 {
    font-size: 28px;
  }

  .top-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
