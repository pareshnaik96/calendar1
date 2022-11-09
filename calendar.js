const dt = new Date();

function  RenderDate(){

        dt.setDate(1);
        console.log(dt.getDate())

        const day = dt.getDay()

        const endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
        ).getDate();

        var prevDate = new new Date(
            dt.getFullYear(),
            dt.getMonth(),
            0
        ).getDate();

        var toDay = new Date()

        const months = [ 
            "January",
            "February", 
            "March", 
            "April", 
            "May",
            "June", 
            "July", 
            "August", 
            "September", 
            "October", 
            "November", 
            "December"
        ];

        document.getElementById("date_str").innerHTML = dt.toDateString()
        document.getElementById("month").innerHTML = months[dt.getMonth()]


        const cells = "";

        for( x=day;x>0;x--){
        cells +="<div class='prev_date'>"+ (prevDate - x + 1) +"</div>";
        }
        for(i=1;i<=endDate;i++){
            if( i==today.getDate() && dt.getMonth()== today.getMonth()){
                cells +="<div class='today'>"+ i +"</div>"; 
            }else{
                cells +="<div>"+ i +"</div>";
            }
        }

        document.getElementsByClassName("days")[0].innerHTML =  cells;
}

function moveDate(para){
      if(para =='prev'){
        dt.getMonth(dt.getMonth()-1)
      }else if(para =='next'){
        dt.getMonth(dt.getMonth()+1)
      }
      RenderDate()
}
