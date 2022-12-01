import './App.css'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';

function App() {

  async function get() {
    const connection = new Connection(clusterApiUrl("devnet"));
    const metaplex = new Metaplex(connection);
  
    const nft = await metaplex.nfts().findAllByOwner({
      owner: new PublicKey("E7mVt4rjuqFLWajKHStebUyzkQ9Z9NBQKpP2t3V9aEZ5"),
    })
  
    console.log(nft)
  
  }

  get()


  return (
    <div className="">
    </div>
  )
}

export default App
