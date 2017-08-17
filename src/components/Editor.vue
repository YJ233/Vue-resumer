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
                <ProfileEditor :profile="profile" />
            </li>
            <li :class="{active: activeTabIndex===2}">
                <StudyHistoryEditor :items="studyHistory" />
            </li>
            <li :class="{active: activeTabIndex===3}">
                <h2>项目经历</h2>
            </li>
            <li :class="{active: activeTabIndex===4}">
                <WorkHistoryEditor :items="workHistory" />
            </li>
            <li :class="{active: activeTabIndex===5}">
                <h2>联系方式</h2>
            </li>
        </ol>
    </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import StudyHistoryEditor from './StudyHistoryEditor'
import WorkHistoryEditor from './WorkHistoryEditor'

export default {
    components: {
        ProfileEditor, StudyHistoryEditor, WorkHistoryEditor
    },
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
            ],
            studyHistory: [
                { school: '', duration: '', degree: '' }
            ]


        }
    },
    methods: {

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
            h2 {
                padding-bottom: 24px;
            }
            .container {
                position: relative;
                margin-bottom: 8px;
                >h3 {
                    font-weight: normal;
                }
                .el-icon-circle-cross {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
        }
    }
}
</style>