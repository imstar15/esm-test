import Keyring from '@polkadot/keyring';
import { Mangata } from '@mangata-finance/sdk';

console.log('Keyring: ', Keyring);
console.log('Mangata: ', Mangata);

// // Dynamic import
// (async () => {
//   const DynacicMangataSDK = await import('@mangata-finance/sdk');
//   console.log('DynacicMangataSDK: ', DynacicMangataSDK);
// })();