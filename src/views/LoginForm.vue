<template>
  <form @submit.prevent class="login-form">
    <div class="login-form__container">
      <h3 class="login-form__title">Авторизация</h3>
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
      <app-button @click="logIn" class="login-from__button">Войти</app-button>
    </div>
  </form>
</template>
<script>
import FormInput from "@/components/UI/FormInput";
import AppButton from "@/components/UI/AppButton";
import axios from "axios";
import { mapActions, mapMutations } from "vuex";
import {setCookie, } from '@/store/utils'
export default {
  components: {
    FormInput,
    AppButton,
  },

  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    ...mapMutations({
      setAuth: "setAuth",
    }),
    ...mapActions({
        loadCities: "cities/loadCities",
        getFavorites: "favorite/getFavorites"
    }),
    logIn() {
      let body = {
        email: this.email,
        password: this.password,
      };
      axios({
        method: "POST",
        data: body,
        url: "https://front-test.academy.smartworld.team/api/api/login",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
          let data = response.data
        if (data.message === "Logged") {
            let {token, expires_in} = data.data.authToken
            setCookie('authToken', token, {'max-age': expires_in})
          this.setAuth(true);
          this.$router.push("/");
          this.loadCities()
          this.getFavorites()
        }
      })
    },
  },
};
</script>
<style scoped>
.login-form {
  margin: auto;
  width: 50%;
}

.login-form__title {
  margin-bottom: 50px;
  text-align: center;
}

.login-form__container {
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
}
</style>
