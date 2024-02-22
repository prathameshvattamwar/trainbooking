function proceed(event) {

    event.preventDefault();

    const journeyDate = document.getElementById("journeyDate").value;
    const fromStation = document.getElementById("fromStation").value;
    const toStation = document.getElementById("toStation").value;
    const frm = document.getElementById("bookingForm");
    const jd = document.getElementById("jd");
    const fromS = document.getElementById("fromS");
    const toS = document.getElementById("toS");
    const detailBox = document.querySelector(".journeyDetails");

    if (journeyDate === "" || fromStation === "0" || toStation === "0") {
        alert("Please provide all details");
        return false; 
    }
    else if(fromStation==toStation){
        alert("Both destiny can't be same");
        return false;
    }
    else{ 
        const dateParts = journeyDate.split("-");
        const dd = dateParts[2];
        const mm = dateParts[1];
        const yyyy = dateParts[0];

        alert("Form Submitted Successfully...");

        detailBox.style.display = "block";
        jd.innerHTML = dd + "/" + mm + "/" + yyyy;
        fromS.innerHTML = fromStation;
        toS.innerHTML = toStation;
        return true;
    }
}
function clearForm() {
    const frm = document.getElementById("bookingForm");
    const detailBox = document.querySelector(".journeyDetails");
    frm.reset();
    detailBox.style.display = "none";
}