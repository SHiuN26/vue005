var alldata=["pen","pineapple","apple","pen"];

$(document).ready(function () {
    var vm =new Vue({
        el: "#app",
        data: {
            fruits: alldata,
            status: ""
        }
    })
});