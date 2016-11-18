export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '控制面板',
            label: '这不是控制面板',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'appcontents',
        data: {
          menu:{
            title: '内容管理',
            label: '内容管理',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 10
          }
        }
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
    ]
  }
];
