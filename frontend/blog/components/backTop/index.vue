<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="iconfont icon-huojian"></i>
            </div>
        </slot>
    </div>
</template>
<script>
    const prefixCls = 'ivu-back-top'

    export default {
        props: {
            height: {
                type: Number,
                default: 400
            },
            bottom: {
                type: Number,
                default: 30
            },
            right: {
                type: Number,
                default: 30
            },
            duration: {
                type: Number,
                default: 1000
            }
        },
        data () {
            return {
                backTop: false
            };
        },
        mounted () {
           window.addEventListener('scroll', this.handleScroll, false);
           window.addEventListener('resize', this.handleScroll, false);
        },
        beforeDestroy () {
           window.removeEventListener('scroll', this.handleScroll, false);
           window.removeEventListener('resize', this.handleScroll, false);
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show`]: this.backTop
                    }
                ];
            },
            styles () {
                return {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                };
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            handleScroll () {
                this.backTop = window.pageYOffset >= this.height;
            },
            back () {
                const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollTop(window, sTop, 0, this.duration);
                this.$emit('on-click');
            },
            scrollTop(el, from = 0, to, duration = 500, endCallback) {
                if (!window.requestAnimationFrame) {
                    window.requestAnimationFrame = (
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (callback) {
                            return window.setTimeout(callback, 1000/60);
                        }
                    );
                }
                const difference = Math.abs(from - to);
                const step = Math.ceil(difference / duration * 50);

                function scroll(start, end, step) {
                    if (start === end) {
                        endCallback && endCallback();
                        return;
                    }

                    let d = (start + step > end) ? end : start + step;
                    if (start > end) {
                        d = (start - step < end) ? end : start - step;
                    }

                    if (el === window) {
                        window.scrollTo(d, d);
                    } else {
                        el.scrollTop = d;
                    }
                    window.requestAnimationFrame(() => scroll(d, end, step));
                }
                scroll(from, to, step);
            }
        }
    };
</script>
<style lang="less" scoped>
    .back-top{
        z-index: 10;
        position: fixed;
        cursor: pointer;
        bottom: 80px;
        right: 30px;
    }
    .back-top-show{
        display: block;
    }
</style>
