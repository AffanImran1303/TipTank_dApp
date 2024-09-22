import {createThirdwebClient} from 'thirdweb';

const CLIENT_ID=process.env.NEXT_PUBLIC_CLIENT_ID as string;

export const client = createThirdwebClient({
    clientId:"e1dc4ce9c06e724635126911811fee53",
})