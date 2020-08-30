/*this code is to loop through and change which div info is displayed in the section 4 panel. so when you click on one div item the info displayed corresponds to the list item clicked while the rest are hidden */
let li_elements = document.querySelectorAll(".wrapper_top ul li");
let item_elements = document.querySelectorAll(".item");

for(let i = 0; i < li_elements.length; i++) {//used a for loop to loop through the list elements.
    li_elements[i].addEventListener("click", function(){//added an eventlistener
        li_elements.forEach(function(li){
            li.classList.remove("active");
        })
        this.classList.add("active");
        let li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item){
            item.style.display = "none";
        })
        if(li_value == "list"){
            document.querySelector("." + li_value).style .display = "block";
        } else if(li_value == "profile"){
            document.querySelector("." + li_value).style .display = "block";
        } else if(li_value == "people"){
            document.querySelector("." + li_value).style .display = "block";
        } else {
            console.log("");
        }
    });
}