var crew=[
    {
        "fullName": "Jackson 'Jax' Teller",
        "patch": "President",
        "image": "jax.jpg"
    },
    {
        "fullName": "Filip 'Chibs' Telford",
        "patch": "V.President",
        "image": "chibs.jpg"
    },
    {
        "fullName": "Happy Lowman",
        "patch": "Sgt At Arms",
        "image": "happy.jpg"
    },
    {
        "fullName": "Harry 'Opie' Winston",
        "patch": "Men of Mayhem",
        "image": "opie.jpg"
    }
]

for(i=0; i<crew.length; i++){
    var imagine = $('<img>');
    $(imagine).attr("src", crew[i].image);
    $(imagine).attr("height", "300");
    $(imagine).attr("width", "300");
    $(imagine).addClass("crew_images");
    $("body").append($(imagine));
    $("body").append("<div class='crew_message'>" + crew[i].fullName + " - " + crew[i].patch + "</div>");
}