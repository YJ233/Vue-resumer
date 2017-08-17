<template>
    <div>
        <h2>学习经历</h2>
        <el-form :label-position="labelPosition" label-width="80px">
            <div class="container" v-for="(item,index) in items">
                <h3>经历{{index+1}}</h3>
                <el-form-item label="学校">
                    <el-input v-model="item.school"></el-input>
                </el-form-item>
                <el-form-item label="学历">
                    <el-input v-model="item.degree"></el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <el-input v-model="item.duration"></el-input>
                </el-form-item>
                <i class="el-icon-circle-cross" @click="removeItem(index)"></i>
                <hr>
            </div>
        </el-form>
        <el-button type="primary" @click="addItem">添加</el-button>
    </div>
</template>

<script>
export default {
    props: ['items'],
    data() {
        return {
            labelPosition: 'top'
        }
    },
    methods: {
        addItem() {
            this.items.push({school:'',duration:'',degree:''})
        },
        removeItem(index) {
            this.items.splice(index, 1)
        }
    }
}
</script>
