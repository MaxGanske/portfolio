console.log("running");

const homeInfo = document.getElementById("homeInfo");
const experiencesInfo = document.getElementById("experiencesInfo");

let homeOpen = true;
let experiencesOpen = false;
let projectsOpen = false;

function experiencesTab() {

    if(homeOpen){
        homeInfo.classList.add("is-hidden");
        experiencesInfo.classList.remove("is-hidden");
        homeOpen = false;
        experiencesOpen = true;
    }
}
function homeTab(){

    if(experiencesOpen) {
        homeInfo.classList.remove("is-hidden");
        experiencesInfo.classList.add("is-hidden");
        homeOpen = true;
        experiencesOpen = false;
    }
}