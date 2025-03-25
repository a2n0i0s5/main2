
 const nav=document.querySelector(".nav1");

const dark=document.querySelector(".p1");
const bt=document.querySelector(".bt1");
dark.addEventListener("click", () => {
    if (document.body.style.backgroundColor=="whitesmoke"||document.body.style.backgroundColor==""){
        document.body.style.backgroundColor="#32394a";
        document.body.style.color="white";
        nav.style.backgroundColor="#32394a";
        dark.textContent="Light Mode";
        bt.style.backgroundColor="#32394a";
        document.querySelectorAll(".indice").forEach(div=>{
            div.style.backgroundColor="rgb(81 89 107)";
        });
    }else{
        document.body.style.backgroundColor="whitesmoke";
        document.body.style.color="black";
        nav.style.backgroundColor="white";
        dark.textContent="Dark Mode";
        bt.style.backgroundColor="black";
        document.querySelectorAll(".indice").forEach(div=>{
            div.style.backgroundColor="white";
        });

    }
    });
    const btregion=document.querySelector(".pw");
    const region1=document.querySelector(".region");
    const img1=document.querySelector(".show");
    const img2=document.querySelector(".i21");
    const avant=document.querySelector(".container");
    const arriere=document.querySelector(".secnv");
    btregion.addEventListener("click", () => {
        if(region1.style.display=="none"||region1.style.display==""){
            region1.style.display="flex ";
            img1.style.display="none";
            img2.style.display="block";
        }else{
            region1.style.display="none";
            img1.style.display="block";
            img2.style.display="none";
        }
    });
  
let allpays=[];
   async function recuperer(){
        try{
            const response=await fetch('data.json');
             allpays=await response.json();
            console.log(allpays);
          afficherpays(allpays);
            



        }catch(error){
            console.error("Error:", error);
            alert("Error occurred while fetching data. Please try again later.");
        }

    }

    function afficherpays(pays){
        const paysfiche=document.querySelector(".contries");
        paysfiche.innerHTML=""; 
        pays.forEach((item,index)=>{
            const div=document.createElement("div");
            div.classList.add("indice","cnt");
            div.innerHTML=` <img class="j1"  src=${item.flag}>
                <div class="info">
                <h1>${item.name}</h1>
                <p>Capital:${item.capital}</p>
                <p>Population: ${item.population}</p>
                <p>Area: ${item.area}</p>
                <p>region:${item.region}</p>
                </div>`
                const parent=document.querySelector(".contries");
                parent.appendChild(div);
                div.addEventListener("click", () => {
                    avant.style.display="none";
                    arriere.style.display="flex";
                    const div1=document.createElement("div");
                    div1.classList.add("info1");
                    const div2=document.createElement("div");
                    div2.classList.add("info12");
                    div2.innerHTML=`<h1>${item.name}</h1><p>Native Name:${item.nativeName}</p>
                    <p>Population: ${item.population}</p>
                    <p>region:${item.region}</p>
                    <p>Sub Region:${item.subregion}</p>
                    <p>Capital:${item.capital}</p>`
                    const div3=document.createElement("div");
                    div3.classList.add("info13");
                    let text1="";
                    let text2="";
                    if(item.currencies){
                        item.currencies.forEach(c=>text1+=c.name+" ");
                    }
                    if(item.languages){
                        item.languages.forEach(c=>text2+=c.name+" ");
                    }
                    text1=text1.slice(0,-2);
                    text2=text2.slice(0,-2);
                  
                    div3.innerHTML=`<p>Top Level Domain:${item.topLevelDomain}</p>
                    <p>Currencies:${text1}</p>
                    <p>Languages:${text2}</p>`
                    const div4=document.createElement("div");
                    div4.classList.add("info24");
                    let text3="";
                    if(item.borders){
                        item.borders.forEach(c=>text3+=c+" ");
                    }
                    text3=text3.slice(0,-2);
                    div4.innerHTML=`<p>Border Countries:${text3}</p>`
                    const parent1=document.querySelector(".secnv");
                    const parent2=document.createElement("div");
                    parent2.classList.add("info2");
                    div1.appendChild(div2);
                    div1.appendChild(div3);
                    parent2.appendChild(div1);
                    parent2.appendChild(div4);
                    const img1=document.createElement("div11");
                    img1.classList.add("img11");
                    img1.innerHTML=`<img src=${item.flag}>`;
                    parent1.appendChild(img1);
                    parent1.appendChild(parent2);

                    avant.style.display="none";
                    arriere.style.display="flex";


        });
    });
    };
    function check(region){
       let paysfil;
       if(region.length > 0){
           paysfil=allpays.filter(c=> region.includes(c.region.trim()));
       }else{
           paysfil=allpays;
       };
       afficherpays(paysfil);

    };
    document.querySelectorAll(".region input[type='checkbox']").forEach((check1)=>{
        check1.addEventListener("change", () => {
            let  region=[];
            document.querySelectorAll(".region input[type='checkbox']:checked").forEach((check2)=>{
                region.push(check2.id);
             
            });
            console.log("region est",region);
            check(region);   
           
        });
        

    });
    function afficherpays1(paysfixe){
        let afficher;
        if(paysfixe.length > 0){
            afficher=allpays.filter(c=> c.name.toLowerCase().includes(paysfixe.toLowerCase()));
        } else{
            afficher=allpays;
        };
        afficherpays(afficher);
    };
    const search=document.querySelector(".text");
    search.addEventListener("keyup", () => {
        afficherpays1(search.value);

    });









    recuperer();