<template>
  <div class="login">
    <div class="logo-box">
      <div class="logo"><span>LOGO</span></div>
    </div>
    <div class="input-group">
      <div class="username">
        <input type="text" placeholder="请输入用户" />
      </div>
      <div class="password">
        <input type="text" placeholder="请输入密码" />
      </div>
      <div class="forget">忘记密码</div>
    </div>
    <div class="btn-group">
      <van-button block class="btn submit">登陆</van-button>
      <van-button block class="btn register">注册</van-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background: #f5f5f5;
  .logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    .logo {
      width: 7rem;
      background: #fff;
      height: 7rem;
      border-radius: 50%;
      overflow: hidden;
      line-height: 7rem;
      text-align: center;
    }
  }
  .input-group {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    div {
      width: 80%;
    }
    input {
      box-sizing: border-box;
      background: #fff;
      width: 100%;
      border-radius: 1rem;
      overflow: hidden;
      margin: 1rem 0;
      padding: 0.75rem 1rem;
    }
    .forget {
      text-align: right;
    }
  }
  .btn-group {
    .btn {
      width: 80%;
      border-radius: 1rem;
      margin:1rem auto;
    }
    
    .submit {
      background: #fb8b8d;
      color: #fff;
    }
    .register {
      border: 1px solid #fb8b8d;
    }
  }
}
</style>
