const getData=async()=>{

    let clientId ="141ad48a8c03765"
    let NewHeader = new Headers();
    NewHeader.append("Authorization", `Client-ID ${clientId}`);
    let methodObj = {
        method: 'GET',
        headers: NewHeader,
        redirect: 'follow'
    };
    //https://api.imgur.com/3/gallery/top/viral/day/1?showViral=true&mature=false&album_previews=true

    let  data= await fetch("https://api.imgur.com/3/gallery/top/viral/day/1?showViral=true&mature=false&album_previews=true",methodObj)
    let res=await data.json()
    // console.log(res.data[0].images[0].gifv)
    
    showData(res.data)
    let imgsArr=res.data
    
}
getData()


const showData=(data)=>{
   data.map((elem)=>{
       if(elem.images){
           if(elem.images.length>=0){
               let arr=elem.images
               
               for(let i=0;i<arr.length;i++){
                   if(arr[i].type==="image/png"||arr[i].type==="image/jpeg"){
                    let cardCont= document.getElementById("cardsDivCont")
                    
                    
                   }
               }
           }
       }
   })
}