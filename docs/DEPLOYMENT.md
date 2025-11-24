# Deployment Guide

This guide covers deploying the Hi Yarndi application using two popular methods: **Vercel (via GitHub)** and **Google Cloud Run**.

---

## Option 1: GitHub via Vercel (Recommended)

Vercel is the optimal platform for deploying Vite/React applications. It connects directly to your GitHub repository and handles building, hosting, and continuous deployment automatically.

### Steps

1.  **Push to GitHub**
    *   If you haven't already, initialize a git repository and push your code to GitHub.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    # Create a new repo on GitHub, then:
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

2.  **Connect to Vercel**
    *   Log in to [Vercel](https://vercel.com) using your GitHub account.
    *   On the dashboard, click **"Add New..."** > **"Project"**.
    *   Find your repository in the list and click **"Import"**.

3.  **Configure Project**
    *   **Framework Preset:** Vercel should automatically detect `Vite`.
    *   **Root Directory:** `./` (default).
    *   **Build Command:** `npm run build` (default).
    *   **Output Directory:** `dist` (default).

4.  **Add Environment Variables**
    *   Expand the **"Environment Variables"** section.
    *   Add your Google Gemini API key:
        *   **Key:** `API_KEY`
        *   **Value:** `[Your Actual API Key]`
    *   *Note: This is required for the Chat Widget to function.*

5.  **Deploy**
    *   Click **"Deploy"**.
    *   Vercel will run the build process. Once complete, your site will be live, and any future commits to the `main` branch will automatically redeploy the site.

---

## Option 2: Google Cloud Run

Cloud Run is ideal if you prefer a containerized approach (Docker). Since this is a static site, we will use a multi-stage Docker build to compile the React app and serve it using Nginx.

### 1. Create `Dockerfile`
Create a file named `Dockerfile` in the root of your project:

```dockerfile
# Stage 1: Build the React Application
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Accept API_KEY as a build argument to bake it into the static site
ARG API_KEY
ENV API_KEY=$API_KEY

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html
# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Create `nginx.conf`
Create a file named `nginx.conf` in the root of your project. This ensures that refreshing a page (like `/shop`) doesn't return a 404 error by redirecting requests to `index.html`.

```nginx
server {
    listen 80;
    
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        # Fallback to index.html for Single Page Application routing
        try_files $uri $uri/ /index.html;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

### 3. Build & Deploy with Google Cloud CLI

Run the following commands in your terminal:

1.  **Login and Set Project**
    ```bash
    gcloud auth login
    gcloud config set project [YOUR_PROJECT_ID]
    ```

2.  **Enable Required Services**
    ```bash
    gcloud services enable cloudbuild.googleapis.com run.googleapis.com
    ```

3.  **Build the Image**
    Replace `[YOUR_API_KEY]` with your actual Gemini API key.
    ```bash
    gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/hi-yarndi --build-arg API_KEY=[YOUR_API_KEY]
    ```

4.  **Deploy to Cloud Run**
    ```bash
    gcloud run deploy hi-yarndi \
      --image gcr.io/[YOUR_PROJECT_ID]/hi-yarndi \
      --platform managed \
      --region us-central1 \
      --allow-unauthenticated
    ```

After deployment, Google Cloud will provide a Service URL where your app is accessible.
