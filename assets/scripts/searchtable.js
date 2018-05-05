
    $("#search-btn").on("click", function () {
        var viewTables = $("#view-table").val().trim();

        // Using a RegEx Pattern to remove spaces from searchedCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        searchedCharacter = viewTables.replace(/\s+/g, "").toLowerCase();

        $.get("/api/tables/" + viewTables, function (data) {
            console.log(data);
            if (data) {
                $("#stats").show();
                $("#name").text(data.name);
                $("#phone").text(data.phone);
                $("#email").text(data.email);
                $("#party").text(data.party);
            } else {
                $("#name").text("Your reservation was not found."),
                    $("#stats").hide();
            }
        });
    });