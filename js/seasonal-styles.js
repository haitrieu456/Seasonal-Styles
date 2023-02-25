$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        //make the season lower case
        season = season.toLowerCase();

        /*The colors of the seasonal images are as follows:
        Spring: #2B7129
        Summer: #EBA52B
        Fall: #A81124
        Winter: #005393*/

        switch(season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $(".heading").text("Spring are time for sunshine");
                $("document").ready(function(){
                    $("html").css("background-color","#2B7129")
                 });
                 
            break;

            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $(".heading").text("Suns out summer's out");
                $("document").ready(function(){
                    $("html").css("background-color","#EBA52B")
                 });
            break;

            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $(".heading").text("Fall is for falling in love");
                $("document").ready(function(){
                    $("html").css("background-color","#A81124")
                 });
            break;

            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $(".heading").text("Winter is to stay for warmth");
                $("document").ready(function(){
                    $("html").css("background-color","#005393")
                 });
            break;

            default:
                $("#logo").attr("src","images/four-seasons.gif");
                $(".heading").text("To everything, there is a season..");
                $("document").ready(function(){
                    $("html").css("background-color","black")
                 });
        }  
    });
 });

 $("document").ready(function(){
    $('#dateForm').submit(function(e){//handle form submission event
        e.preventDefault();//stop default submission
        var datetext = $('input[name=dateField]').val();//grab data from textbox
        var formDate = new Date(datetext);//create a date from form input
        var today = new Date();
        
        if(formDate > today)
        {
            alert(datetext + " is in the future!");
        }else{
            alert(datetext + " is in the past!");
        }
    });
});