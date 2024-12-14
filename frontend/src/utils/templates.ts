// utils/contractTemplates.ts

const contractTemplates: Record<string, string> = {
    Freelancing: `
  This agreement is entered into by and between [Freelancer's Full Name] ("Freelancer") and [Client's Full Name/Company Name] ("Client"). 
  
  The Freelancer agrees to perform [specific service, e.g., "web design services"] for the Client, as detailed in the attached project description. The Client agrees to pay the Freelancer a total fee of [amount, e.g., "$1,000"], payable [payment terms, e.g., "50% upfront and 50% upon project completion"] to the following wallet: [Freelancer's crypto wallet address].
  
  Both parties agree that the Freelancer will retain ownership of all intellectual property until the full payment is received, after which the rights will be transferred to the Client. 
  
  In the event of a dispute, the parties agree to attempt mediation before seeking further action.
  
  By signing below, both parties acknowledge and agree to the terms outlined in this contract.
    `,
    "E-commerce": `
  This agreement is entered into by and between [Supplier's Full Name/Company Name] ("Supplier") and [Buyer's Full Name/Company Name] ("Buyer"). 
  
  The Supplier agrees to provide [product/service details, e.g., "100 units of custom t-shirts"] to the Buyer as described in the attached order specifications. The Buyer agrees to pay a total fee of [amount, e.g., "$2,500"], payable [payment terms, e.g., "50% upfront and 50% upon delivery"] to the following wallet: [Supplier's crypto wallet address].
  
  Both parties agree that the Supplier will retain ownership of the goods until full payment is received. The Buyer is responsible for inspecting the goods upon delivery and notifying the Supplier of any defects within [inspection period, e.g., "7 days"].
  
  In the event of a dispute, the parties agree to attempt mediation before seeking further action.
  
  By signing below, both parties acknowledge and agree to the terms outlined in this contract.
    `,
    Content: `
  This agreement is entered into by and between [Content Creator's Full Name] ("Content Creator") and [Client's Full Name/Company Name] ("Client"). 
  
  The Content Creator agrees to produce [specific content, e.g., "10 blog posts on technology trends"] for the Client, as detailed in the attached project description. The Client agrees to pay the Content Creator a total fee of [amount, e.g., "$1,500"], payable [payment terms, e.g., "50% upfront and 50% upon project completion"] to the following wallet: [Content Creator's crypto wallet address].
  
  Both parties agree that the Content Creator will retain ownership of all intellectual property until full payment is received, after which the rights will be transferred to the Client. The Client agrees to provide necessary input, feedback, and approvals in a timely manner to ensure project completion.
  
  In the event of a dispute, the parties agree to attempt mediation before seeking further action.
  
  By signing below, both parties acknowledge and agree to the terms outlined in this contract.
    `,
    "Blank Contract": `
  This agreement is entered into by and between [Party 1's Full Name/Company Name] ("Party 1") and [Party 2's Full Name/Company Name] ("Party 2"). 
  
  [Party 1] agrees to provide [specific service or product, e.g., "consulting services"] for [Party 2], as detailed in the attached description. [Party 2] agrees to pay [Party 1] a total fee of [amount, e.g., "$1,000"], payable [payment terms, e.g., "50% upfront and 50% upon completion"] to the following wallet: [Party 1's crypto wallet address].
  
  Both parties agree to retain ownership of their respective intellectual property and rights until the agreed-upon terms are fulfilled. The parties further agree to work collaboratively to address any issues or disputes that may arise during the course of this agreement.
  
  In the event of a dispute, the parties agree to attempt mediation before seeking further action.
  
  By signing below, both parties acknowledge and agree to the terms outlined in this contract.
    `,
  };
  
  export default contractTemplates;
  