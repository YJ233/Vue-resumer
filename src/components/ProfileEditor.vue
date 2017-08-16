<template>
    <div>
        <h2>个人信息</h2>
        <el-form :label-position="labelPosition" label-width="80px" :model="profile">
            <el-form-item label="姓名">
                <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="生辰">
                <el-input v-model="profile.birth"></el-input>
            </el-form-item>
            <el-form-item label="所在城市">
                <el-input v-model="profile.city"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props: ['profile'],
    data(){
        return{
            labelPosition: 'top'
        }
    }
}
</script>
