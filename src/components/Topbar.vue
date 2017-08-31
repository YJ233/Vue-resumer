<template>
    <div id="topbar">
        <div class="logo">
            VueResumer
        </div>
        <div class="actions">
            <el-button type="primary" @click="dialogVisible = true">登录/注册</el-button>

            <Login :dialogVisible.sync="dialogVisible"/>

            <!-- <el-dropdown>
                <el-button type="primary">
                    我是XXX
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>保 存</el-dropdown-item>
                    <el-dropdown-item>注 销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->

            <el-button @click="preview">预览</el-button>

        </div>
    </div>
</template>

<script>
import Login from './Login'
export default {
    components:{Login},
    data(){
        return{
            dialogVisible:false
        }
    },
    methods: {
        preview() {
            this.$emit('preview')
        }
    }
}
</script>

<style lang="scss">
#topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 16px;
}
</style>
