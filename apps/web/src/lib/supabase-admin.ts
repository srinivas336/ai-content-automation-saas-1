import { createClient } from "@supabase/supabase-js";

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

function isValidEnvValue(value?: string) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().toLowerCase() !== "undefined" &&
    value.trim().toLowerCase() !== "null"
  );
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

export const supabaseAdmin =
  isValidEnvValue(supabaseUrl) && isValidEnvValue(serviceRoleKey)
    ? createClient(supabaseUrl!, serviceRoleKey!)
    : createMissingSupabaseClient();