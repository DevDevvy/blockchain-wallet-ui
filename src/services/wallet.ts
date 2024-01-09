import axios from 'axios';

//send post to wallet, returns public key, private key, and address
export async function getWallet() {
    const response = await axios.post('http://localhost:8080/wallet');
    console.info(response.data);
    return response.data;
}