type DemoUser = {
  id: string;
  email: string;
  name: string;
};

const AUTH_KEY = 'saas-bootcamp-demo-auth';

function isBrowser() {
  return typeof window !== 'undefined';
}

function setCookie(name: string, value: string) {
  if (!isBrowser()) return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=3600`;
}

function clearCookie(name: string) {
  if (!isBrowser()) return;
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function getCurrentUser(): DemoUser | null {
  if (!isBrowser()) return null;
  const stored = window.localStorage.getItem(AUTH_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as DemoUser;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(getCurrentUser());
}

export async function signIn(email: string, password: string) {
  if (!email || !password) {
    return { ok: false, error: 'Email and password are required.' };
  }

  if (!isBrowser()) {
    return { ok: false, error: 'Browser storage is unavailable.' };
  }

  const user: DemoUser = {
    id: `demo-${Date.now()}`,
    email,
    name: email.split('@')[0],
  };

  window.localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  setCookie('auth', user.email);
  return { ok: true, user };
}

export async function signUp(email: string, password: string) {
  if (!email || !password) {
    return { ok: false, error: 'Email and password are required.' };
  }

  if (password.length < 6) {
    return { ok: false, error: 'Password should be at least 6 characters.' };
  }

  return signIn(email, password);
}

export function signOut() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(AUTH_KEY);
  clearCookie('auth');
}
