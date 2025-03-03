import { delay, http, HttpResponse } from 'msw'
import { phonePlansByMobile, phonePlansByIMEI } from './phonePlans';

export const handlers = [

  http.post("/getCompatiblePlans", async ({ request }) => {

    const payload = await request.json();

    await delay(5000);

    if (payload.searchType === 'IMEI') {
      let phonePlans = phonePlansByIMEI.find(plan => plan.imei === payload.searchValue);
      if (phonePlans) {
        return HttpResponse.json({
          plans: phonePlans.plans
        })
      } else {
        return HttpResponse.json({
          plans: []
        })
      }
    } else {
      let phonePlans = phonePlansByMobile.find(plan => plan.name.toLowerCase() === payload.searchValue.toLowerCase());
      if (phonePlans) {
        return HttpResponse.json({
          plans: phonePlans.plans
        })
      } else {
        return HttpResponse.json({
          plans: []
        })
      }
    }

  })
];
