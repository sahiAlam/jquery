// add css
$("h1").css("color", "red")

// add class or id name 
$("h1").addClass("big_title");

// text 
$("h1").text("Bye")

// innerhtml
// $("button").html("hiii")

// change or add attribute
$("a").attr("href", "https://yahoo.com");


// adding eventListner
$("h1").click(() => {
    $("h1").css("color", "blue")
})

$("h1").on("mouseover", () => {
    $("#para").text("Hovering on the heading")
})

$("button").click(() => {
    $("h1").css("color", "purple");
});


$("input").keypress((e) => {
    console.log(e.key)
})

$(document).keypress((e) => {
    $("h1").html(e.key)
})


// add element
let isShow = true;

$("#show_btn").click(() => {
    // $(".box").hide();
    // $(".box").show();
    // $(".box").toggle();
    // $(".box").fadeOut();
    // $(".box").fadeIn();
    // $(".box").fadeToggle();
    // $(".box").shideUp();
    // $(".box").shideDown();
    $(".box").slideToggle();
    // $(".box").animate({opacity: 0.5});
})