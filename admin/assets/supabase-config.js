const SUPABASE_URL = 'https://uvvfwgcwmunfonolhmyy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_tXWL_Qh2FxIei7JNC7TzUA_a4pxOYn-';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkAuth() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
        return null;
    }
    return session;
}

async function logout() {
    if (!confirm('Yakin ingin keluar?')) return;
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html';
}

async function uploadImage(file, folder = 'umum') {
    const ext = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
    const { error } = await supabaseClient.storage
        .from('gambar-desa')
        .upload(fileName, file);
    if (error) throw error;
    const { data } = supabaseClient.storage
        .from('gambar-desa')
        .getPublicUrl(fileName);
    return data.publicUrl;
}

function formatTanggal(dateStr) {
    return new Date(dateStr).toLocaleDateString('id-ID', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}
