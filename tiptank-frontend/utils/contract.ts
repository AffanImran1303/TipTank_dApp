import { getContract } from "thirdweb";
import { chain } from "../src/app/chain";
import { client } from "../src/app/client";
import {contractABI} from './contractABI.ts';

const contractAddress="0x7156ab47Dc3D91665C519fAA989335332c8b98Ee";

export const contract=getContract({
    client:client,
    chain:chain,
    address:contractAddress,
    abi:contractABI
});