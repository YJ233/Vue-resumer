<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in 5" :class="{active: activeTabIndex===i}" :title="`${title[i-1]}`" @click="activeTabIndex=i">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-${icon[i-1]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="content">
            <li :class="{active: activeTabIndex===1}">
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
            </li>
            <li :class="{active: activeTabIndex===2}">
                <h2>学习经历</h2>
            </li>
            <li :class="{active: activeTabIndex===3}">
                <h2>项目经历</h2>
            </li>
            <li :class="{active: activeTabIndex===4}">
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
            </li>
            <li :class="{active: activeTabIndex===5}">
                <h2>联系方式</h2>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTabIndex: 1,
            icon: ["sfz", "book", "project", "work", "phone"],
            title: ["个人信息", "学历", "项目", "工作经历", "联系方式"],
            labelPosition: 'top',
            profile: {
                name: '',
                brith: '',
                city: ''
            },
            workHistory: [
                { company: '', content: '' }
            ]


        }
    },
    methods: {
        addWorkHistory() {
            this.workHistory.push({ company: '', content: '' })
        },
        removeWorkHistory(index){
            this.workHistory.splice(index,1)
        }
    }

}
</script>


<style lang="scss">
#editor {
    min-height: 100px;
    display: flex;
    >nav {
        background: #000;
        width: 80px;
        text-align: center;

        >ol>li {
            padding: 16px 0;
            text-align: center;
            >.icon {
                width: 2.5em;
                height: 2.5em;
                fill: white;
            }
            &.active {
                background: white;
                >.icon {
                    fill: #000;
                }
            }
        }
    }
    >.content {
        flex: 1;
        >li {
            display: none;
            padding: 16px 32px;
            overflow: auto;
            height: 100%;
            &.active {
                display: block;
            }
            >h2 {
                padding-bottom: 24px;
            }
            .work{
                position: relative;
                border-bottom: 1px solid #ccc;
                margin-bottom: 8px;
                >h3{
                    font-weight: normal;
                }
                .el-icon-circle-cross{
                    position: absolute;
                    right: 0;top:0;
                }
            }
        }
    }
}
</style>