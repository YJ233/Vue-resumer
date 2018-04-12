<template>
    <div id="login">
        <el-dialog title="VueResumer" :visible.sync="dialogVisible" top="30%" :close-on-click-modal="config" :show-close="config" :close-on-press-escape="config">
            <el-tabs v-model="activeName">
                <el-tab-pane label="登录" name="first">
                    <el-form label-position="left" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input placeholder="请输入用户名" v-model="user.login.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input placeholder="请输入密码" v-model="user.login.password"></el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                    <el-form label-position="left" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input placeholder="请填写用户名" v-model="user.sign.username"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input placeholder="请填写邮箱" v-model="user.sign.email"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input placeholder="请填写密码" v-model="user.sign.password"></el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer" v-show="activeName==='first'">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button @click="close">取 消</el-button>
            </span>
            <span slot="footer" class="dialog-footer" v-show="activeName==='second'">
                <el-button type="primary" @click="sign">注册</el-button>
                <el-button @click="close">取 消</el-button>
            </span>
              <span class="error" v-show="errorMsg">{{errorMsg}}</span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  props: ["dialogVisible"],
  data() {
    return {
      config: false,
      activeName: "first",
      user: {
        sign: {
          username: "",
          email: "",
          password: ""
        },
        login: {
          username: "",
          password: ""
        }
      },
      errorMsg: "",
      timeOut: ""
    };
  },
  watch: {
    errorMsg: function() {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        if (this.errorMsg) {
          this.errorMsg = "";
        }
      }, 5000);
    }
  },
  methods: {
    close() {
      this.$emit("update:dialogVisible", false);
    },
    sign() {
      let user = new this.AV.User();
      // 设置用户名
      user.setUsername(this.user.sign.username);
      // 设置密码
      user.setPassword(this.user.sign.password);
      // 设置邮箱
      user.setEmail(this.user.sign.email);

      user.set("resume", {
        profile: { name: "", birth: "", city: "" },
        studyHistory: [{ school: "", degree: "", duration: "" }],
        projects: [{ name: "", content: "" }],
        workHistory: [{ company: "", content: "" }],
        contacts: { qq: "", wechat: "", email: "", phone: "" }
      });

      user.signUp().then(
        loginedUser => {
          // console.log(loginedUser);
          this.errorMsg = "";
          this.close();
        },
        error => {
          this.errorMsg = error.message;
        }
      );
    },
    login() {
      this.AV.User.logIn(
        this.user.login.username,
        this.user.login.password
      ).then(
        loginedUser => {
          // console.log(loginedUser);
          this.errorMsg = "";
          this.$emit("init");
          this.close();
        },
        error => {
          this.errorMsg = error.message;
        }
      );
    }
  }
};
</script>
<style lang="scss">
#login {
  display: inline-block;
  .el-tabs {
    .el-tabs__header {
      display: flex;
      justify-content: center;
    }
    .el-tabs__content {
      display: flex;
      justify-content: center;
    }
  }
  .el-dialog__body {
    text-align: center;
  }
  .error {
    color: red;
  }
  .fade-enter {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 5s;
  }
  .fade-enter-to {
    opacity: 0;
  }
}
</style>