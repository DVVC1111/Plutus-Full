let filterArray = [];

let courseInfo = [{
    id: 1,
    title: "Course Title 1",
    src: "/img/finance.png",
    type: "Video",
    desc: "This is the short description of the course."
},
{
    id: 2,
    title: "Course Title 2",
    src: "/img/finance.png",
    type: "Flipcards",
    desc: "This is the short description of the course."
},
{
    id: 3,
    title: "Course Title 3",
    src: "/img/finance.png",
    type: "Video",
    desc: "This is the short description of the course."
},
{
    id: 4,
    title: "Course Title 4",
    src: "/img/finance.png",
    type: "Video",
    desc: "This is the short description of the course."
},
{
    id: 5,
    title: "Course Title 5",
    src: "/img/finance.png",
    type: "Flipcards",
    desc: "This is the short description of the course."
},
{
    id: 6,
    title: "Course Title 6",
    src: "/img/finance.png",
    type: "Video",
    desc: "This is the short description of the course."
}  

]

displayCourse(courseInfo); 

// function to show the course
function displayCourse(currCourse){

    document.getElementById("card").innerText = "";

    for(var i=0; i<currCourse.length; i++){
        document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3">
            <div class="card p-3 ps-3 pe-5" style="width: 27vw; height:45vh; border-radius:15px;">
                
                <div style="display: flex; flex-direction: row;">
                    <img src="${currCourse[i].src}" width="35px" height="35vh" style="margin-left:5%; margin-right:7vw; margin-bottom:5vh;"/>
                    <h4 class="text-capitalize text-left">${currCourse[i].title}</h4>
                </div>
                <p class="mt-2 text-center" style="margin-left:2%; margin-bottom:10vh">${currCourse[i].desc}</p>
                <hr style="width: 100%; margin-bottom:5vh;">
                <div style="display: flex; flex-direction: row; align-item:center;">
                    <p class="mt-2" style="margin-right:10vw;">${currCourse[i].type}</p>
                    <button class="btn btn-primary w-100">Begin</button>
                </div>
            </div>
        </div> 
    `
    }
    
}

//searching
document.getElementById("myinput").addEventListener("keyup", function(){
    let text = document.getElementById("myinput").value;

    filterArray = courseInfo.filter(function(a){
        if(a.title.includes(text)){
            return a.title;
        }
        else{
            if(filterArray == ""){
                document.getElementById("para").style.display= 'block';
                document.getElementById("card").innerHTML = "";
            }
            else{
                displayCourse(filterArray);
                document.getElementById("para").style.display = 'none';
            }
        }
    })
})