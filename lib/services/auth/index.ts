import { supabaseBrowser } from "@/lib/supabase/client";
import { AuthProvider } from "@/types";

const supabase = supabaseBrowser();

export async function signUpWithEmail(email: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
}

export async function signInWithOAuth(provider: AuthProvider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }
  
  return data.user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  
  if (error) throw error;
}
