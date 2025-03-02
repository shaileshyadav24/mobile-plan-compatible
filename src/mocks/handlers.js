import { http, HttpResponse } from 'msw'

export const handlers = [
    http.post("/getPhoneCompatibility", (resolver) => {
        console.log(resolver.request.body)
        return HttpResponse.json({
              plans: [
                { id: 1, name: 'Tom' },
                { id: 2, name: 'Jerry' },
                { id: 3, name: 'Spike' },
              ],
          })
    })
];
