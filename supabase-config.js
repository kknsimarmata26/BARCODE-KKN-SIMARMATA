// ============================================
// KONFIGURASI SUPABASE
// Ganti dengan milikmu!
// ============================================
const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

// Inisialisasi client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================
// Helper: cek login, redirect ke login kalau belum
// ============================================
async function checkAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
        return null;
    }
    return session;
}

// ============================================
// Helper: logout
// ============================================
async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html';
}
