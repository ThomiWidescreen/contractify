export const enhanceWithAI = async (type: string, content: string) => {
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contractType: type,
          content: content,
        }),
      });
  
      if (!response.ok) {
        const { error } = await response.json();
        alert(`Error enhancing contract: ${error}`);
        return;
      }
  
      const { enhancedContent } = await response.json();
  
      alert("Contract content enhanced successfully!");

      return enhancedContent
    } catch (error) {
      console.error(error);
      alert("An error occurred while enhancing the contract.");
    }
  };
  