<template>
  <nav class="navbar">
    <!-- الشعار -->
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="شعار بوابة المواطن" />
      <span>بوابة المواطن الذكية</span>
    </div>

    <!-- روابط النافبار -->
    <div class="nav-links">
      <router-link to="/">الرئيسية</router-link>
      <router-link to="/Services">الخدمات</router-link>
      <a href="#"> عن البوابة </a>
      <a href="#"> الأسئلة الشائعة </a>
      <a href="#"> تواصل معنا </a>
      <a href="#" class="login-btn"> تسجيل الدخول </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
/* =====================================
   Navbar (الأب الرئيسي)
===================================== */
.navbar {
  background-color: #1b5e45;
  padding: 14px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: rtl;
  box-shadow: 0 3px 15px rgba(27, 94, 69, 0.2);
  position: relative;
  z-index: 10;

  /* =====================================
     Logo (ابن داخل النافبار)
  ===================================== */
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 19px;
    font-weight: 700;
    img {
      width: 58px;
      height: 58px;
      object-fit: contain;
    }
  }

  /* =====================================
     روابط النافبار (ابن داخل النافبار)
  ===================================== */
  .nav-links {
    display: flex;
    align-items: center;
    gap: 28px;
    direction: rtl;

    a {
      color: white;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 3px;
      transition: all 0.3s ease;

      /* عند تمرير الماوس */
      &:hover {
        color: #c9a227;
      }

      /* زر تسجيل الدخول (ابن يمتلك كلاس مخصص) */
      &.login-btn {
        background-color: #c9a227;
        color: white;
        padding: 10px 22px;
        border-radius: 25px;
        border: 2px solid #c9a227;

        &:hover {
          background-color: white;
          color: #1b5e45;
        }
      }
    }
  }

  /* =====================================
     Responsive (تنسيقات الشاشات)
  ===================================== */
  @media (max-width: 900px) {
    padding: 12px 5%;

    .nav-links {
      gap: 15px;

      a {
        font-size: 13px;
      }
    }

    .logo {
      font-size: 16px;

      img {
        width: 48px;
        height: 48px;
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 15px;

    .nav-links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
