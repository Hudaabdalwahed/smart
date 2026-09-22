<template>
  <div class="login-page">
    <div class="login-container">
      <!-- =========================
           صورة الـ Hero
      ========================== -->
      <div class="hero-section">
        <img src="@/assets/images/hero.jpg" alt="بوابة المواطن الذكية" />

        <div class="hero-overlay">
          <img
            src="@/assets/images/logo.png"
            alt="شعار بوابة المواطن"
            class="hero-logo"
          />

          <h2>خدماتك الحكومية بين يديك</h2>

          <p>أنجز معاملاتك الحكومية بسهولة وأمان من مكان واحد.</p>
        </div>
      </div>

      <!-- =========================
           Form
      ========================== -->
      <div class="form-section">
        <!-- الشعار -->
        <img
          src="@/assets/images/logo.png"
          alt="شعار بوابة المواطن"
          class="form-logo"
        />

        <!-- تسجيل الدخول -->
        <div v-if="mode === 'login'">
          <p class="small-title">مرحباً بعودتك</p>

          <h1>تسجيل الدخول</h1>

          <p class="form-description">سجل دخولك للوصول إلى خدماتك وطلباتك</p>

          <form @submit.prevent="login">
            <!-- البريد -->
            <div class="input-group">
              <label>البريد الإلكتروني</label>

              <input
                v-model="loginForm.email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>

            <!-- كلمة المرور -->
            <div class="input-group">
              <label>كلمة المرور</label>

              <div class="password-input">
                <input
                  v-model="loginForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="أدخل كلمة المرور"
                  required
                />

                <button
                  type="button"
                  class="show-password"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? "إخفاء" : "إظهار" }}
                </button>
              </div>
            </div>

            <!-- تذكرني -->
            <div class="remember-row">
              <label class="remember">
                <input v-model="rememberMe" type="checkbox" />

                <span>تذكرني</span>
              </label>

              <a href="#"> نسيت كلمة المرور؟ </a>
            </div>

            <!-- زر تسجيل الدخول -->
            <button type="submit" class="submit-btn">تسجيل الدخول</button>
          </form>

          <!-- إنشاء حساب -->
          <div class="switch-mode">
            <span> ليس لديك حساب؟ </span>

            <button @click="mode = 'register'">إنشاء حساب</button>
          </div>
        </div>

        <!-- =========================
             إنشاء حساب
        ========================== -->
        <div v-else>
          <p class="small-title">انضم إلينا</p>

          <h1>إنشاء حساب</h1>

          <p class="form-description">
            أنشئ حسابك للوصول إلى خدمات بوابة المواطن
          </p>

          <form @submit.prevent="register">
            <!-- الاسم -->
            <div class="input-group">
              <label>الاسم الكامل</label>

              <input
                v-model="registerForm.name"
                type="text"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <!-- البريد -->
            <div class="input-group">
              <label>البريد الإلكتروني</label>
              <input
                v-model="registerForm.email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>

            <!-- كلمة المرور -->
            <div class="input-group">
              <label>كلمة المرور</label>

              <input
                v-model="registerForm.password"
                type="password"
                placeholder="أنشئ كلمة مرور"
                required
              />
            </div>

            <!-- تأكيد كلمة المرور -->
            <div class="input-group">
              <label>تأكيد كلمة المرور</label>

              <input
                v-model="registerForm.confirmPassword"
                type="password"
                placeholder="أعد إدخال كلمة المرور"
                required
              />
            </div>

            <button type="submit" class="submit-btn">إنشاء الحساب</button>
          </form>

          <!-- العودة لتسجيل الدخول -->
          <div class="switch-mode">
            <span> لديك حساب بالفعل؟ </span>

            <button @click="mode = 'login'">تسجيل الدخول</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",

  data() {
    return {
      // تحديد الوضع الحالي
      mode: "login",

      // إظهار / إخفاء كلمة المرور
      showPassword: false,

      // تذكرني
      rememberMe: false,

      // بيانات تسجيل الدخول
      loginForm: {
        email: "",
        password: "",
      },

      // بيانات إنشاء الحساب
      registerForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  methods: {
    login() {
      console.log("بيانات تسجيل الدخول:", this.loginForm);

      alert("تم إرسال بيانات تسجيل الدخول");
    },

    register() {
      if (this.registerForm.password !== this.registerForm.confirmPassword) {
        alert("كلمتا المرور غير متطابقتين");

        return;
      }

      console.log("بيانات إنشاء الحساب:", this.registerForm);

      alert("تم إرسال بيانات إنشاء الحساب");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  min-height: 100vh;

  padding: 60px 20px;

  display: flex;

  align-items: center;

  justify-content: center;

  direction: rtl;

  background: radial-gradient(
      circle at 10% 20%,
      rgba(201, 162, 39, 0.14),
      transparent 25%
    ),
    radial-gradient(circle at 90% 80%, rgba(27, 94, 69, 0.18), transparent 30%),
    linear-gradient(135deg, #edf7f0, #f7f3df, #e6f2eb);
}

/* =====================================
   الحاوية الرئيسية
===================================== */

.login-container {
  width: 100%;

  max-width: 1050px;

  min-height: 600px;

  display: grid;

  grid-template-columns: 1.05fr 0.95fr;

  background: rgba(255, 255, 255, 0.88);

  border-radius: 30px;

  overflow: hidden;

  box-shadow: 0 25px 60px rgba(27, 94, 69, 0.16);

  backdrop-filter: blur(10px);
}

/* =====================================
   Hero
===================================== */

.hero-section {
  position: relative;

  min-height: 600px;

  overflow: hidden;
}

.hero-section > img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;
}

/* طبقة فوق الصورة */

.hero-section::after {
  content: "";

  position: absolute;

  inset: 0;

  background: linear-gradient(
    180deg,
    rgba(27, 94, 69, 0.05),
    rgba(27, 94, 69, 0.72)
  );
}

/* النص فوق الصورة */

.hero-overlay {
  position: absolute;

  z-index: 2;

  bottom: 45px;

  right: 40px;

  left: 40px;

  color: white;
}

.hero-logo {
  width: 65px;

  height: 65px;

  object-fit: contain;

  margin-bottom: 15px;
}

.hero-overlay h2 {
  font-size: 30px;

  margin: 0 0 12px;
  font-weight: 700;
}

.hero-overlay p {
  font-size: 15px;

  line-height: 1.8;

  max-width: 430px;

  margin: 0;

  color: rgba(255, 255, 255, 0.9);
}

/* =====================================
   Form Section
===================================== */

.form-section {
  padding: 55px 55px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  background: rgba(255, 255, 255, 0.92);
}

.form-logo {
  width: 58px;

  height: 58px;

  object-fit: contain;

  margin-bottom: 15px;
}

.small-title {
  color: #c9a227;

  font-size: 14px;

  font-weight: bold;

  margin: 0 0 5px;
}

.form-section h1 {
  color: #1b5e45;

  font-size: 32px;

  margin: 0 0 8px;
}

.form-description {
  color: #718078;

  font-size: 14px;

  line-height: 1.7;

  margin: 0 0 28px;
}

/* =====================================
   Inputs
===================================== */

.input-group {
  margin-bottom: 18px;
}

.input-group label {
  display: block;

  color: #365548;

  font-size: 13px;

  font-weight: 600;

  margin-bottom: 7px;
}

.input-group input {
  width: 100%;

  box-sizing: border-box;

  border: 1px solid #dce6df;

  background: #f8faf8;

  border-radius: 14px;

  padding: 13px 15px;

  font-size: 14px;

  outline: none;

  direction: rtl;

  transition: 0.3s;
}

.input-group input:focus {
  border-color: #1b5e45;

  background: white;

  box-shadow: 0 0 0 3px rgba(27, 94, 69, 0.08);
}

.input-group input::placeholder {
  color: #a2aaa5;
}

/* كلمة المرور */

.password-input {
  position: relative;
}

.password-input input {
  padding-left: 70px;
}

.show-password {
  position: absolute;

  left: 10px;

  top: 50%;

  transform: translateY(-50%);

  border: none;

  background: transparent;

  color: #1b5e45;

  font-size: 11px;

  cursor: pointer;

  font-weight: 600;
}

/* =====================================
   Remember
===================================== */

.remember-row {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin: 5px 0 22px;

  font-size: 12px;
}

.remember {
  display: flex;

  align-items: center;

  gap: 6px;

  color: #66736c;

  cursor: pointer;
}

.remember input {
  accent-color: #1b5e45;

  cursor: pointer;
}

.remember-row a {
  color: #1b5e45;

  text-decoration: none;

  font-weight: 600;
}

.remember-row a:hover {
  color: #c9a227;
}

/* =====================================
   زر تسجيل الدخول
===================================== */

.submit-btn {
  width: 100%;

  border: none;

  background: linear-gradient(135deg, #1b5e45, #287858);

  color: white;

  padding: 14px;

  border-radius: 14px;

  font-size: 15px;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

  box-shadow: 0 8px 20px rgba(27, 94, 69, 0.18);
}

.submit-btn:hover {
  transform: translateY(-2px);

  box-shadow: 0 12px 25px rgba(27, 94, 69, 0.25);
}

/* =====================================
   الانتقال بين Login / Register
===================================== */

.switch-mode {
  text-align: center;

  margin-top: 25px;

  color: #718078;

  font-size: 13px;
}

.switch-mode button {
  border: none;

  background: transparent;

  color: #1b5e45;

  font-weight: bold;

  cursor: pointer;

  margin-right: 5px;
}

.switch-mode button:hover {
  color: #c9a227;
}

/* =====================================
   Responsive
===================================== */

@media (max-width: 850px) {
  .login-container {
    grid-template-columns: 1fr;

    max-width: 550px;
  }

  .hero-section {
    min-height: 300px;
  }

  .hero-overlay {
    bottom: 30px;

    right: 30px;

    left: 30px;
  }

  .hero-overlay h2 {
    font-size: 25px;
  }

  .form-section {
    padding: 40px;
  }
}

@media (max-width: 500px) {
  .login-page {
    padding: 25px 12px;
  }

  .form-section {
    padding: 30px 22px;
  }

  .hero-section {
    min-height: 250px;
  }

  .hero-overlay h2 {
    font-size: 22px;
  }

  .hero-overlay p {
    font-size: 13px;
  }

  .form-section h1 {
    font-size: 28px;
  }
}
</style>
