import { supabase } from "./supabase.js";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    fullName,
    email,
    password,
  });
  if (error) {
    alert(error.message);
  }
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data };
}

export async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  return { data };
}
