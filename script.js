$(document).ready(function() {

    $(".saveBtn").on("click", function() {
    
        // User Input........
    var value = $(this).siblings(".event").val();

    var time = $(this).parent().attr("id")
    
    
    
    localStorage.setItem(time, value);
    });
    
    
    

    //----Hours Reservation----.
    $( "#hr9 .event").val(localStorage.getItem("hr9"))
    $("#hr10 .event").val(localStorage.getItem("hr10"))
    $("#hr11 .event").val(localStorage.getItem("hr11"))
    $("#hr12 .event").val(localStorage.getItem("hr12"))
    $("#hr13 .event").val(localStorage.getItem("hr13"))
    $("#hr14 .event").val(localStorage.getItem("hr14"))
    $("#hr15 .event").val(localStorage.getItem("hr15"))
    $("#hr16 .event").val(localStorage.getItem("hr16"))
    $("#hr17 .event").val(localStorage.getItem("hr17"))
    
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    
    
    })