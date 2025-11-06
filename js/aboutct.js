let path = new URLSearchParams(location.search);
let commoName = path.get("name");

let singleCountry = document.getElementById("singleCountry");

async function getAboutct() {
    try{
        let res = await fetch("https://ap-countries-api.vercel.app/name/%20?page=1&limit=270");
        let single = await res.json();
        let data = single?.data;
        let result = data.filter((el) => el.name.common === commoName);
        console.log(result);

        singleCountry.innerHTML = "";
        result.map((el)=> {
            singleCountry.innerHTML+=`
                        <img class="max-w-[800px] w-full object-cover" src="${el.flags.png}" alt="">
                        <div class="flex flex-col gap-[7px]">
                            <h1 class="font-bold text-[32px] text-[#111517]">${el.name.common}</h1>
                            <p class="font-[600] text-[16px]">Native name: <span class="font-[400]">${el.name.common}</span></p>
                            <div class="flex items-center gap-[60px]">
                                <div class="flex flex-col gap-5">
                                    <p class="font-[600] text-[16px]">Population: <span class="font-[400]">${el.population}</span></p>
                                    <p class="font-[600] text-[16px]">Region: <span class="font-[400]"></span>${el.region}</p>
                                    <p class="font-[600] text-[16px]">Sub Region: <span class="font-[400]">${el.subregion}</span></p>
                                </div>
                                <div class="flex flex-col gap-5">
                                    <p class="font-[600] text-[16px]">Top level Domain: <span class="font-[400]">${el.tld[0]}</span></p>
                                    <p class="font-[600] text-[16px]">Currensies: <span class="font-[400]"></span></p>
                                    <p class="font-[600] text-[16px]">Languages: <span class="font-[400]">${el.languages.ara}</span></p>
                                </div>
                            </div>
                            <p class="font-[600] text-[16px]">Capital: <span class="font-[400]">${el.capital[0]}</span></p>
                            <p class="font-[600] text-[16px]">Border Countries: <span class="font-[400]">${el.borders}</span></p>
                        </div>
            `
        })
        
    }catch(err){
        console.log(err);
    }
}
getAboutct()