<template>
  <div class="service-card">
    <div class="card-image">
      <img :src="image" :alt="title" />
    </div>

    <div class="card-content">
      <h3>{{ title }}</h3>

      <p>{{ description }}</p>

      <a href="#" class="more-link" @click.prevent="showDetails">
        المزيد &larr;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",

  // الأحداث التي يمكن لهذا الـ Component إرسالها
  emits: ["show-details"],

  // البيانات التي يستقبلها من الأب
  props: {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },

  methods: {
    showDetails() {
      // إرسال البيانات إلى المكون الأب
      this.$emit("show-details", {
        title: this.title,

        description: this.description,

        image: this.image,
        id: this.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* التنسيق الخاص بالبطاقة الواحدة فقط */

.service-card {
  background: #fff;

  border-radius: 12px;

  overflow: hidden;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

  text-align: right;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  .card-image {
    img {
      width: 100%;

      height: 180px;

      object-fit: cover;

      display: block;
    }
  }

  .card-content {
    padding: 20px;

    h3 {
      font-size: 18px;

      color: #1b5e20;

      margin-bottom: 10px;
    }

    p {
      font-size: 13.5px;

      color: #555;

      line-height: 1.6;

      margin-bottom: 15px;
    }

    .more-link {
      color: #2e7d32;

      text-decoration: none;

      font-weight: bold;

      font-size: 13px;

      display: inline-block;

      transition: 0.3s;
    }

    .more-link:hover {
      color: #c9a227;

      transform: translateX(-4px);
    }
  }
}
</style>
