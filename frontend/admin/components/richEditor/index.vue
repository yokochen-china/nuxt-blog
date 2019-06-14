<template>
    <div class="rich-editor">
        <div class="quill-editor" 
            :content="content"
            v-quill:myQuillEditor="editorOption">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            content: '<p>I am Example</p>',
            editorOption: {
                // some quill options
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block']
                    ]
                }
            }
        }
    },
    methods:{
        
    }
}
</script>