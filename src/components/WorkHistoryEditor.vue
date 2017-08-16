<template>
    <div>
        <h2>工作经历</h2>
        <el-form :label-position="labelPosition" label-width="80px">
            <div class="work" v-for="(work,index) in workHistory">
                <h3>经历{{index+1}}</h3>
                <el-form-item label="工作单位">
                    <el-input v-model="work.company"></el-input>
                </el-form-item>
                <el-form-item label="工作内容">
                    <el-input v-model="work.content"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" @click="removeWorkHistory(index)"></i>
            </div>
        </el-form>
        <el-button type="primary" @click="addWorkHistory">添加</el-button>
    </div>
</template>

<script>
export default {
    props: ['workHistory'],
    data() {
        return {
            labelPosition: 'top'
        }
    },
    methods: {
        addWorkHistory() {
            this.workHistory.push({ company: '', content: '' })
        },
        removeWorkHistory(index) {
            this.workHistory.splice(index, 1)
        }
    }
}
</script>
