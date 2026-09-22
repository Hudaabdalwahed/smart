[9/22/2026 5:59 PM] Huda Abdalwahed:
<template>
  <div class="about-page">
    <!-- ================= HERO ================= -->
    <section class="about-hero">
      <div class="hero-content">
        <p class="small-title">عن بوابة المواطن الذكية</p>

        <h1>التقنية في خدمة المواطن</h1>

        <p class="hero-description">
          منصة رقمية تهدف إلى تسهيل الوصول إلى الخدمات الحكومية وإنجاز المعاملات
          بطريقة بسيطة وآمنة من مكان واحد.
        </p>
      </div>

      <div class="hero-image">
        <img src="@/assets/images/hero.jpg" alt="بوابة المواطن الذكية" />
      </div>
    </section>

    <!-- ================= ABOUT ================= -->
    <section class="about-section">
      <div class="section-title">
        <p>من نحن؟</p>

        <h2>بوابة تجمع خدماتك في مكان واحد</h2>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p>
            تم تصميم بوابة المواطن الذكية لتوفير تجربة رقمية سهلة للمواطن، بحيث
            يستطيع الوصول إلى الخدمات الحكومية وتقديم الطلبات ومتابعة حالتها دون
            الحاجة إلى التنقل بين الجهات المختلفة.
          </p>

          <p>
            تسعى البوابة إلى الاستفادة من التقنيات الحديثة في تحسين تجربة
            المواطن وتسهيل الوصول إلى الخدمات الإلكترونية.
          </p>
        </div>

        <div class="about-box">
          <span class="box-number"> 01 </span>

          <h3>سهولة الوصول</h3>

          <p>الوصول إلى الخدمات الحكومية من مكان واحد وبطريقة بسيطة.</p>
        </div>
      </div>
    </section>

    <!-- ================= GOALS ================= -->
    <section class="goals-section">
      <div class="section-title center">
        <p>ما الذي نقدمه؟</p>

        <h2>أهداف البوابة</h2>
      </div>

      <div class="goals-grid">
        <div class="goal-card">
          <span class="goal-number"> 01 </span>

          <h3>تسهيل الخدمات</h3>

          <p>تسهيل وصول المواطنين إلى الخدمات الحكومية الإلكترونية.</p>
        </div>

        <div class="goal-card">
          <span class="goal-number"> 02 </span>

          <h3>توفير الوقت</h3>

          <p>تقليل الوقت والجهد المطلوب لإنجاز المعاملات الحكومية.</p>
        </div>

        <div class="goal-card">
          <span class="goal-number"> 03 </span>

          <h3>متابعة الطلبات</h3>

          <p>إمكانية متابعة حالة الطلبات ومعرفة مراحل إنجازها.</p>
        </div>

        <div class="goal-card">
          <span class="goal-number"> 04 </span>

          <h3>تجربة رقمية</h3>

          <p>تقديم تجربة إلكترونية منظمة وسهلة الاستخدام للمواطن.</p>
        </div>
      </div>
    </section>

    <!-- ================= STATS ================= -->
    <section class="stats-section">
      <div class="stat">
        <strong> +50 </strong>

        <span> خدمة إلكترونية </span>
      </div>

      <div class="stat">
        <strong> +120 </strong>

        <span> معاملة إلكترونية </span>
      </div>

      <div class="stat">
        <strong> 24/7 </strong>

        <span> متاح على مدار الساعة </span>
      </div>

      <div class="stat">
        <strong> 100% </strong>

        <span> تجربة رقمية </span>
      </div>
    </section>

    <!-- ================= CONTACT ================= -->
    <section class="contact-section">
      <div class="section-title center">
        <p>نحن هنا لمساعدتك</p>

        <h2>تواصل معنا</h2>

        <span>
          إذا كان لديك أي استفسار أو تحتاج إلى مساعدة، يمكنك التواصل معنا عبر
          إحدى الوسائل التالية.
        </span>
      </div>

      <div class="contact-grid">
        <!-- Email -->
        <div class="contact-card">
          <div class="contact-icon">@</div>

          <h3>البريد الإلكتروني</h3>

          <p>info@smartcitizen.sy</p>
        </div>

        <!-- Phone -->
        <div class="contact-card">
          <div class="contact-icon">☎</div>

          <h3>الهاتف</h3>

          <p>011 123 4567</p>
        </div>

        <!-- Location -->
        <div class="contact-card">
          <div class="contact-icon">📍</div>

          <h3>الموقع</h3>

          <p>الجمهورية العربية السورية</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style lang="scss" scoped>
