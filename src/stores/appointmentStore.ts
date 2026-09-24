import { ref } from "vue";
import { defineStore } from "pinia";

/* =====================================
   شكل الموعد
===================================== */

export interface Appointment {
  id: string;
  service: string;
  department: string;
  date: string;
  time: string;
  notes: string;
  status: string;
}

/* =====================================
   Appointment Store
===================================== */

export const useAppointmentStore = defineStore("appointments", () => {
  /* =====================================
       قائمة المواعيد
    ===================================== */

  const appointments = ref<Appointment[]>([]);

  /* =====================================
       تحميل المواعيد
    ===================================== */

  function loadAppointments(): void {
    const savedAppointments: Appointment[] = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );

    appointments.value = savedAppointments;
  }

  /* =====================================
       إضافة موعد
    ===================================== */

  function addAppointment(appointment: Appointment): void {
    appointments.value.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(appointments.value));
  }

  /* =====================================
       حذف موعد
    ===================================== */

  function deleteAppointment(id: string): void {
    appointments.value = appointments.value.filter(
      (appointment) => appointment.id !== id
    );

    localStorage.setItem("appointments", JSON.stringify(appointments.value));
  }

  /* =====================================
       البحث عن موعد
    ===================================== */

  function getAppointmentById(id: string): Appointment | undefined {
    return appointments.value.find((appointment) => appointment.id === id);
  }

  /* =====================================
       إرجاع البيانات والدوال
    ===================================== */

  return {
    appointments,
    loadAppointments,
    addAppointment,
    deleteAppointment,
    getAppointmentById,
  };
});
