
import { ConnectButton, ConnectEmbed, useActiveAccount, useConnect, useConnectModal, UseConnectModalOptions, useWalletBalance } from "thirdweb/react";
import { client } from "../app/client";


export const Wallet=()=>{
    const { connect, isConnecting } = useConnectModal();
    async function handleConnect() {
                  const wallet = await connect({ client }); // opens the connect modal
                  console.log("connected to", wallet);
                }
    return(
        <>
        <button onClick={handleConnect}>Connect</button>
           </>
    )
    //     const { connect, isConnecting } = useConnectModal();   
//     async function handleConnect() {
//       const wallet = await connect({ client }); // opens the connect modal
//       console.log("connected to", wallet);
//     }
//     return <button onClick={handleConnect}>Connect</button>;
//   }
 
}

// export function ConnectWallet() {
//         const { connect, isConnecting } = useConnectModal();
//         const account = useActiveAccount();
      
//         async function handleConnect() {
//           const wallet = await connect({ client }); // opens the connect modal
//           console.log("connected to", wallet);
//         }
      
//         return (
//           <div>
//             {account ? (
//               <p>Connected as: {account.address}</p>
//             ) : (
//               <button onClick={handleConnect} disabled={isConnecting}>
//                 {isConnecting ? 'Connecting...' : 'Connect Wallet'}
//               </button>
//             )}
//           </div>
//         );
//       }



//     const { connect, isConnecting } = useConnectModal();
  
//     async function handleConnect() {
//       const wallet = await connect({ client }); // opens the connect modal
//       console.log("connected to", wallet);
//     }
  
//     return (
//       <button onClick={handleConnect} disabled={isConnecting}>
//         {isConnecting ? 'Connecting...' : 'Connect Wallet'}
//       </button>
//     );
//   }
  
//   export function ActiveWallet() {
//     const account = useActiveAccount();
  
//     return (
//       <div>
//         {account ? (
//           <p>{account.address.slice(0,5)}....{account.address.slice(-7,-1)}</p>
//         ) : (
//           <ConnectWallet />
//         )}
//       </div>
//     );
//   }



// export function ConnectWallet() {
//     const { connect, isConnecting } = useConnectModal();   
//     async function handleConnect() {
//       const wallet = await connect({ client }); // opens the connect modal
//       console.log("connected to", wallet);
//     }
//     return <button onClick={handleConnect}>Connect</button>;
//   }
// export function ActiveWallet(){
//     const account=useActiveAccount();
//     return(
//         <div>
//             <ConnectWallet/>
//             {account&&(<ConnectButton client={client}/>)}
//         </div>
//     )
