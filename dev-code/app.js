
var Controller ={
    init: function(){
        View.show(data);
        View.init();
    },
    GetAllRunner: function(){
        return data;
    },
    SelectRunner: function(cat){
        var sel = [];
        if(cat=="all"){
            return data;
        }
        for(var i=0;i<data.length; i++){
            if(data[i].category==cat){
                sel.push(data[i]);
            }
        }
        return sel;
    }
}

var View ={
    init: function(){
        this.buttonstart();
    },
    show: function(Runners){
        $("#top-selfiers").html("");
        for(var i=0; i<Runners.length;i++){
            console.log(i);
            $("#top-selfiers").append(
                "<li>"+
                "<div class='selfie'>"+
                    "<img src='"+Runners[i].pic+"'>"+         
                "</div>"+
                "<div class='stats'>"+
                    "<h2>"+Runners[i].name+" <small>"+Runners[i].category+"</small></h2>"+
                    "<strong>Time</strong>  "+Runners[i].time+""+ 
                    "<strong>Selfies</strong> "+Runners[i].sefies+""+  
                "</div> "+
                "<div class='badge'>"+
                   " #"+(i+1)+""+
                "</div>"+
                "</li> "
            );
        }
    },
    buttonstart: function(){
        $("#btn-filter").click(function() {
            var run = [];
            console.log("pera");
            var e = $("#sel").val();
            run=Controller.SelectRunner(e);
            View.show(run);
            console.log(e);
        })
    }
}
Controller.init();



