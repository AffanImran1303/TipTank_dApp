// import { cache, useEffect, useRef, useState } from "react";

// interface CryptoIconMap{
//     [symbol:string]:string;
// }

// const useCryptoIcons=(symbols:string[])=>{
//     const [cryptoIcons,setCryptoIcons]=useState<CryptoIconMap>({});
//     const cache= useRef({});

//     useEffect(()=>{
//         const fetchIcons=async()=>{
//             const icons:CryptoIconMap={};
//             for(const symbol of symbols){
//                 if(cache.current[symbol]){
//                     icons[symbol]=cache.current[symbol];
//                 }
//                 else{
        
//                 try{
//                     const response=await fetch(`/api/crypto-icon?currency=${symbol}`);
//                     const data =await response.json();
//                     icons[symbol]=data.iconUrl||'' ;
//                 }
//                 catch(error){
//                     console.error(`Error Fetching icon for ${symbol}`,error);
//                 }
//             }
//         }
//             setCryptoIcons(icons);
//         };
//         fetchIcons();
//     },[symbols]);
//     return cryptoIcons;
// }

// export default useCryptoIcons;


// import { symbol } from "framer-motion/client";
// import { useEffect, useState } from "react";

// interface CryptoIcon{
//     symbol:string;
//     icon:string;
// }

// const useCryptoIcons=()=>{
//     const [cryptoIcons,setCryptoIcons]=useState<Record<string,string>>({});
//     useEffect(()=>{

//         const fetchCryptoUrl=async (currency:string)=>{
//             const response=await fetch(`/api/crypto-icons/${currency}`);
//             if(!response.ok){
//                 console.error("Failed to fetch currency icon:",response.statusText);
//                 return null;
//             }
//             const data = await response.json();
//             return data.iconUrl || null;
//         };
//         // const fetchCoins=async()=>{
//         //     try{
//         //         const response= await fetch("https://api.coingecko.com/api/v3/coins/list");
//         //         const data:{id:string;symbol:string;name:string}[] = await response.json();

//         //         const iconPromises=data.map(async(coin)=>{
//         //             const coinResponse=await fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}`);
//         //             const coinData = await coinResponse.json();
//         //             return {symbol:coin.symbol.toUpperCase(),icon:coinData.image?.thumb||""};
//         //         });

//         //         const icons:CryptoIcon[]=await Promise.all(iconPromises);
//         //         const iconMap=icons.reduce((acc,coin)=>{
//         //             acc[coin.symbol]=coin.icon;
//         //             return acc;
//         //         },{} as Record<string,string>);
//         //         setCryptoIcons(iconMap);
//         //     }catch(error){
//         //         console.log("Error fetching crypto icons:",error);
//         //     }
//         // };
//         // fetchCryptoUrl();
//     },[]);

//     return cryptoIcons;
// };
// export default useCryptoIcons;