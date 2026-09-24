import { ref } from "vue";
import { defineStore } from "pinia";

/* =====================================
   شكل الطلب
===================================== */

export interface Request {
  id: string;
  service: string;
  serviceId: string;
  requestType: string;
  fullName: string;
  nationalId: string;
  phone: string;
  notes: string;
  status: string;
  statusClass: string;
  progress: number;
  date: string;
}

/* =====================================
   Requests Store
===================================== */

export const useRequestStore = defineStore("requests", () => {
  /* =====================================
     قائمة الطلبات
  ====================================== */

  const requests = ref<Request[]>([]);

  /* =====================================
     تحميل الطلبات
  ====================================== */

  function loadRequests(): void {
    const savedRequests: Request[] = JSON.parse(
      localStorage.getItem("requests") || "[]"
    );

    requests.value = savedRequests;
  }

  /* =====================================
     إضافة طلب جديد
  ====================================== */

  function addRequest(request: Request): void {
    requests.value.push(request);

    localStorage.setItem("requests", JSON.stringify(requests.value));
  }

  /* =====================================
     حذف طلب
  ====================================== */

  function deleteRequest(id: string): void {
    requests.value = requests.value.filter((request) => request.id !== id);

    localStorage.setItem("requests", JSON.stringify(requests.value));
  }

  /* =====================================
     البحث عن طلب
  ====================================== */

  function getRequestById(id: string): Request | undefined {
    return requests.value.find((request) => request.id === id);
  }

  return {
    requests,
    loadRequests,
    addRequest,
    deleteRequest,
    getRequestById,
  };
});
