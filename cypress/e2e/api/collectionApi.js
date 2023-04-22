const { BaseAPI } = require("../../support/baseApi");
export class CollectionAPI {
    baseApi = new BaseAPI();

    async createCollection(collectionName) {
        const postData = {
            title: collectionName,
            private: true
        }
        const response = await this.baseApi.post('collections', postData);
        return response.data.id
    }

    async getCollectionPhotos(collectionId) {
        const response = await this.baseApi.get('collections/' + collectionId + '/photos', postData);

        ids = [];

        return response.data
    }

    async removePhotoFromCollection(collectionId, photoId) {
        await this.baseApi.post("collections/" + collectionId + "/remove", { photo_id: photoId })
    }
}