.about-page {
  direction: rtl;

  min-height: 100vh;

  background: radial-gradient(
      circle at 10% 20%,
      rgba(201, 162, 39, 0.16),
      transparent 25%
    ),
    radial-gradient(circle at 90% 70%, rgba(27, 94, 69, 0.18), transparent 30%),
    linear-gradient(135deg, #edf7f0 0%, #f7f3df 45%, #e6f2eb 100%);

  overflow: hidden;
}

/* ================= HERO ================= */

.about-hero {
  max-width: 1150px;

  margin: 0 auto;

  padding: 80px 30px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 70px;
}

.hero-content {
  .small-title {
    color: #b08a16;

    font-size: 15px;

    font-weight: bold;

    margin-bottom: 12px;
  }

  h1 {
    color: #1b5e45;

    font-size: 42px;

    margin-bottom: 20px;

    font-weight: bold;
  }

  .hero-description {
    color: #59665f;

    font-size: 17px;

    line-height: 1.9;

    max-width: 550px;
  }
}

.hero-image {
  position: relative;

  z-index: 1;

  &::before {
    content: "";

    position: absolute;

    width: 100%;

    height: 100%;

    background: #c9a227;

    border-radius: 30px;

    top: 18px;

    right: -18px;

    z-index: -1;

    opacity: 0.35;
  }

  img {
    width: 100%;

    height: 360px;

    object-fit: cover;

    border-radius: 30px;

    display: block;

    box-shadow: 0 20px 50px rgba(27, 94, 69, 0.18);
  }
}

/* ================= TITLES ================= */

.section-title {
  margin-bottom: 45px;

  p {
    color: #b08a16;

    font-size: 14px;

    font-weight: bold;

    margin-bottom: 8px;
  }

  h2 {
    color: #1b5e45;

    font-size: 32px;

    margin: 0;
  }

  span {
    display: block;

    margin-top: 15px;

    color: #59665f;

    font-size: 15px;

    line-height: 1.8;
  }
}

.section-title.center {
  text-align: center;
}

/* ================= ABOUT ================= */

.about-section {
  max-width: 1100px;

  margin: 0 auto;

  padding: 80px 30px;
}

.about-content {
  display: grid;

  grid-template-columns: 1.5fr 1fr;

  gap: 40px;

  align-items: stretch;
}

.about-text {
  background: rgba(255, 255, 255, 0.55);

  padding: 35px;

  border-radius: 25px;

  box-shadow: 0 15px 40px rgba(27, 94, 69, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.5);

  p {
    color: #59665f;

    font-size: 16px;

    line-height: 2;

    margin-bottom: 18px;
  }
}

.about-box {
  background: #1b5e45;

  color: white;

  padding: 35px;

  border-radius: 25px;

  position: relative;

  overflow: hidden;

  &::after {
    content: "";

    position: absolute;

    width: 150px;

    height: 150px;

    border-radius: 50%;

    background: rgba(201, 162, 39, 0.18);

    left: -50px;

    bottom: -60px;
  }

  .box-number {
    color: #c9a227;

    font-size: 18px;

    font-weight: bold;
  }

  h3 {
    font-size: 24px;

    margin: 25px 0 12px;
  }
  p {
    line-height: 1.9;

    color: rgba(255, 255, 255, 0.85);
  }
}

/* ================= GOALS ================= */

.goals-section {
  padding: 80px 30px;

  background: rgba(255, 255, 255, 0.25);
}

.goals-grid {
  max-width: 1100px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 22px;
}

.goal-card {
  background: rgba(255, 255, 255, 0.65);

  padding: 30px 24px;

  border-radius: 22px;

  border: 1px solid rgba(255, 255, 255, 0.6);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);

    box-shadow: 0 18px 35px rgba(27, 94, 69, 0.12);
  }

  .goal-number {
    color: #c9a227;

    font-weight: bold;

    font-size: 15px;
  }

  h3 {
    color: #1b5e45;

    margin: 20px 0 10px;

    font-size: 19px;
  }

  p {
    color: #68746e;

    font-size: 14px;

    line-height: 1.8;

    margin: 0;
  }
}

/* ================= STATS ================= */

.stats-section {
  max-width: 1050px;

  margin: 80px auto;

  padding: 35px;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 20px;

  background: #1b5e45;

  border-radius: 30px;

  box-shadow: 0 20px 45px rgba(27, 94, 69, 0.18);
}

.stat {
  text-align: center;

  color: white;

  strong {
    display: block;

    color: #c9a227;

    font-size: 30px;

    margin-bottom: 8px;
  }

  span {
    font-size: 14px;

    color: rgba(255, 255, 255, 0.85);
  }
}

/* ================= CONTACT ================= */

.contact-section {
  padding: 90px 30px 100px;

  max-width: 1150px;

  margin: 0 auto;
}

.contact-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 25px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.65);

  border: 1px solid rgba(255, 255, 255, 0.7);

  border-radius: 25px;

  padding: 35px 25px;

  text-align: center;

  transition: all 0.3s ease;

  box-shadow: 0 12px 35px rgba(27, 94, 69, 0.07);

  &:hover {
    transform: translateY(-7px);

    box-shadow: 0 18px 40px rgba(27, 94, 69, 0.13);
  }

  .contact-icon {
    width: 60px;

    height: 60px;

    margin: 0 auto 18px;

    border-radius: 50%;

    background: #1b5e45;

    color: #c9a227;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 24px;

    font-weight: bold;
  }

  h3 {
    color: #1b5e45;

    font-size: 19px;

    margin-bottom: 10px;
  }

  p {
    color: #68746e;

    font-size: 14px;

    margin: 0;
  }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 850px) {
  .about-hero {
    grid-template-columns: 1fr;

    gap: 40px;

    text-align: center;
  }

  .hero-description {
    margin: auto;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .goals-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);

    margin: 60px 25px;
  }

  .contact-grid {
    grid-template-columns: 1fr;

    max-width: 500px;

    margin: auto;
  }
}

@media (max-width: 550px) {
  .about-hero {
    padding: 55px 20px;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .hero-image img {
    height: 270px;
  }

  .about-section,
  .contact-section {
    padding: 60px 20px;
  }

  .goals-section {
    padding: 60px 20px;
  }

  .goals-grid {
    grid-template-columns: 1fr;
  }

  .stats-section {
    grid-template-columns: 1fr 1fr;

    padding: 25px 15px;
  }

  .stat strong {
    font-size: 25px;
  }
}
</style>
