export default class ImageService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    }

    list () {
        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possível obter as fotos');
            });
    }

    save (image) {
        if (image._id) {
            return this._resource
                .update({ id : image._id }, image);
        } else {
            return this._resource
                .save(image);
        }
    }

    delete (id) {
        return this._resource
            .delete({ id })
            .then(null, err =>{
                console.log(err);
                throw new Error('Não foi possível remover a foto');
            });
    }

    search (id) {
        return this._resource
            .get({ id })
            .then(res => res.json());
    }
}