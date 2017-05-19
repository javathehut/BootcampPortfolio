const angelique = new Journal($('#author').val());


$(document).ready(function () {
    // let idNo = 0;
    // id='id" + idNo + "' <-- this would go in line 17 after the first word 'div'

    $('#form').submit(function (submitEvent) {

        submitEvent.preventDefault();

        angelique.journalEntry($("#date").val(), $("#title").val(), $("#entry").val(), $("#tags").val().split(", "));
        // console.log($("#tags").val());
        let tagField = $("#tags").val().split(", ").join("</div>  <div class='tagStyle'>");
        // localStorage.setItem("blog", JSON.stringify(angelique.myBlog));

        // idNo++;
        $('#main').append("<div class='blogDisplay hidden'><p><i>" + $("#date").val() + "</i><br>Author:   " + $("#author").val() + "</p><h1>" + $("#title").val() + "</h1><br><p>" + $('#entry').val() + "</p><br>" + "<p>Tags:     <div class='tagStyle'>" + tagField + "</div></p></div><br>");

    })

    //Search for entries by tag.
    $('#tagForm').submit((submitEvent) => {
        submitEvent.preventDefault();

        //loop through Entries
        for (let i = 0; i < angelique.myBlog.length; i++) {
            let tagField = angelique.myBlog[i].tags.join("</div>  <div class='tagStyle'>");
            let tagArray = angelique.myBlog[i].tags;
            // console.log(tagArray);

            //loop through tags property
            for (j = 0; j < tagArray.length; j++) {
                if (tagArray[j] == $("#tagQuery").val()) {

                    console.log($("#tagQuery").val()); //check it's working

                    //add the entries to the div
                    $('#aside').append("<div class='blogDisplay hidden'><p><i>" + angelique.myBlog[j].date + "</i><br>Author:   " + angelique.myBlog[j].author + "</p><h1>" + angelique.myBlog[j].title + "</h1><br><p>" + angelique.myBlog[j].entry + "</p><br>" + "<p>Tags:     <div class='tagStyle'>" + tagField + "</div></p></div><br>");
                }
            }
        }





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
    // this.idNo = idNo;
    this.date = date;
    this.title = title;
    this.content = content;
    this.tags = tags;
}