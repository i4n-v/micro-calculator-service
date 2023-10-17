API=$API_URL

echo "window.API_URL='$API'" > ./env.js

exec "$@"
