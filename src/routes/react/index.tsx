import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MUIButton, MUISlider, TableApp } from '~/integrations/react/mui';
import { SafeAuthKit, SafeAuthProviderType } from '@safe-global/auth-kit'
export async function panda(){
    try{
        const safeAuthKit = await SafeAuthKit.init(SafeAuthProviderType.Web3Auth, {
            chainId: '0x5',
            authProviderConfig: {
                rpcTarget: "https://goerli.blockpi.network/v1/rpc/public",
                clientId: 'BF1Htzuyp_M9JJz1GD8ee0_2adbqswS9zEW1qbbnY7xC4jp962lVy3C564kHQRnag0eeZHuiXy6SgoQ3MToO80w',
                network: 'testnet',
                theme: 'light'  // The theme to use for the Web3Auth modal
            }
        })
        await safeAuthKit?.signIn();
    }catch(e){
        console.log(e.message)
    }

}
export default component$(() => {


  return (
    <>
 

    <MUIButton client:only host:onClick$={()=>panda()}>
    sadsajdjsak
    </MUIButton>
    
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React',
};
