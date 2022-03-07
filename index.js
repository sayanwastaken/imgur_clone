const getData = async () => {
  let clientId = "141ad48a8c03765";
  let NewHeader = new Headers();
  NewHeader.append("Authorization", `Client-ID ${clientId}`);
  let methodObj = {
    method: "GET",
    headers: NewHeader,
    redirect: "follow",
  };
  //https://api.imgur.com/3/gallery/top/viral/day/1?showViral=true&mature=false&album_previews=true

  let data = await fetch(
    "https://api.imgur.com/3/gallery/top/viral/day/1?showViral=true&mature=false&album_previews=true",
    methodObj
  );
  let res = await data.json();
  // console.log(res.data[0].images[0].gifv)

  showData(res.data);
  let imgsArr = res.data;
};
getData();

const showData = (data) => {
  data.map((elem) => {
    if (elem.images) {
      if (elem.images.length >= 0) {
        let arr = elem.images;

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].type === "image/png" || arr[i].type === "image/jpeg") {
            let cardCont = document.getElementById("cardsDivCont");
            let singleCard = document.createElement("div");
            singleCard.setAttribute("class", "singleCard");
            let cardImg = document.createElement("div");
            cardImg.setAttribute("class", "cardImg");
            let img = document.createElement("img");
            img.src = arr[i].link;
            cardImg.appendChild(img);
            let cardLikes = document.createElement("div");
            cardLikes.setAttribute("class", "cardLikes");
            let likesTitle = document.createElement("div");
            likesTitle.setAttribute("class", "likesTitle");
            let h3= document.createElement("h5");
            likesTitle.style.textAlign="center"
            likesTitle.append(h3)
            h3.innerText=elem.title
            h3.style.marginTop="10px"
            let likesLogos = document.createElement("div");
            likesLogos.setAttribute("class", "likesLogos");
            cardLikes.append(likesTitle, likesLogos);
            singleCard.append(cardImg, cardLikes);
            cardCont.append(singleCard);
            break;
          }
        }
      }
    }
  });
};
