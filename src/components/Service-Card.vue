<template>
  <div class="service-card">
    <div class="card-image">
      <img :src="image" :alt="title" />
    </div>

    <div class="card-content">
      <h3>{{ title }}</h3>

      <p>{{ description }}</p>

      <a href="#" class="more-link" @click.prevent="showDetails">
        المزيد
        <span>←</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",

  emits: ["show-details"],

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
.service-card {
  background: #ffffff;

  border-radius: 18px;

  overflow: hidden;

  box-shadow: 0 6px 20px rgba(27, 94, 69, 0.12);

  text-align: right;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  border: 1px solid rgba(201, 162, 39, 0.15);

  &:hover {
    transform: translateY(-7px);

    box-shadow: 0 12px 30px rgba(27, 94, 69, 0.18);
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

    min-height: 155px;

    display: flex;

    flex-direction: column;

    h3 {
      font-size: 20px;

      color: #1b5e45;

      margin-bottom: 10px;

      font-weight: bold;
    }

    p {
      font-size: 13.5px;

      color: #666;

      line-height: 1.7;

      margin-bottom: 15px;
    }

    .more-link {
      margin-top: auto;

      align-self: flex-start;

      display: inline-flex;

      align-items: center;

      gap: 7px;

      padding: 8px 14px;

      border-radius: 20px;

      background: #eef7f1;

      color: #1b5e45;

      text-decoration: none;

      font-weight: bold;

      font-size: 13px;

      transition: all 0.3s ease;

      span {
        font-size: 16px;

        transition: transform 0.3s ease;
      }

      &:hover {
        background: #1b5e45;

        color: #ffffff;

        box-shadow: 0 4px 10px rgba(27, 94, 69, 0.2);

        span {
          transform: translateX(-4px);
        }
      }
    }
  }
}
</style>
