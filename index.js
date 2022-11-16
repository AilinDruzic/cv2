const eduList = document.querySelector(".eduList");
const expList = document.querySelector(".expList");
const langList = document.querySelector(".langList");

async function getData() {
    let url = "data.json";
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

    data.education.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element.school + " - " + "<strong>" + element.subject + "</strong>" + " " + "<em>" + element.time + "</em>"
        eduList.appendChild(li);
    });
    
    
    data.experience.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = "<strong>" + element.position + "</strong>" + " - " + element.location + " " + "<em>" + element.time + "</em>";
        expList.appendChild(li);

    });

    data.languages.forEach(element => {
        
        let li = document.createElement("li");
        li.innerHTML = element.language + " - " + element.level;
        langList.appendChild(li);

    });


}
getData();


