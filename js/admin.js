fetch("../json/admin.json")
    .then((res) => res.json())
    .then((data) => outputAdmin(data.users))
    .then((data) => {
        // let falseItems = data.filter((item) => item.status === false);

        let eachAdmin = [...document.querySelectorAll(".admin")];

        let foundItem = eachAdmin.find((item) => item.dataset.id == 3);
        let foundItem2 = eachAdmin.find((item) => item.dataset.id == 4);
        foundItem.classList.add("inactive");
        foundItem2.classList.add("inactive");
        console.log(foundItem.childNodes[6]);
    });

function outputAdmin(data) {
    let div = "";
    data.forEach((dat) => {
        div += `
             <div class="row admin py-4 mb-1 border-rounded" data-id =${dat.id} >
                <div class="col-3 ">
                    <span id="image"><img
                src=${dat.img}/></span
            ><span class="name ">${dat.user1}</span>
                </div>
                <div class="col-3">
                    <span class="gmail"> ${dat.gmail}</span>
                </div>
<div class="col-3">${dat.role}</div>
                <div class="col-2">
                    <span class="status">
              <div class="row">
                <div class="col-lg-1 col-md-2 mt-2">
                    <div class="circle "></div> </div>
                  <div class="col-lg-9 col-md-10">
                      <span data-id= ${dat.id}class="statusPara">Active</span>
                 
                </div>
              </div>
                </div>
                <div class="col-1">
                           <i class="bi bi-three-dots-vertical text-blue"></i>
                </div>
            </div>
           `;
        document.getElementById("eachAdmin").innerHTML = div;
    });
    return data;
}