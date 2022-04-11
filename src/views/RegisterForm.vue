<template>
  <form class="register-form">
    <div class="register-form__container">
      <h3 class="register-form__title">Регистрация</h3>
      <form-input
        v-model="login"
        class="login-form__input"
        type="text"
        name="name"
        placeholder="Имя пользователя"
      />
      <form-input
        v-model="email"
        class="login-form__input"
        type="email"
        name="email"
        placeholder="Email"
      />
      <form-input
        v-model="password"
        class="login-form__input"
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <form-input
        class="login-form__input"
        type="password"
        name="confirm-password"
        placeholder="Подтвердите пароль"
      />
      <app-button class="login-from__button" @click="postForm"
        >Зарегистрироваться</app-button
      >
    </div>
  </form>
</template>
<script>
import FormInput from "@/components/UI/FormInput";
import AppButton from "@/components/UI/AppButton";

import axios from "axios";
export default {
  components: {
    FormInput,
    AppButton,
  },
  data() {
    return {
      login: null,
      email: null,
      password: null,
    };
  },

  methods: {
    postForm(e) {
      e.preventDefault();
      let body = {
        name: this.login,
        email: this.email,
        password: this.password,
      };
      axios({
        method: "POST",
        url: "https://front-test.academy.smartworld.team/api/api/register",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.data.message === "Registered") {
          console.log(response.data.message);
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
<style scoped>
.register-form {
  margin: auto;
  width: 50%;
}
.register-form__container {
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
}

.register-form__title {
  margin-bottom: 50px;
  text-align: center;
}
</style>
