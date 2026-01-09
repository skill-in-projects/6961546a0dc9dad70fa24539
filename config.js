// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi6961546a0dc9dad70fa24539-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
