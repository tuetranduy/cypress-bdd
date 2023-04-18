const axios = require('axios').default

export class BaseAPI {
    baseUrl = 'https://api.unsplash.com/';
    instance;

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Authorization': 'dkACPhGy70sM6_aac21Ka9dl3eFQ3TpzidtlORfIKBM',
            }
        })
    }

    async get(path, query) {
        try {
            return await this.instance.get(path + (query ?? ''))
        } catch (error) {
            throw new Error(error)
        }
    }

    async post(path, data) {
        try {
            await this.instance.post(path, data)
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(path, data) {
        try {
            await this.instance.delete(path + data)
        } catch (error) {
            throw new Error(error)
        }
    }
}