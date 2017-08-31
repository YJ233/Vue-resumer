<template>
    <div id="login">
        <el-dialog title="VueResumer" :visible.sync="dialogVisible" top="30%" :close-on-click-modal="config" :show-close="config" :close-on-press-escape="config">
            <el-tabs v-model="activeName">
                <el-tab-pane label="登录" name="first">
                    <el-form label-position="left" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input></el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                    <el-form label-position="left" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input></el-input>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer" v-show="activeName==='first'">
                <el-button type="primary" @click="dialogVisible = false">登录</el-button>
                <el-button @click="close">取 消</el-button>
            </span>
            <span slot="footer" class="dialog-footer" v-show="activeName==='second'">
                <el-button type="primary" @click="dialogVisible = false">注册</el-button>
                <el-button @click="close">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: ['dialogVisible'],
    data() {
        return {
            config: false,
            activeName: 'first'
        }
    },
    methods: {
        close() {
            this.$emit('update:dialogVisible', false)
        }
    }
};
</script>
<style lang="scss">
#login {
    display: inline-block;
    .el-tabs{
        .el-tabs__header{
            display: flex;
            justify-content: center;
        }
        .el-tabs__content{
            display: flex;
            justify-content: center;
        }
    }
}
</style>