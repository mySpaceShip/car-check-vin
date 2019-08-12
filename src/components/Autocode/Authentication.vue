<template>
  <div class="authenticate-container">
    <div class="authenticate-block">
      <div class="authenticate-block__title">Авторизация</div>
      <div class="login-form">
        <div class="action-form">
          <div class="action-form__text">Логин</div>
          <input class="action-form__input" v-model="user" placeholder="username"/>
        </div>
        <div class="action-form">
          <div class="action-form__text">Пароль</div>
          <input v-model="password" class="action-form__input"/>
          <div class="action-form__error" v-if="errors">
            {{errors}}
          </div>
        </div>
        <div  class="btn_wrapper">
          <button @click="logUser" class="btn">
            <span class="btn__text">Войти</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Authentication',
    data() {
      return {
        user: '',
        password: '',
        errors: '',
      }
    },
    methods: {
      ...mapMutations(['loginUser']),

      logUser() {
        this.errors = ''
        let user = this.$store.getters.getUser
        if (user.name !== this.user || user.password !== this.password) {
          this.errors = 'Вы ввели неправильное имя пользователя или пароль'
          return
        }
        this.loginUser(true)
        this.$router.push('/')


      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-family-1: 'Muli', sans-serif;

  .authenticate-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1440px;
    height: 100vh;
    background: linear-gradient(0deg, #067EFF, #067EFF);
  }

  .authenticate-block {
    background: #ffffff;
    padding: 30px 75px 35px 76px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #409CFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .authenticate-block__title {
    font-family: $font-family-1;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 18px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #409CFF;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .action-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .action-form__text {
    font-family: $font-family-1;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 9px;
    letter-spacing: 0.3px;
    color: #000000;
  }

  .action-form__error {
    display: flex;
    font-size: 12px;
    margin-top: -13px;
    color: red;
    margin-bottom: 10px;
  }


  .action-form__input {
    width: 307px;
    padding: 11px;
    border: 2px solid #CECECE;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 28px;
    outline: none;
    &::placeholder {
      font-family: $font-family-1;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.3px;
      color: #D0D0D1;
    }
  }

  .btn {
    outline: none;
    background: #FFD306;
    padding: 13px 65px 13px 65px;
    border-radius: 50px;
  }

  .btn_wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .btn__text {
    font-family: $font-family-1;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.3px;
  }

  @media (min-width: 320px) and (max-width: 575px) {
    .action-form__input {
      box-sizing: border-box;
      width: 225px;
    }
    .authenticate-block {
      background: #ffffff;
      padding: 30px 35px 30px 35px;
    }
  }
</style>