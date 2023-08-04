 import envConfg from './envConfig.js';
 export default{
    data(){
        return {
            showSelection: false,
        visible: false,
        cTgt: envConfg.cTgt,
        userIndexCode: 'admin', // 用户点位权限
        defaultTreeCode: '', // 默认选中某棵树  ac7ca3b29eb84a2da4e978d5c04aeab1
        dataView: false, // 是否点有位数据查看
        cascadeCode: '0', // 是否级联 ‘1’级联，‘0’非级联,如果没有级联状态，key请不要
      }
    },
    methods: {
        closeSelectPointDlg() {
            this.showSelection = false
        },
        row4_case1_click(){
            this.row4.className = 'largeHeiCls'
            this.row4.case0 = true
        },
        row4_case2_click(){
            this.row4.className = 'miniCls'
            this.row4.case0 = true
        },
        row4_case3_click(){
            this.row4.className = 'largeWHCls'
            this.row4.case0 = true
        },
        row4_close(){
            this.row4.className = ''
            this.row4.case0 = false
        },
    }
}
 