console.log("running");

const homeInfo = document.getElementById("homeInfo");
const experiencesInfo = document.getElementById("experiencesInfo");
const projectsInfo = document.getElementById("projectsInfo");

const profilePicture = document.getElementById("profilePicture");
const initialInfoText = document.getElementById("initialInfoText");
const topSection = document.getElementById("topSection");
const topSectionBottom = document.getElementById("topSectionBottom");
const aboutMeSection = document.getElementById("homeInfo");

//Experiences
const experience0 = document.getElementById("experience0");
const experience1 = document.getElementById("experience1");
const experience2 = document.getElementById("experience2");
const experience3 = document.getElementById("experience3");

//Projects
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");

//Pages
let homeOpen = true;
let experiencesOpen = false;
let projectsOpen = false;

function experiencesTab() {

    let animTime = 1200;
        if(homeOpen){
            minimizeInitialInfo();

        }
        if(projectsOpen) {
            moveProjectsAwayExperiences();
            animTime = 300;
        }

        setTimeout(() => {
            experiencesInfo.classList.remove("is-hidden");
            experience0.classList.add("move-experience-left-to-right")
            experience1.classList.add("move-experience-right-to-left");
            experience2.classList.add("move-experience-left-to-right");
            experience3.classList.add("move-experience-right-to-left");
        }, animTime);
        setTimeout(() => {
            aboutMeSection.classList.add("is-hidden");
        }, 2000);

        homeOpen = false;
        experiencesOpen = true;
        projectsOpen = false;
}

function homeTab(){

       if(experiencesOpen){
        moveExperiencesAway();
       }
       if(projectsOpen) {
        moveProjectsAwayHome();
       }

       if(!homeOpen) {
       aboutMeSection.classList.remove("is-hidden");
       aboutMeSection.classList.remove("move-about-me");
       aboutMeSection.classList.add("move-about-me-reverse");

       setTimeout(() => {
       topSection.classList.add("move-initial-Background-down");
       topSectionBottom.classList.add("move-Initial-section-bottom-down");
       
       setTimeout(()=> {
           topSection.classList.remove("move-initial-Background-up");
           topSectionBottom.classList.remove("move-Initial-section-bottom-up");
           initialInfoText.classList.add("reverse-Inital-text-info");
           profilePicture.classList.add("reverse-profile-picture");
       }, 700);
    }, 500);
    }

       homeOpen = true;
       experiencesOpen = false;
       projectsOpen = false;
}

function projectsTab() {

       if(homeOpen) {
        minimizeInitialInfo();

        setTimeout(() => {
            projectsInfo.classList.remove("is-hidden");
            project1.classList.add("move-experience-left-to-right");
            project2.classList.add("move-experience-right-to-left");
            project3.classList.add("move-experience-left-to-right");
        }, 1200);
        setTimeout(() => {
            aboutMeSection.classList.add("is-hidden");
        }, 2000);

       }
       if(experiencesOpen) {
          moveExperiencesAway();
            projectsInfo.classList.remove("is-hidden");
            project1.classList.add("move-experience-right-to-left");
            project2.classList.add("move-experience-left-to-right");
            project3.classList.add("move-experience-right-to-left");
       }

       homeOpen = false;
       experiencesOpen = false;
       projectsOpen = true;

}

function moveExperiencesAway(){

    experience0.classList.add("move-experience-left-to-right-reverse")
    experience1.classList.add("move-experience-right-to-left-reverse");
    experience2.classList.add("move-experience-left-to-right-reverse");
    experience3.classList.add("move-experience-right-to-left-reverse");

    setTimeout(()=> {
        experience0.classList.remove("move-experience-left-to-right")
        experience1.classList.remove("move-experience-right-to-left");
        experience2.classList.remove("move-experience-left-to-right");
        experience3.classList.remove("move-experience-right-to-left");

        experience0.classList.remove("move-experience-left-to-right-reverse")
        experience1.classList.remove("move-experience-right-to-left-reverse");
        experience2.classList.remove("move-experience-left-to-right-reverse");
        experience3.classList.remove("move-experience-right-to-left-reverse");
        experiencesInfo.classList.add("is-hidden");
    }, 500);
}

function moveProjectsAwayHome(){
    project1.classList.add("move-experience-left-to-right-reverse");
    project2.classList.add("move-experience-right-to-left-reverse");
    project3.classList.add("move-experience-left-to-right-reverse");

    setTimeout(()=> {
        project1.classList.remove("move-experience-left-to-right");
        project2.classList.remove("move-experience-right-to-left");
        project3.classList.remove("move-experience-left-to-right");

        project1.classList.remove("move-experience-left-to-right-reverse");
        project2.classList.remove("move-experience-right-to-left-reverse");
        project3.classList.remove("move-experience-left-to-right-reverse");
        projectsInfo.classList.add("is-hidden");
    }, 500);
}
function moveProjectsAwayExperiences(){
    project1.classList.add("move-experience-right-to-left-reverse");
    project2.classList.add("move-experience-left-to-right-reverse");
    project3.classList.add("move-experience-right-to-left-reverse");

    setTimeout(()=> {

        project1.classList.remove("move-experience-right-to-left-reverse");
        project2.classList.remove("move-experience-left-to-right-reverse");
        project3.classList.remove("move-experience-right-to-left-reverse");
        projectsInfo.classList.add("is-hidden");
    }, 1500);
}

function minimizeInitialInfo() {

        initialInfoText.classList.remove("reverse-Inital-text-info");
        profilePicture.classList.remove("reverse-profile-picture");
        profilePicture.classList.add("minimize-img");
        initialInfoText.classList.add("minimize-initial-text");

        setTimeout(()=> {
            topSection.classList.remove("move-initial-Background-down");
            topSectionBottom.classList.remove("move-Initial-section-bottom-down");
            topSection.classList.add("move-initial-Background-up");
            topSectionBottom.classList.add("move-Initial-section-bottom-up");
        }, 1000);

        setTimeout(() => {
            aboutMeSection.classList.remove("move-about-me-reverse");
            aboutMeSection.classList.add("move-about-me");
        }, 1100);
        
}

