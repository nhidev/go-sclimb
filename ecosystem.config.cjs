
module.exports = {
  apps : [{
    name: '24dot7-landing-page',
    cwd: '/home/ubuntu/24dot7/web/current/apps/landing-page',
    script: 'pnpm',
    args: 'start',
    exec_mode: 'cluster',
    env_development: {
      NODE_ENV: 'development',
      DEPLOY_ENV: 'development',
      PORT: 3000,
    },
    env_staging: {
      NODE_ENV: 'staging',
      DEPLOY_ENV: 'staging',
      PORT: 3000,
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
  }],

  deploy : {
    development : {
      user : 'ubuntu',
      host : '18.138.13.26',
      ref  : 'origin/canary',
      repo : 'git@git.lecle.co.kr:product-division/outsourcing/24dot7/24dot7_fe.git',
      path : '/home/ubuntu/24dot7/web',
      'post-setup': 'pnpm i; pnpm build --filter landing-page; pm2 restart ecosystem.config.cjs --env development',
      'post-deploy' : 'pnpm i; pnpm build --filter landing-page; pm2 restart ecosystem.config.cjs --env development',
      ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
    },
    staging : {
      user : 'ubuntu',
      host : '54.251.255.22',
      ref  : 'origin/canary',
      repo : 'git@git.lecle.co.kr:product-division/outsourcing/24dot7/24dot7_fe.git',
      path : '/home/ubuntu/24dot7/web',
      'post-setup': 'pnpm i; pnpm build --filter landing-page; pm2 restart ecosystem.config.cjs --env staging',
      'post-deploy' : 'pnpm i; pnpm build --filter landing-page; pm2 restart ecosystem.config.cjs --env staging',
      ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
    },
    production : {
      user : 'ubuntu',
      host : '3.38.59.157',
      ref  : 'origin/canary',
      repo : 'git@git.lecle.co.kr:product-division/outsourcing/24dot7/24dot7_fe.git',
      path : '/home/ubuntu/24dot7/web',
      'post-setup': 'pnpm i; pnpm build --filter landing-page; pm2 restart ecosystem.config.cjs --env production',
      'post-deploy' : 'pnpm i; pnpm build --filter landing-page; pm2 restart ecosystem.config.cjs --env production',
      ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
    }
  }
};