const axios = require('axios').default

export class BaseAPI {
    baseUrl = 'https://api.unsplash.com/';
    instance;

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Authorization': 'Bearer NnLiiu_DJiNctYEljWdbTInkjFtuiG0cx5wqC54-0ow',
            }
        })
    }

    async get(path, query) {
        try {
            return await this.instance.get(path + (query ?? '') + '?client_id=dkACPhGy70sM6_aac21Ka9dl3eFQ3TpzidtlORfIKBM')
        } catch (error) {
            throw new Error(error)
        }
    }

    async post(path, data) {
        try {
            return await this.instance.post(path, data)
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(path) {
        try {
            await this.instance.delete(path)
        } catch (error) {
            throw new Error(error)
        }
    }
}