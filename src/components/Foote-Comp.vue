<template>
  <footer class="footer">
    <!-- القسم الرئيسي -->
    <div class="footer-content">
      <!-- الشعار والوصف -->
      <div class="footer-about">
        <div class="footer-logo">
          <img src="@/assets/images/logo.png" alt="شعار بوابة المواطن" />
          <h3>بوابة المواطن الذكية</h3>
        </div>

        <p>
          منصة إلكترونية تهدف إلى تسهيل الوصول إلى الخدمات الحكومية وإنجاز
          المعاملات بكل سهولة وأمان.
        </p>
      </div>

      <!-- تواصل معنا -->
      <div class="footer-contact">
        <h4>تواصل معنا</h4>
        <p>📍 حمص - سوريا</p>
        <p>📞 0000 000 000</p>
        <p>✉️ info@citizen-portal.com</p>
      </div>
    </div>

    <!-- الخط السفلي -->
    <div class="footer-bottom">
      <p>© 2026 بوابة المواطن الذكية - جميع الحقوق محفوظة</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* =========================================
   الفوتر (الأب الرئيسي)
========================================= */
.footer {
  background-color: #1b5e45;
  color: white;
  direction: rtl;
  margin-top: 0px;

  /* العناوين المباشرة h4 داخل الفوتر */
  h4 {
    color: #c9a227;
    font-size: 17px;
    margin: 0 0 20px;
  }

  /* =========================
     المحتوى الشبكي
  ========================= */
  .footer-content {
    max-width: 1200px;
    margin: auto;
    padding: 60px 7% 45px;
    display: grid;
    /* توزيع المساحة بين القسمين فقط */
    grid-template-columns: 1.8fr 1fr;
    gap: 50px;

    /* الشعار والوصف */
    .footer-about {
      text-align: right;

      .footer-logo {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 18px;

        img {
          width: 55px;
          height: 55px;
          object-fit: contain;
        }

        h3 {
          margin: 0;
          font-size: 19px;
          color: #c9a227;
        }
      }

      p {
        color: #dce9e2;
        font-size: 14px;
        line-height: 2;
        max-width: 400px;
        margin: 0;
      }
    }

    /* بيانات التواصل */
    .footer-contact {
      p {
        color: #dce9e2;
        font-size: 14px;
        margin: 0 0 13px;
      }
    }
  }

  /* =========================
     الجزء السفلي
  ========================= */
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    text-align: center;
    padding: 18px 20px;

    p {
      margin: 0;
      color: #c9d9d1;
      font-size: 12px;
    }
  }

  /* =========================
     Responsive (التجاوب)
  ========================= */
  @media (max-width: 650px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 35px;

      .footer-about {
        text-align: center;

        .footer-logo {
          justify-content: center;
        }

        p {
          margin: auto;
        }
      }
    }
  }
}
</style>
