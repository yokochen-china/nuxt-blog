<template>
    <div class="login-page">
        <div class="login-box">
            <div class="login-box-header">
                <h1>Chen YuQiao's Personal Website</h1>
                <p>Who's that? Don't move! </p>
                <p>I need inspect your's passport.</p>
            </div>
            <Form label-position="top" >
                <FormItem label="Username">
                    <Input size="large"></Input>
                </FormItem>
                <FormItem label="Password">
                    <Input size="large"></Input>
                </FormItem>
                <FormItem label="Password">
                    <Input size="large"></Input>
                </FormItem>
                <FormItem>
                    <Button to="/dashboard" size="large" type="primary" long>Sign In</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
    .ivu-form{
        .ivu-form-item-label{
            color: #999;
            font-size: 14px;
        }
    }
    .login-page{
        .login-box{
            max-width: 400px;
            padding: 20px;
            margin: 80px auto;
            .login-box-header{
                color: #fff;
                margin-bottom: 10px;
                h1{
                    font-size: 22px;
                }
                p{
                    color: #999;
                    font-size: 16px;
                }
            }
        }
    }
</style>
