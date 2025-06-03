import { useSyncExternalStore } from 'react'
import { store } from '../configurStore/store'

const Balance = () => {

    const state = useSyncExternalStore(store.subscribe, store.getState)

    return (
        <div className='text-center uppercase'>
            <h1 className='text-[gold] font-bold text-8xl'>Iron Bank of Blockchain</h1>
            <h2 className='text-[firebrick] text-7xl'>Balance = {state.balance}</h2>
        </div>
    )
}

export default Balance