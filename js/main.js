let countries = document.getElementById("countries");


async function getCountries() {
    try{
        let res = await fetch("https://ap-countries-api.vercel.app/name/%20?page=1&limit=270");
        let countriesData = await res.json();
        console.log(countriesData.data);
        
        countriesData?.data?.map((el) => {
            countries.innerHTML +=`
                 <a href="../pages/aboutct.html?name=${el.name.common}" class="group relative bg-[#FFFFFF] shadow-[0px_0px_7px_2px_#00000008] rounded-[5px_5px-5px]">
                    <img class="max-w-[350px] w-full h-[200px]" src="${el.flags.png}" alt="" />
                    <div class="py-[10px] px-[15px] flex flex-col gap-2">
                        <h3 class="font-bold text-[18px]">
                            ${el.name.common}
                        </h3>
                        <p class="pt-[10px] text-[14px] font-[600]">Population: <span class="text-[14px] font-[400]">${el.population}</span></p>
                        <p class="text-[14px] font-[600] text-gray-900">Region: <span class="text-[14px] font-[400]">${el.region}</span></p>
                        <p class="text-[14px] font-[600] text-gray-900">Capital: <span class="text-[14px] font-[400]">${el.capital[0]}</span></p>
                    </div>
                </a>
            `
        })
        
    }catch(err){
        console.log(err);
    }
}

getCountries();
