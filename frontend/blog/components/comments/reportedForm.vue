<template>
    <div class="reported" v-if="value">
        <div class="mask"></div>
        <div class="reported-container">
            <label><input name="type" v-model="forms.type" value="1" type="radio"> 违规内容：<span>(色情、暴力、血腥、敏感信息等)</span></label>
            <label><input name="type" v-model="forms.type" value="2" type="radio"> 恶意内容：<span>(人身攻击、挑衅辱骂、恶意行为)</span></label>
            <label><input name="type" v-model="forms.type" value="3" type="radio"> 其他内容：<span>(补充说明)</span></label>
            <textarea  class="form-input-textarea"  v-model="forms.reason" :disabled="disabled" ref="textarea" placeholder="简短说明..." maxlength="220"></textarea>
            <div class="form-row">
                <input type="button" @click="submit" :disabled="disabledSubmit" :class="['form-input-btn','submit-btn',{'disabled-btn':disabledSubmit}]" value="举报">
                <input type="button" class="form-input-btn cancel-btn" @click="changeModal" value="取消">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            forms:{
                type:1,
                reason:""
            },
            disabled:true,
        }
    },
    computed:{
        disabledSubmit(){
            if(this.forms.reason.length<4&&this.forms.type==3){
                return true
            }
            return false
        }
    },
    watch:{
        ["forms.type"](val){
            if(val==3){
                this.disabled=false
                this.$refs.textarea.focus()
            }else{
                this.disabled=true
                this.reason=""
            }
        },
        value(val){
            if(!val){
                this.forms={
                    reason:"",
                    type:1
                }
            }
        }
    },
    methods:{
        changeModal(){
            this.$emit("input",false)
        },
        submit(){
            this.$emit("submit",this.forms)
        }
    }
}
</script>
<style lang="less" scoped>
    .reported{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .mask{
            background: rgba(0,0,0,.5);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .reported-container{
            background: #fff;
            width: 90%;
            max-width: 400px;
            border-radius: 5px;
            padding: 15px;
            box-shadow: 0px 11px 51px 0px rgba(0, 0, 0, 0.06);
            .center();
            label{
                display: block;
                font-size: 13px;
                cursor: pointer;
                padding: 5px 0;
                span{
                    font-size: 13px;
                    color: @text-color-label;
                }
            }
            .form-input-textarea{
                width: 100%;
                min-height: 100px;
                border-radius: 3px;
                border: 1px solid @border-color;
                padding: 5px;
                outline: none;
                margin-top: 15px;
            }
            .form-row{
                padding-top: 15px;
            }
            .form-input-btn{
                height: 30px;
                padding: 0 15px;
                background: @primary-color;
                border: none;
                color: #fff;
                border-radius: 3px;
                cursor: pointer;
                outline: none;
            }
            .cancel-btn{
                background: #fff;
                border: 1px solid @primary-color;
                color: @primary-color;
                margin-left: 10px;
            }
            .disabled-btn{
                background: #eee;
                color: #ccc;
                cursor:not-allowed;
            }
        }
    }
</style>
