const angelique = new Journal($('#author').val());


$(document).ready(function () {
    // let idNo = 0;
    // id='id" + idNo + "' <-- This would go in line 17 after the first 'div'

    $('#form').submit(function (submitEvent) {

        submitEvent.preventDefault();
        
        angelique.journalEntry($("#date").val(), $("#title").val(), $("#entry").val(), $("#tags").val());
        let tagField = $("#tags").val().split(",").join("</div>  <div class='tagStyle'>");
        // localStorage.setItem("blog", JSON.stringify(angelique.myBlog));

        // idNo++;
        $('#main').append("<div class='blogDisplay hidden'><p><i>" + $("#date").val() + "</i><br>Author:   " + $("#author").val() + "</p><h1>" + $("#title").val() + "</h1><br><p>" + $('#entry').val() + "</p><br>" + "<p>Tags:     <div class='tagStyle'>" + /*$("#tags").val()*/ tagField + "</div></p></div><br>");

    })


})


function Journal(author) {
    this.myBlog = [];
    this.author = author;
    this.journalEntry = function (date, title, content, tags) {
        var newEntry = new Entry(date, title, content, tags);
        this.myBlog.push(newEntry);
    }
}

function Entry(date, title, content, tags) {

    this.date = date;
    this.title = title;
    this.content = content;
    this.tags = [];
}


//Below are hard-coded objects that I suppose I don't need, but I am attached because I made them myself. They are my babies don't kill my babies!! *cries* *sobs* *woe* *despair*

// var dayOne = new journalEntry("April 03", "First Day Jitters", "Angelique", "I was really looking forward to starting classes today. They went well! I hope I learn a lot!");

// var dayTwo = new journalEntry("April 04", "Still Good", "Angelique", "You know how sometimes things are awesome on day 1 and then start to suck? Not so this time!");

// var weekTwo = new journalEntry("April 12", "Challenge", "Angelique", "Whew! This shit is getting difficult! I am hanging in there though!");

// var dayEight = new journalEntry(null, null, null, null);

// console.log(myBlog);