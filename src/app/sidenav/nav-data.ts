export const navbarData=[
    {
        routelink: 'dashboard',
        icon: 'fal fa-home',
        label : 'Dashboard'
    },
    {
        routelink: 'products',
        icon: 'fal fa-box-open',
        label : 'Products'
    },
    {
        routelink: 'statistics',
        icon: 'fal fa-chart-bar',
        label : 'Statistics'
    },
    {
        routelink: 'coupens',
        icon: 'fal fa-tags',
        label : 'Coupens',
        items:[
            {
                routeLink: 'coupens/list',
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            }
        ]
    },
    {
        routelink: 'pages',
        icon: 'fal fa-file',
        label : 'Pages'
    },
    {
        routelink: 'media',
        icon: 'fal fa-camera',
        label : 'Media'
    },
    {
        routelink: 'settings',
        icon: 'fal fa-cog',
        label : 'Settings'
    },
];