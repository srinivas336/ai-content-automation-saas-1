import { createBrowserClient } from "@supabase/ssr";

function createMissingSupabaseClient() {
  return {
    auth: {
      getUser: async () => ({
        data: { user: null },
        error: { message: "Supabase is not configured." },
      }),
      getSession: async () => ({
        data: { session: null },
        error: { message: "Supabase is not configured." },
      }),
      signOut: async () => ({
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
  } as any;
}

function isValidEnvValue(value?: string) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().toLowerCase() !== "undefined" &&
    value.trim().toLowerCase() !== "null"
  );
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

export const supabase =
  isValidEnvValue(supabaseUrl) && isValidEnvValue(publishableKey)
    ? createBrowserClient(supabaseUrl!, publishableKey!)
    : createMissingSupabaseClient();