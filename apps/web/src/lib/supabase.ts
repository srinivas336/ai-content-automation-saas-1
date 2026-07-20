import { createBrowserClient } from "@supabase/ssr";

function createMissingSupabaseClient() {
  return {
    auth: {
      getUser: async () => ({
        data: { user: null },
        error: { message: "Supabase is not configured." },
      }),
    },
    from: () => ({
      insert: () => ({
        select: () => ({
          single: async () => ({
            data: null,
            error: { message: "Supabase is not configured." },
          }),
        }),
      }),
      select: () => ({
        eq: () => ({
          order: async () => ({
            data: [],
            error: { message: "Supabase is not configured." },
          }),
        }),
      }),
      delete: () => ({
        eq: async () => ({
          data: null,
          error: { message: "Supabase is not configured." },
        }),
      }),
      update: () => ({
        eq: async () => ({
          data: null,
          error: { message: "Supabase is not configured." },
        }),
      }),
    }),
  };
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase = supabaseUrl && publishableKey
  ? createBrowserClient(supabaseUrl, publishableKey)
  : createMissingSupabaseClient();