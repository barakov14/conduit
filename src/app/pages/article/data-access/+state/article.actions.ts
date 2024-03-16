import { createActionGroup, emptyProps, props } from '@ngrx/store';
export const articleActions = createActionGroup({
  source: 'Article',
  events: {
    // changeProfileDataSuccess: props<{ res: ChangeProfileDataResponse }>(),
  }
});


