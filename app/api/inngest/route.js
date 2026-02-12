import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDelete, syncUserUpdation } from "@/app/Config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserDelete,
    syncUserUpdation
    /* your functions will be passed here later! */
  ],
});