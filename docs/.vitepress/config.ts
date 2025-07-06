// deno-lint-ignore-file no-explicit-any
import { DefaultTheme, defineConfig } from 'vitepress';
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
    localIconLoader,
} from 'vitepress-plugin-group-icons';

const ideas: DefaultTheme.SidebarItem[] = [
    {
        text: "Mark's Favorites",
        items: [
            {
                text: 'SOC-0002: Create a Torrent Automation System',
                link: '/ideas/0002-torrent-automation',
            },
            {
                text: 'SOC-0036: Write a VS Code extension for Claude Code',
                link: '/ideas/0036-hive',
            },
            {
                text: 'SOC-0033: Develop a Custom Food Feed for Bluesky',
                link: '/ideas/0033-bsky-food-feed',
            },
        ],
    },
    {
        text: 'All Ideas',
        items: [
            {
                text: "SOC-0003: Fill in VS Code's Swift Development Gaps",
                link: '/ideas/0003-swift-vs-code',
            },
            {
                text: 'SOC-0005: Create Macros to Customize <code>Swift.Codable</code>',
                link: '/ideas/0005-codable-macros',
            },
            {
                text: 'SOC-0011: Create a Multiplatform ORM for Swift Utilizing Macros',
                link: '/ideas/0011-swift-orm',
            },
            {
                text: 'SOC-0028: Implement a Jetpack Compose Renderer for GTK 4',
                link: '/ideas/0028-gtk-jetpack-compose',
            },
            {
                text: 'SOC-0017: Create a Custom Desktop Environment for Linux',
                link: '/ideas/0017-linux-desktop-environment',
            },
            {
                text: 'SOC-0018: Create a Custom Linux Distro',
                link: '/ideas/0018-linux-distro',
            },
            {
                text: 'SOC-0016: Create a Custom Android Launcher',
                link: '/ideas/0016-android-launcher',
            },
            {
                text: 'SOC-0030: Build an Android UI Bridge for Swift',
                link: '/ideas/0030-android-ui-bridge-swift',
            },
            {
                text: 'SOC-0031: Build Native Apps using the Deno TypeScript Runtime',
                link: '/ideas/0031-deno-native',
            },
            {
                text: 'SOC-0034: Create a Unified Cross-Platform Package Management Framework',
                link: '/ideas/0034-x-platform-package-management',
            },
            {
                text: 'SOC-0035: Prototype a YikYak Clone as an AT Protocol Service',
                link: '/ideas/0035-yikyak-clone',
            },
        ],
    },
];

export default defineConfig({
    title: 'Summer of Code',
    markdown: {
        theme: {
            dark: 'github-dark',
            light: 'github-light',
        },
        config(md) {
            md.use(groupIconMdPlugin);
        },
    },
    vite: {
        plugins: [groupIconVitePlugin({
            customIcon: {
                '.swift': localIconLoader(import.meta.url, '../public/swift.svg'),
                '.kt': localIconLoader(import.meta.url, '../public/kotlin.svg'),
            },
        }) as any],
        server: { port: 1337 },
    },
    themeConfig: {
        logo: {
            light: '/sun-logo.svg',
            dark: '/moon-logo.svg',
        },
        outline: { level: 'deep' },
        nav: [
            { text: 'Ideas', link: '/ideas/0002-torrent-automation', activeMatch: '/ideas/' },
        ],
        sidebar: ideas,
    },
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700;1,800;1,900&display=swap',
            },
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
            },
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
            },
        ],
    ],
});
