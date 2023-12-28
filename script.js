console.log("running");

const homeInfo = document.getElementById("homeInfo");
const experiencesInfo = document.getElementById("experiencesInfo");

const profilePicture = document.getElementById("profilePicture");
const initialInfoText = document.getElementById("initialInfoText");
const topSection = document.getElementById("topSection");
const topSectionBottom = document.getElementById("topSectionBottom");
const aboutMeSection = document.getElementById("homeInfo");

//Experiences
const experiences = document.getElementById("experiencesInfo");
const experience1 = document.getElementById("experience1");
const experience2 = document.getElementById("experience2");
const experience3 = document.getElementById("experience3");

function experiencesTab() {
 
      //   homeInfo.classList.add("is-hidden");
      //  experiencesInfo.classList.remove("is-hidden");
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
        setTimeout(() => {
            experiences.classList.remove("is-hidden");
            experience1.classList.add("move-experience-left-to-right");
            experience2.classList.add("move-experience-right-to-left");
            experience3.classList.add("move-experience-left-to-right");
        }, 1200);
        setTimeout(() => {
            aboutMeSection.classList.add("is-hidden");
        }, 2000);
}

function homeTab(){

       moveExperiencesAway();
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

function moveExperiencesAway(){

    experience1.classList.add("move-experience-left-to-right-reverse");
    experience2.classList.add("move-experience-right-to-left-reverse");
    experience3.classList.add("move-experience-left-to-right-reverse");

    setTimeout(()=> {
        experience1.classList.remove("move-experience-left-to-right");
        experience2.classList.remove("move-experience-right-to-left");
        experience3.classList.remove("move-experience-left-to-right");

        experience1.classList.remove("move-experience-left-to-right-reverse");
        experience2.classList.remove("move-experience-right-to-left-reverse");
        experience3.classList.remove("move-experience-left-to-right-reverse");
        experiences.classList.add("is-hidden");
    }, 1500);
}