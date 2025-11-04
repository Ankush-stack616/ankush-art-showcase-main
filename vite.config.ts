import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
//import { componentTagger } from "lovable-tagger";
import fs from 'fs';
import type { IncomingMessage, ServerResponse } from 'http';
import type { ViteDevServer, Plugin } from 'vite';

// Custom plugin to handle favicon and debug requests
const createFaviconDebugPlugin = (): Plugin => ({
  name: 'favicon-debug',
  configureServer(server: ViteDevServer) {
    // Check if we're running on the correct port
    const address = server.httpServer?.address();
    const port = typeof address === 'object' && address ? address.port : null;
    
    if (port && port !== 8081) {
      console.error(`Server is running on port ${port} instead of 8081. This may cause favicon issues.`);
    }

    server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
      if (req.url?.includes('favicon') || req.url?.endsWith('.ico')) {
        console.log('Favicon request detected:', {
          url: req.url,
          port: port,
          headers: req.headers,
          method: req.method,
          referrer: req.headers.referer || 'No referrer'
        });
        
        // Block the request with a 204
        res.writeHead(204, {
          'Cache-Control': 'no-store, no-cache, must-revalidate, private, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '-1',
          'X-Content-Type-Options': 'nosniff'
        });
        res.end();
        return;
      }
      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8081,
    strictPort: true, // This will make Vite fail if port 8081 is not available instead of trying another port
    fs: {
      strict: true,
      allow: ['..'],
      deny: ['.ico', '**/*.ico', '**/favicon.ico'],
    },
    middlewares: [],
    force: true, // Force the server to restart and clear caches
    watch: {
      // Don't serve .ico files even if they're created
      ignored: ['**/*.ico']
    },
  },
  plugins: [
    react(),
   // mode === "development" && componentTagger(),
    createFaviconDebugPlugin(),
    {
      name: 'remove-favicon',
      configureServer(server: ViteDevServer) {
        return;
      },
      transformIndexHtml(html: string) {
        // Remove ALL link tags that might be favicon-related
        html = html.replace(/<link[^>]*?(?:icon|favicon|apple-touch-icon|shortcut|\.ico)[^>]*>/gi, '');
        
        // Add our explicit no-favicon meta tags
        const noFaviconTags = `
    <link rel="icon" href="data:,">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="none">
    <meta name="msapplication-TileImage" content="data:,">
    <link rel="mask-icon" href="data:,">
    <link rel="apple-touch-icon" href="data:,">
    <link rel="shortcut icon" href="data:,">`;
        
        html = html.replace('</head>', `${noFaviconTags}\n  </head>`);
        return html;
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
