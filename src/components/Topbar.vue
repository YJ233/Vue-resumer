<template>
    <div id="topbar">
        <div class="logo">
            VueResumer
        </div>
        <div class="actions">
            <el-button type="primary" @click="open" v-show="!userLogIn">登录/注册</el-button>

            <el-dropdown @command="callback" v-show="userLogIn">
                <el-button type="primary">
                    {{userName}}
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="saveResume">保 存</el-dropdown-item>
                    <el-dropdown-item command="logout">注 销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <el-button @click="preview">预览</el-button>

        </div>
    </div>
</template>

<script>
export default {
  props: ["dialogVisible", "userName", "userLogIn"],
  methods: {
    preview() {
      this.$emit("preview");
    },
    open() {
      this.$emit("update:dialogVisible", true);
    },
    saveResume() {
      this.$emit("saveResume");
    },
    logout() {
      this.AV.User.logOut();
      this.$emit("update:userLogIn", false)
      console.log("logout");
    },
    callback(command) {
      this[command]();
    }
  }
};
</script>

<style lang="scss">
#topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 16px;
  .el-dropdown-item {
    text-align: center;
  }
}
</style>
