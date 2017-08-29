<template>
    <div id="preview">
        <h1>{{resume.profile.name||'请填写姓名'}}</h1>
        <p>{{resume.profile.city||'请填写城市'}}|{{resume.profile.birth||'请填写出生年月'}}</p>
        <hr>
        <section v-if="filter(resume.studyHistory).length>0">
            <h2>学习经历</h2>
            <ul>
                <li v-for="(study,index) in filter(resume.studyHistory)" :key="index">
                    {{study.school}}
                    {{study.degree}}
                    {{study.duration}}
                </li>
            </ul>
        </section>
        <section v-if="filter(resume.projects).length>0">
            <h2>项目</h2>
            <ul>
                <li v-for="(project,index) in filter(resume.projects)" :key="index">
                    {{project.name}}
                    {{project.content}}
                </li>
            </ul>
        </section>
        <section v-if="filter(resume.workHistory).length>0">
            <h2>工作经历</h2>
            <ul>
                <li v-for="(work,index) in filter(resume.workHistory)" :key="index">
                    {{work.company}}
                    {{work.content}}
                </li>
            </ul>
        </section>
    </div>
</template>

<style>
#preview {
    min-height: 100px;
}
</style>
<script>
export default {
    props: ['resume'],
    // profile: { name: '', brith: '', city: '' },
    // studyHistory: [{ school: '', degree: '', duration: '' }],
    // projects: [{ name: '', content: '' }],
    // workHistory: [{ company: '', content: '' }],
    // contacts: { qq: '', wechat: '', email: '', phone: '' }
    methods: {
        filter(arr) {
            return arr.filter(item => !this.isEmpty(item))
        },
        isEmpty(obj) {
            let empty = true
            for (let key in obj) {
                if (obj[key]) {
                    empty = false
                    break
                }
            }
            return empty
        }
    }
}
</script>