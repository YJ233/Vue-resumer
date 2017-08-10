<template>
    <div id="editor">
        <nav>
            <ol>
                <li class="active">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sfz"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-book"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-project"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-work"></use>
                    </svg>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-phone"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="content">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>

<style lang="scss">
#editor {
    min-height: 100px;
    display: flex;
    >nav {
        background: #000;
        width: 80px;
        text-align: center;

        >ol>li {
            border: 1px solid red;
            padding: 8px 0;
            text-align: center;
            >.icon {
                width: 2.5em;
                height: 2.5em;
                fill: white;
            }
            &.active{
                background: white;
                > .icon{
                    fill: #000;
                }
            }
        }
    }
}
</style>