export default function fetchCompatiblePlans(body) {
    return fetch("/getCompatiblePlans", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    }).then(res => res.json()).catch(error => error);
}