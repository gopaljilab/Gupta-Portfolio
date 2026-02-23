import { useMutation } from "@tanstack/react-query";
import { api, type ContactSubmitInput, type ContactSubmitResponse } from "@shared/routes";

export function useSubmitContact() {
  return useMutation<ContactSubmitResponse, Error, ContactSubmitInput>({
    mutationFn: async (data) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        let errorMsg = "Failed to send message";
        try {
          const errorData = await res.json();
          errorMsg = errorData.message || errorMsg;
        } catch (e) {
          // Ignore parse errors
        }
        throw new Error(errorMsg);
      }
      
      return res.json();
    },
  });
}
