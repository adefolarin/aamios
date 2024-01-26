import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',redirectTo: 'intro', pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'payment/:id',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'event-info/:id',
    loadChildren: () => import('./event-info/event-info.module').then( m => m.EventInfoPageModule)
  },
  {
    path: 'prayers',
    loadChildren: () => import('./prayers/prayers.module').then( m => m.PrayersPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'video-detail/:id',
    loadChildren: () => import('./video-detail/video-detail.module').then( m => m.VideoDetailPageModule)
  },
  {
    path: 'volunteer/:id',
    loadChildren: () => import('./volunteer/volunteer.module').then( m => m.VolunteerPageModule)
  },
  {
    path: 'livetv/:id',
    loadChildren: () => import('./livetv/livetv.module').then( m => m.LivetvPageModule)
  },
  {
    path: 'livetv2/:id',
    loadChildren: () => import('./livetv2/livetv2.module').then( m => m.Livetv2PageModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('./podcast/podcast.module').then( m => m.PodcastPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'news-info/:id',
    loadChildren: () => import('./news-info/news-info.module').then( m => m.NewsInfoPageModule)
  },
  {
    path: 'kcile',
    loadChildren: () => import('./kcile/kcile.module').then( m => m.KcilePageModule)
  },
  {
    path: 'kcilereg',
    loadChildren: () => import('./kcilereg/kcilereg.module').then( m => m.KcileregPageModule)
  },
  {
    path: 'resetcode',
    loadChildren: () => import('./resetcode/resetcode.module').then( m => m.ResetcodePageModule)
  },
  {
    path: 'resetpass/:id',
    loadChildren: () => import('./resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
  {
    path: 'mytest',
    loadChildren: () => import('./mytest/mytest.module').then( m => m.MytestPageModule)
  },
  {
    path: 'website',
    loadChildren: () => import('./website/website.module').then( m => m.WebsitePageModule)
  },
  {
    path: 'nolivetv',
    loadChildren: () => import('./nolivetv/nolivetv.module').then( m => m.NolivetvPageModule)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./playlists/playlists.module').then( m => m.PlaylistsPageModule)
  },
  {
    path: 'programs',
    loadChildren: () => import('./programs/programs.module').then( m => m.ProgramsPageModule)
  },
  {
    path: 'give',
    loadChildren: () => import('./give/give.module').then( m => m.GivePageModule)
  },
  {
    path: 'support/:id',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'countdown',
    loadChildren: () => import('./countdown/countdown.module').then( m => m.CountdownPageModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then( m => m.FacilityPageModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then( m => m.RoomPageModule)
  },
  {
    path: 'testform',
    loadChildren: () => import('./testform/testform.module').then( m => m.TestformPageModule)
  },
  {
    path: 'kcileregmodule',
    loadChildren: () => import('./kcileregmodule/kcileregmodule.module').then( m => m.KcileregmodulePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
