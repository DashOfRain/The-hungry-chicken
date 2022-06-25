$(".leave").click(function() {
    $(".leave-group").toggle();
    $(".beginning").toggle();
    $("body").css("background-color", "brown");
});

$(".stay").click(function() {
    $(".stay-with-group").toggle();
    $(".beginning").toggle();
});

$(".stay-outside").click(function() {
    $(".late-night-chick").toggle();
    $(".leave-group").toggle();
    $("body").css("background-color", "black");
    $("body").css("color", "brown");
});

$(".investigate").click(function() {
    $(".the-encounter").toggle();
    $(".late-night-chick").toggle();
});

$(".curious-chicken").click(function() {
    $(".beginning").toggle();
    $("body").css("background-color", "white");
    $("body").css("color", "black");
    $(".the-encounter").toggle();
});
$(".return-home").click(function() {
    $(".leave-group").toggle();
    $("body").css("background-color", "white");
    $(".seeker-of-food").toggle();
});

$(".the-seeker").click(function() {
    $(".seeker-of-food").toggle();
    $(".beginning").toggle();
});
$(".ignore").click(function() {
    $(".sitting-duck").toggle();
    $(".late-night-chick").toggle();
});

$(".the-runner").click(function() {
    $(".sitting-duck").toggle();
    $(".the-coward").toggle();
});

$(".Coward").click(function() {
    $(".the-coward").toggle();
    $("body").css("background-color", "white");
    $("body").css("color", "black");
    $(".beginning").toggle();
});

$(".honorable").click(function() {
    $(".for-honor").toggle();
    $(".sitting-duck").toggle();
});