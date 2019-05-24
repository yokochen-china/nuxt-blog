<template>
    <Modal 
        v-model="showModal"
        :footer-hide="true"
        :mask-closable="false"
        @on-visible-change="changeModal"
    >
        <div class="gd-map">
            <div class="input-search-area">
                <AutoComplete
                    v-model="keywords"
                    @on-search="handleSearch"
                    @on-select="handleSelect"
                    placeholder="请输入周边地址或建筑名称"
                    icon="ios-search"
                >
                    <Option v-for="(item,index) in list" :value="item.name" :key="index">
                        <span class="demo-auto-complete-title">{{ item.name }}</span>
                    </Option>
                </AutoComplete>
            </div>
            <div  id="map-container" slot="content"></div>
            <div class="address-infos">
                <p>
                    <strong>经度：</strong>
                    <span v-text="selectedAddress.lat"></span>
                </p>
                <p>
                    <strong>纬度：</strong>
                    <span v-text="selectedAddress.lng"></span>
                </p>
                <p>
                    <strong>地址：</strong>
                    <span v-text="selectedAddress.address"></span>
                </p>
            </div>
            <div slot="footer" class="gd-map-footer">
                <Button type="info" @click="confirmSuccess">确定</Button>
                <Button @click="changeModal(false)">取消</Button>
            </div>
        </div>
    </Modal>
</template>
<script>
export default {
    props:{
        value:{
            type:Boolean,
            default:false
        },
        mapClass:{
            type:String
        },
        mapKey:{
            type:String,
            default:"0daec96378e35c68264b802514dc972a"
        },
        address:{
            type:String,
            default:""
        }
    },
    computed:{
        classNames(){
            return `map-container ${this.mapClass} `
        }
    },
    watch:{
        value(val){
            this.showModal=val
        },
        address(val){
            if(val){
                this.keywords=val
                this.handleSearch()
            }
        }
    },
    data(){
        return {
            scripts:[
               `https://webapi.amap.com/maps?v=1.4.14&key=${this.mapKey}`,
               `https://webapi.amap.com/maps?v=1.4.14&key=${this.mapKey}&plugin=AMap.Autocomplete`,
               `https://webapi.amap.com/maps?v=1.4.14&key=${this.mapKey}&plugin=AMap.ToolBar`,
               `https://webapi.amap.com/ui/1.0/main.js?v=1.0.11`
            ],
            keywords:"",
            center:[106.504962,29.533155],
            list:[],
            autoCompleteInstance:null,
            mapInstance:null,
            placeSearchInstance:null,
            showModal:false,
            selectedAddress:{
                address:"",
                lat:"",
                lng:"",
                detail:null
            }
        }
    },
    methods:{
        handleSearch(){
            if(this.autoCompleteInstance){
                this.autoCompleteInstance.search(this.keywords,(status,result)=>{
                    this.list=result.tips
                })
            }
        },
        handleSelect(name){
            const list=this.list
            let lnglat={}
            for(let i=0;i<list.length;i++){
                
                if(list[i].name==name){
                    lnglat=list[i].location
                    break
                }
            }
            this.mapInstance.setZoomAndCenter(18,[lnglat.lng,lnglat.lat])
        },
        loadJsAsync(src){
            return new Promise((resolve,reject)=>{
                // js没有被加载 则创建script标签异步加载js 并 挂载全局对象
                let body = document.head;
                let jsNode = document.createElement('script');
                    jsNode.setAttribute('type', 'text/javascript');
                    jsNode.setAttribute('src', src);
                    body.appendChild(jsNode);

                    jsNode.onload=()=>{
                        resolve(true)
                    }

                    jsNode.onerror=()=>{
                        reject(false) 
                    }
                    
            })
        },
        initMap(){
            AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker)=>{
                this.mapInstance = new AMap.Map('map-container', {
                    zoom: 16,
                    scrollWheel: true,
                    center:this.center
                })

                var positionPicker = new PositionPicker({
                    mode: 'dragMap',
                    map: this.mapInstance
                })

                positionPicker.on('success', (positionResult)=>{
                    this.selectedAddress={
                        address:positionResult.address,
                        lat:positionResult.position.lat,
                        lng:positionResult.position.lng,
                        detail:positionResult
                    }
                    // this.keywords=positionResult.address
                    // this.handleSearch()
                })
                positionPicker.on('fail', function(positionResult) {
                    
                })
                positionPicker.start(this.mapInstance.getBounds().getSouthWest())

                AMap.plugin('AMap.Autocomplete',()=>{
                    this.autoCompleteInstance = new AMap.Autocomplete({
                        city: '全国'
                    });
                })

                AMap.service(["AMap.PlaceSearch"], ()=> {
                    this.placeSearchInstance = new AMap.PlaceSearch({
                        pageSize: 10,    // 每页10条
                        pageIndex: 1    // 获取第一页
                    })
                });

            })
        },
        confirmSuccess(){
            this.$emit("success",this.selectedAddress)
        },
        changeModal(state){
            this.$emit("input",state)
        }
    },
    async mounted(){
        if(!window.mapWasLoaded){
            const res1 = await  this.loadJsAsync(this.scripts[0])
            const res2 = await  this.loadJsAsync(this.scripts[1])
            const res3 = await  this.loadJsAsync(this.scripts[2])
            const res4 = await  this.loadJsAsync(this.scripts[3])
            if(res1&&res2&&res3&&res4){
                window.mapWasLoaded=true
            }else{
                this.$emit("onError","js load error!")
            }
        }

        this.initMap()
    }
}
</script>
<style lang="less">
    .gd-map{
        position: relative;
        .input-search-area{
            padding-top: 25px;
            padding-bottom: 15px;
        }
        #map-container{
            height: 300px;
            border-radius: 5px;
            padding: 5px;
            border:1px solid  rgb(220, 222, 226);
        }
        .address-infos{
            margin-top: 15px;
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 5px;
            p{
                font-size: 13px;
            }
        }
        .gd-map-footer{
            padding-top: 15px;
        }
    }
</style>
