// add css
$("h1").css("color", "red")

// add class or id name 
$("h1").addClass("big_title");

// text 
$("h1").text("Bye")

// innerhtml
$("button").html("hiii")

// change or add attribute
$("a").attr("href", "https://yahoo.com");


// adding eventListner
$("h1").click(() => {
    $("h1").css("color", "blue")
})

// $("h1").on("mousover", () => {
    
// })

$("button").click(() => {
    $("h1").css("color", "purple");
});


$("input").keypress((e) => {
    console.log(e.key)
})

$(document).keypress((e) => {
    $("h1").html(e.key)
})

// for(let i=0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", () => {
//         document.querySelector("h1").style.color = "black";
//     });
// }