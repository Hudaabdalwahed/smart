<template>
  <div class="not-found-page">
    <div class="not-found-card">
      <div class="number">404</div>

      <h1>الصفحة غير موجودة</h1>

      <p>
        عذراً، يبدو أن الصفحة التي تبحثين عنها غير موجودة أو تم نقلها إلى مكان
        آخر.
      </p>

      <router-link to="/" class="home-btn">
        العودة إلى الرئيسية
        <span>←</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style lang="scss" scoped>
.not-found-page {
  min-height: calc(100vh - 80px);

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 50px 20px;

  direction: rtl;

  background: radial-gradient(
      circle at 15% 20%,
      rgba(201, 162, 39, 0.18),
      transparent 25%
    ),
    radial-gradient(circle at 85% 80%, rgba(27, 94, 69, 0.18), transparent 30%),
    linear-gradient(135deg, #edf7f0 0%, #f7f3df 45%, #e6f2eb 100%);
}

.not-found-card {
  width: 100%;

  max-width: 650px;

  padding: 60px 40px;

  text-align: center;

  background: rgba(255, 255, 255, 0.65);

  border: 1px solid rgba(255, 255, 255, 0.7);

  border-radius: 30px;

  box-shadow: 0 20px 50px rgba(27, 94, 69, 0.12);

  backdrop-filter: blur(10px);
}

.number {
  font-size: 110px;

  line-height: 1;

  font-weight: 800;

  color: #1b5e45;

  margin-bottom: 20px;

  text-shadow: 5px 5px 0 rgba(201, 162, 39, 0.25);
}

h1 {
  color: #1b5e45;

  font-size: 30px;

  margin-bottom: 15px;
}

p {
  color: #68746e;

  font-size: 15px;

  line-height: 1.9;

  max-width: 480px;

  margin: 0 auto 30px;
}

.home-btn {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  padding: 12px 25px;

  background: #1b5e45;

  color: white;

  text-decoration: none;

  border-radius: 25px;

  font-size: 14px;

  font-weight: 600;

  transition: all 0.3s ease;

  &:hover {
    background: #c9a227;

    transform: translateY(-3px);

    box-shadow: 0 8px 20px rgba(27, 94, 69, 0.15);
  }
}

@media (max-width: 600px) {
  .not-found-card {
    padding: 45px 25px;
  }

  .number {
    font-size: 80px;
  }

  h1 {
    font-size: 25px;
  }
}
</style>
