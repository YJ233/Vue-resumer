<template>
  <div id="app">
    <Topbar class="topbar" />
    <main>
      <Editor class="editor" />
      <Preview class="preview" />
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  components: {
    Topbar, Editor, Preview
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
    position: relative;
    z-index: 1;
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
      overflow: hidden;
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
</style>
