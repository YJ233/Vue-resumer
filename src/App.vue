<template>
  <div id="app" :class="{previewMode:previewMode}">
    <Topbar class="topbar" @preview="preview" :dialogVisible.sync="dialogVisible"/>
    <main>
      <Editor class="editor" :resume="resume" />
      <Preview class="preview" :resume="resume" />
    </main>
    <Login :dialogVisible.sync="dialogVisible" />

    <el-button id="exitPreview" @click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Login from './components/Login'

export default {
  data() {
    return {
      previewMode: false,
      dialogVisible:false,
      resume: {
        profile: { name: '', birth: '', city: '' },
        studyHistory: [{ school: '', degree: '', duration: '' }],
        projects: [{ name: '', content: '' }],
        workHistory: [{ company: '', content: '' }],
        contacts: { qq: '', wechat: '', email: '', phone: '' }
      }
    }
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    }
  },
  components: {
    Topbar, Editor, Preview,Login
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    >.editor {
      width: 40em;
      margin: 16px;
      margin-right: 8px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      overflow: auto;
    }
    >.preview {
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
