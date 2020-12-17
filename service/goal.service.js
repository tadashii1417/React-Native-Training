const baseUrl = "https://goallist-d24fb-default-rtdb.firebaseio.com";

export function addGoal(newGoal) {
    return fetch(`${baseUrl}/goals.json`, {
        method: 'POST',
        body: JSON.stringify(newGoal)
    })
}

export function removeGoal(id) {
    return fetch(`${baseUrl}/goals/${id}.json`, {
        method: 'DELETE'
    })
}

export function fetchAllGoals() {
    return fetch(`${baseUrl}/goals.json`)
}