console.log("running");

const homeInfo = document.getElementById("homeInfo");
const experiencesInfo = document.getElementById("experiencesInfo");

const profilePicture = document.getElementById("profilePicture");
const initialInfoText = document.getElementById("initialInfoText");
const topSection = document.getElementById("topSection");
const topSectionBottom = document.getElementById("topSectionBottom");



function experiencesTab() {
 
      //   homeInfo.classList.add("is-hidden");
      //  experiencesInfo.classList.remove("is-hidden");

        profilePicture.classList.add("minimize-img");
        initialInfoText.classList.add("minimize-initial-text");

        setTimeout(()=> {
            topSection.classList.add("move-initial-Background-up");
            topSectionBottom.classList.add("move-Initial-section-bottom-up");
        }, 1500);
}

function homeTab(){

        homeInfo.classList.remove("is-hidden");
        experiencesInfo.classList.add("is-hidden");
    
}