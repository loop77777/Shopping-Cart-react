# Shopping-Cart-react
this is the shopping app implemented with react frontend and jwt authentication

## Deployment

### Backend on Render

Use `render.yaml` from the repository root, or create a Render Web Service manually:

- Root directory: `shopping-app-backend`
- Build command: `npm install`
- Start command: `npm start`

Set these Render environment variables:

- `MONGO_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: long random secret for JWT signing
- `CLIENT_URL`: Netlify frontend URL, for example `https://your-site.netlify.app`

### Frontend on Netlify

Use `netlify.toml` from the repository root, or configure manually:

- Base directory: `shopping-app`
- Build command: `npm run build`
- Publish directory: `shopping-app/build`

Set this Netlify environment variable:

- `REACT_APP_API_URL`: Render backend URL, for example `https://your-api.onrender.com`
