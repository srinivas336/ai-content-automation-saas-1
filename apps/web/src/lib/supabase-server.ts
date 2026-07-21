import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

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

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!isValidEnvValue(supabaseUrl) || !isValidEnvValue(publishableKey)) {
    return createMissingSupabaseClient();
  }

  return createServerClient(supabaseUrl!, publishableKey!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },

      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        );
      },
    },
  });
}