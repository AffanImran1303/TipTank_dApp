
import { ConnectButton, darkTheme } from "thirdweb/react";
import { client } from "../app/client";

export const Wallet=()=>{
    return(
        <>
        <ConnectButton
        client={client}
        theme={darkTheme({
            colors:{
                primaryButtonBg:"#0F172A",
                primaryButtonText:"white",
                connectedButtonBg:"black",
                connectedButtonBgHover:"#0F172A",
                // modalBg:"black",
            },
        })}
        />
        </>
    )
}
