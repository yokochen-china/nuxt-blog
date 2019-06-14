<template>
    <div class="replay-form">
        <div class="replay-form-main">
            <input type="text" :maxlength="maxLength" v-model="replyContent" placeholder="理性回复" class="replay-form-input">
        </div>
        <input type="button" @click="submit" :disabled="disabled" value="发表" :class="['replay-form-btn',{'disabled':disabled}] ">
    </div>
</template>
<script>
export default {
    props:{
        maxLength:{
            type:Number,
            default:44
        }
    },
    data(){
        return {
            replyContent:""
        }
    },
    computed:{
        disabled(){
            if(this.replyContent){
                return false
            }
            return true
        }
    },
    methods:{
        submit(){
            this.$emit("doReplay",this.replyContent)
        }
    }
}
</script>
<style lang="less" scoped>
    .replay-form{
        display: flex;
        padding-top:5px;
        .replay-form-main{
            flex: 1;
            .replay-form-input{
                display: block;
                width: 100%;
                height: 32px;
                border: 1px solid @border-color;
                padding: 5px;
                border-radius: 2px;
                outline: none;
            }
        }
        
        .replay-form-btn{
            margin-left: 15px;
            background: @primary-color;
            border: none;
            color: #fff;
            border-radius: 3px;
            padding: 0 15px;
            outline: none;
            cursor: pointer;
        }
        .disabled{
            background: #eee;
            color: #ccc;
            cursor: not-allowed;
        }
    }
</style>
