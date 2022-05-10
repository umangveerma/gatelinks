import { PublicKey } from "@solana/web3.js";

const verifyAddress = async (address: string) => {
  try {
    const publicKey = new PublicKey(address);

    return PublicKey.isOnCurve(publicKey);
  } catch {
    return false;
  }
};

export default verifyAddress;
