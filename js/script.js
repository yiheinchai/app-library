//function showApps () {
//    var name = document.getElementById("name").value;
//    var industry = document.getElementById("industry").value;
//    var bad_message = "Hey Dumbass " + name + "!" + " I can't believe you come from the " + industry + " industry! Hahahaha";
//    var good_message = "Hi " + name + "!" + " Wow! You come from the " + industry + " industry! I am very impressed!";
//
//
//    if (industry.length < 6) {
//        document.querySelector("#content").textcontent = good_message;
//    }
//
//    else {
//        document.querySelector("#content").textcontent = bad_message;
//    }
//
//}
//
//
$(function() {
    $("#navbar-toggler").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#navbarNav").collapse('hide');
        }
    });
});


function showApps () {
    var name = document.getElementById("name").value;
    var industry = document.getElementById("industry").value;
    var bad_message = "Hey Dumbass " + name + "!" + " I can't believe you come from the " + industry + " industry! Hahahaha";
    var good_message = "Hi " + name + "!" + " Wow! You come from the " + industry + " industry! I am very impressed!";




    
    if (industry.length < 6) {
        document.querySelector("#content").textContent = good_message;
    }
    
    else {
        document.querySelector("#content").textContent = bad_message;
    }
    

}

//function sayHello () {
//    var name =
//     document.getElementById("name").value;
//     var message = "<h2>Hello " + name + "!</h2>";
//  
//    // document
//    //   .getElementById("content")
//    //   .textContent = message;
//  
//    document.getElementById("content").innerHTML = message;
//  
//    if (name === "student") {
//      var title = 
//        document
//          .querySelector("#title")
//          .textContent;
//      title += " & Lovin' it!";
//      document
//          .querySelector("h1")
//          .textContent = title;
//    }
//  }