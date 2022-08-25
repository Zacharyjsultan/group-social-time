const SUPABASE_URL = 'https://fjidvhxajekcfrrjsnla.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaWR2aHhhamVrY2ZycmpzbmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAxNDU2ODYsImV4cCI6MTk3NTcyMTY4Nn0._zi_gZoOt0ksKYa3J9htU9w6oH8ojf_WkKrLHWGaswo';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    // do we have a user?
    if (!user) {
        // path is different if we are at home page versus any other page
        const authUrl = location.pathname === '/' ? './auth/' : '../auth/';
        // include the current url as a "redirectUrl" search param so user can come
        // back to this page after they sign in...
        location.replace(`${authUrl}?redirectUrl=${encodeURIComponent(location)}`);
    }

    // return the user so can be used in the page if needed
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

function checkError({ data, error }) {
    // eslint-disable-next-line
    return error ? console.error(error) : data;
}

/* Data functions */

export async function uploadPhoto() {
    const uploadItem = event.target.files[0];
    const response = await client.storage
        .from('photos')
        .upload(`public/enterphotonamestringtemplate.png`, uploadItem);

    return checkError(response);
}

// const avatarFile = event.target.files[0]
// const { data, error } = await supabase.storage
//   .from('avatars')
//   .upload('public/avatar1.png', avatarFile)