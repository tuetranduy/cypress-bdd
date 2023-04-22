const { BaseAPI } = require("../../support/baseApi");
export class PhotoAPI {
    baseApi = new BaseAPI();

    async getLikedPhotoIds(username) {
        const response = await this.baseApi.get(`users/${username}/likes`);

        return response
    }

    async deleteLikedPhotos(images) {
        for (const { id } of images) {
            await this.baseApi.delete(`photos/${id}/like`)
        }
        cy.reload()
    }
}