import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor/dist/ssr'
import * as Quill from 'quill'
import Video from "./quill-video"

Quill.register(Video, true)


Vue.use(VueQuillEditor)