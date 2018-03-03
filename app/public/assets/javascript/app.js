$("#submit").on("click", function () {

    // Form Validation
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".chosen-select").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
                                                                   
    }

    // If all required fields are filled
    if (validateForm()) {
        // Create object for user data
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        // Grab the URL of the website
        var currentURL = window.location.origin;

        // AJAX post the data to the friends API
        $.post(currentURL + "/api/friends", userData, function (data) {
            alert("working");
        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
    return false;
});