const base = {
    get() {
                return {
            url : "http://localhost:8080/chongwuyongpinpingtai/",
            name: "chongwuyongpinpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chongwuyongpinpingtai/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "宠物用品电子商务平台"
        } 
    }
}
export default base
