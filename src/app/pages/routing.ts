import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'banner',
    loadChildren: () => import('./admin/banner/banner.module').then((m) => m.BannerModule)
  },
  {
    path: 'county',
    loadChildren: () => import('./admin/county/county.module').then((m) => m.CountyModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./admin/store/store.module').then((m) => m.StoreModule)
  },

  {
    path: 'document-type',
    loadChildren: () => import('./admin/document/document.module').then((m) => m.DocumentModule)
  },
  {
    path: 'skill',
    loadChildren: () => import('./admin/skill/skill.module').then((m) => m.SkillModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./admin/city/city.module').then((m) => m.CityModule)
  },
  {
    path: 'pincode',
    loadChildren: () => import('./admin/pincode/pincode.module').then((m) => m.PincodeModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./manager/category/category.module').then((m) => m.CategoryModule)
  },
  // {
  //   path: 'task-status',
  //   loadChildren: () => import('./manager/task-status/task-status.module').then((m) => m.TaskStatusModule)
  // },
  {
    path: 'task',
    loadChildren: () => import('./manager/task/task.module').then((m) => m.TaskModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./admin/user/user.module').then((m) => m.UserModule)
  },

  // route of project path



  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
