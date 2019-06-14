<template>
    <div class="editor-page">
        <pageHeader :list="[{title:'富文本编辑器',path:'/rich-editor'}]"/>
        <div class="rich-editor">
            <div class="quill-editor" 
                :content="content"
                v-quill:myQuillEditor="editorOption"
                @change="onEditorChange($event)"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
            />
        </div>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
    layout:"console",
    data(){
        return {
            content: '',
            editor:"",
            editorOption: {
                // some quill options
                placeholder:"请输入内容...",
                modules: {
                    toolbar:{
                        container:[
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image', 'video']
                        ],
                        handlers: {
                            'image': ((value) => {
                                console.log(value)
                            }),
                            'video':((value)=>{
                                console.log(value)
                            }),
                            'link':((value)=>{
                                console.log(value)
                            })
                        }
                    }
                }
            }
        }
    },
    methods:{
        onEditorChange({ editor, html, text }){
            console.log(editor)
        },
        onEditorBlur(e){
            console.log(e)
        },
        onEditorFocus(e){
            console.log(e)
        },
        onEditorReady(editor){
            this.editor=editor
        },
        insertContent(data){
            if(data.file){
               this.editor.insertEmbed(this.editor.getSelection(true).index, data.type, data.file)
            }
        }
    }
}
</script>
<style lang="less" >
    .editor-page{
        padding-bottom: @space-width;
        .rich-editor{
            // height: 300px;
            
            .ql-toolbar{
                border: none!important;
                .shadow();
                margin-bottom: @space-width;
                border-radius: 5px;
                background: #fff;
            }
            .ql-container{
                border: none!important;
                .shadow();
                border-radius: 5px;
                background: #fff;
                min-height: 300px;
                height: 300px;
            }
        }
    }

    @media screen and (min-width:@mobile-width + 1px){
        .rich-editor{
            // height: 300px;
            .ql-toolbar{
                border: none!important;
                .shadow();
                margin-bottom: @space-width;
                border-radius: 5px;
                background: #fff;
            }
            .ql-container{
                border: none!important;
                .shadow();
                border-radius: 5px;
                background: #fff;
                min-height: 300px;
                height: 300px;
                .ql-editor{
                    &::-webkit-scrollbar {/*滚动条整体样式*/
                        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
                        height: 1px;
                    }
                    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                        border-radius: 4px;
                        background-color: #ccc;
                    }
                    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                        /*border-radius: 10px;*/
                        background: #EDEDED;
                    }
                }
            }
        }
    }
</style>
