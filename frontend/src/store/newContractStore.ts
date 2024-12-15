import { atom } from 'nanostores';

// Define the type for contract data
export interface ContractData {
  type: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
  contractorWallet: string;
  contracteeWallet: string;
  arbitrators: string[];
  chooseRandomArbitrators: boolean;
  amount: string;
  currency: string;
}

// Define the store to hold form data
export const formDataStore = atom<Partial<ContractData>>({});

/**
 * Updates the store with new data.
 * @param {Partial<ContractData>} data - The data to append.
 */
export function updateFormData(data: Partial<ContractData>): void {
  formDataStore.set({
    ...formDataStore.get(),
    ...data,
  });
}

/**
 * Retrieves the current form data.
 * @returns {Partial<ContractData>} - The entire form data object.
 */
export function getFormData(): Partial<ContractData> {
  return formDataStore.get();
}

/**
 * Clears all form data in the store.
 */
export function clearFormData(): void {
  formDataStore.set({});
}

// Example usage when moving to the next step
// updateFormData({ name: 'The Best Contract', amount: '1000' });
// updateFormData({ currency: 'USDC', contractorWallet: '0x12345...' });
