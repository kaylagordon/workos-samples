const appsData = [
  { 
    category: 'SSO + Events', 
    language: 'Node.js',
    codeToCopy: 'cd && cd example-apps/node-example-applications/node-sso-example && code . && nodemon index.js',
    url: 'http://localhost:8000'
  },
  { 
    category: 'SSO', 
    language: 'TypeScript',
    codeToCopy: 'cd && cd example-apps/typescript-example-applications/typescript-sso-example && code . && nodemon index.ts',
    url: 'http://localhost:8000'
  },
  { 
    category: 'SSO', 
    language: '.NET',
    codeToCopy: 'cd && cd example-apps/dotnet-example-applications/dotnet-sso-example && code . && dotnet run',
    url: 'https://localhost:5001'
  },
  { 
    category: 'Directory Sync & Webhooks', 
    language: 'Node.js',
    codeToCopy: 'cd && cd example-apps/node-example-applications/node-directory-sync-example && code . && nodemon index.js',
    url: 'http://localhost:8000'
  },
  { 
    category: 'AuthKit', 
    language: 'React',
    codeToCopy: 'cd && cd example-apps/react-authkit-example && code . && npm run dev',
    url: 'http://localhost:5173/'
  },
  { 
    category: 'AuthKit', 
    language: 'Next.js',
    codeToCopy: 'cd && cd example-apps/next-authkit-example && code . && npm run dev',
    url: 'http://localhost:3000/'
  },
  { 
    category: 'AuthKit', 
    language: 'Basic',
    codeToCopy: 'cd && cd example-apps/authkit && code . && npm run dev',
    url: 'http://localhost:3000/'
  },
  { 
    category: 'B2B Starter Kit - Entitlements', 
    language: 'Next.js',
    codeToCopy: 'cd && cd example-apps/next-b2b-starter-kit && code . && pnpm run dev',
    url: 'http://localhost:3000/'
  },
]

export default appsData;
