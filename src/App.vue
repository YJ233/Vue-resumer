<template>
  <div id="app" :class="{previewMode:previewMode}" >
    <Topbar class="topbar" @preview="preview" @saveResume="saveResume" :dialogVisible.sync="dialogVisible" :userLogIn.sync="userLogIn" :userName="userName"/>
    <main>
      <Editor class="editor" :resume="resume" />
      <Preview class="preview" :resume="resume" />
    </main>
    <Login :dialogVisible.sync="dialogVisible"  @init="init"/>

    <el-button id="exitPreview" @click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Login from "./components/Login";

export default {
  data() {
    return {
      previewMode: false,
      dialogVisible: false,
      userName: "username",
      userLogIn: false,
      resume: {
        profile: { name: "", birth: "", city: "" },
        studyHistory: [{ school: "", degree: "", duration: "" }],
        projects: [{ name: "", content: "" }],
        workHistory: [{ company: "", content: "" }],
        contacts: { qq: "", wechat: "", email: "", phone: "" }
      }
    };
  },
  created: function() {
    this.init()
  },
  methods: {
    preview() {
      this.previewMode = true;
    },
    exitPreview() {
      this.previewMode = false;
    },
    saveResume() {
      let user = this.AV.User.current();

      if (!user) {
        alert("请先登录");
        return;
      }

      user.set("resume", this.resume);
      user.save();
      console.log(user.get("resume"));
      alert("保存成功");
    },
    init() {
      if (this.AV.User.current()) {
        this.userName = this.AV.User.current().attributes.username;
        this.resume = this.AV.User.current().attributes.resume;
        this.userLogIn=true
      } else {
        return;
      }
    }
  },
  components: {
    Topbar,
    Editor,
    Preview,
    Login
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .topbar {
    position: relative; // z-index: 1;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }

  main {
    display: flex;
    flex: 1;
    background: #ddd;
    > .editor {
      width: 40em;
      margin: 16px;
      margin-right: 8px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      overflow: auto;
    }
    > .preview {
      flex: 1;
      margin: 16px;
      margin-left: 8px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      overflow: hidden;
    }
  }
}

.previewMode {
  #topbar {
    display: none;
  }
  #exitPreview {
    display: inline-block;
    position: fixed;
    right: 32px;
    bottom: 32px;
  }
  main {
    #editor {
      display: none;
    }
    #preview {
      max-width: 800px;
      margin: 32px auto;
    }
  }
}

#exitPreview {
  display: none;
}
</style>
