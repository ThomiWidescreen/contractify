import { address, abi } from '@/constants/CrossChainEscrow'
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'

export const useNewGame = () => {
    const { data: hash, writeContract, isPending, isError, error } = useWriteContract()
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

    if (isError) {
        console.error('Error accepting game: ',error)
    }

    const createNewGame = async () => {
        try {
            await writeContract({ address: address, abi: abi, functionName: 'newGame' })
        } catch (error) {
            console.error('Error creating new game: ',error)
            return { error }
        }
    }

    return { createNewGame, isPending, isConfirming, isSuccess, hash }
}