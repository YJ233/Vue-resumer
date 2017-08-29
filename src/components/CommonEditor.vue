<template>
    <div>
        <h2>{{title}}</h2>
        <el-form :label-position="labelPosition" label-width="80px">
            <div class="container" v-for="(item,index) in items" :key="index">
                <h3>经历{{index+1}}</h3>
                <el-form-item v-for="key in keys" :label="labels[key]||key" :key="key">
                    <el-input v-model="item[key]"></el-input>
                </el-form-item>
                <hr>
                <i class="el-icon-circle-cross" @click="removeItem(index)"></i>
            </div>
        </el-form>
        <el-button type="primary" @click="addItem">添加</el-button>
    </div>
</template>

<script>
export default {
    props: ['items','labels','title'],
    data() {
        return {
            labelPosition: 'top',
            keys: Object.keys(this.items[0])
        }
    },
    
    methods: {
        addItem() {
            const empty = {}
            this.keys.map((key)=>{
                empty[key]=''
            })
            this.items.push(empty)
        },
        removeItem(index) {
            this.items.splice(index, 1)
        }
    }
}
</script>
