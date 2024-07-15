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
                ],
            },
            {
                text: 'Getting Start',
                items: [
                    {
                        text: 'Hardware',
                        link: '/hardware',
                        collapsed: true,
                        items: [
                            {
                                text: "SBC's",
                                collapsed: true,
                                link: '/sbc',
                                items: [
                                    {
                                        text: 'Raspberry Pi 5',
                                        link: '/pi',
                                    },
                                ]
                            },
                            {
                                text: "Power Management",
                                link: '/power_management',
                            },
                            {
                                text: "Image Sensor",
                                collapsed: true,
                                link: '/image_sensor',
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
                                        link:'/hq_camera'
                                    }
                                ]
                            },
                            {
                                text: "Storage",
                                collapsed: true,
                                link: '/storage',
                                items: [
                                    {
                                        text: 'RPI5 CFE Hat',
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
                                        text: 'External SSD',
                                        link: '/external_ssd',
                                    },
                                    {
                                        text: 'NVMe SSD Hat',
                                        link: '/nvme',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Software',
                        link: '/software',
                        collapsed: true,
                        items: [
                            {text: 'Version', link: '/version'},
                        ]
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
            {
                text: 'Editing',
                items: [
                    {text: 'DaVinci Resolve', link: '/davinci'},
                ],
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Cine-Fox'},
            {icon: 'discord', link: 'https://discord.com/invite/Wz9sQU3skC'}
        ],
        lastUpdated: true,
    }
})
