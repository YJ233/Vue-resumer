<template>
    <div id="editor">
        <nav>
            <ol>
                <li :class="{active: activeTabIndex===0}" @click="activeTabIndex=0">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sfz"></use>
                    </svg>
                </li>
                <li :class="{active: activeTabIndex===1}" @click="activeTabIndex=1">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                </li>
                <li :class="{active: activeTabIndex===2}" @click="activeTabIndex=2">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-project"></use>
                    </svg>
                </li>
                <li :class="{active: activeTabIndex===3}" @click="activeTabIndex=3">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-work"></use>
                    </svg>
                </li>
                <li :class="{active: activeTabIndex===4}" @click="activeTabIndex=4">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="content">
            <li :class="{active: activeTabIndex===0}">0</li>
            <li :class="{active: activeTabIndex===1}">1</li>
            <li :class="{active: activeTabIndex===2}">2</li>
            <li :class="{active: activeTabIndex===3}">3</li>
            <li :class="{active: activeTabIndex===4}">4</li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTabIndex: 0
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
    >.content>li {
        display: none;
        &.active {
            display: block;
        }
    }
}
</style>