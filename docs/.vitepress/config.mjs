import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [['link', {rel: 'icon', href: '/icon.png'}]],
    title: "Cine Fox",
    appearance: 'dark',
    description: "Cine Fox is an application built on cinepi-sdk, which allows users to make DIY movie cameras faster.",
    themeConfig: {
        logo: '/icon.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Document', link: '/cine-fox'},
            {text: 'Team', link: '/team'},
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {text: 'What is Cine Fox?', link: '/cine-fox'},
                    {text: 'Version', link: '/version'},
                ],
            },
            {
                text: 'Getting Start',
                collapsed: false,
                items: [
                    {
                        text: 'Hardware',
                        link: '/hardware',
                        collapsed: true,
                        items: [
                            {
                                text: "SBC's",
                                collapsed: true,
                                items: [
                                    {
                                        text: 'Raspberry Pi',
                                        link: '/pi',
                                    },
                                ]
                            },
                            {
                                text: "Image Sensor",
                                collapsed: true,
                                items: [
                                    {
                                        text: 'StarlightEye',
                                        link: '/starlighteye',
                                    },
                                    {
                                        text: 'OneInchEye',
                                        link: '/oneincheye',
                                    },
                                    {
                                        text:'Raspberry Pi HQ Camera',
                                        link:'hq_camera'
                                    }
                                ]
                            },
                            {
                                text: "Storage",
                                collapsed: true,
                                items: [
                                    {
                                        text: 'RPI5-CFE-Hat',
                                        link: '/cfehat',
                                        collapsed: true,
                                        items: [
                                            {
                                                text: 'DIY CFE-TypeB Card',
                                                link: '/cfe_card',
                                            }
                                        ]
                                    },
                                    {
                                        text: 'NVME Storage',
                                        link: '/nvme',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Software',
                        link: '/software',
                    },
                    {
                        text: 'Android App',
                        link: '/android',
                    },
                    {
                        text: 'iOS App',
                        link: '/ios',
                    },
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Cine-Fox'},
            {icon: 'discord', link: 'https://discord.com/invite/Wz9sQU3skC'}
        ],
        lastUpdated: true,

        editLink: {
            pattern: 'https://github.com/Cine-Fox/cine-fox.github.io/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    }
})
