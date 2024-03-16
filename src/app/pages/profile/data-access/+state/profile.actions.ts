import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const profileActions = createActionGroup({
  source: 'Profile',
  events: {
    // changeProfileDataSuccess: props<{ res: ChangeProfileDataResponse }>(),
  }
});


