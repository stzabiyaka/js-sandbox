export default class JsonServerApiService {
    #fetchMethod (url, options) {
        return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
    constructor ({resource}) {
        this.BASE_URL = 'http://localhost:4040';
        this.resource =resource;
        this.options = {
            headers: {
                "Content-type": "application/json"
            }
        }
    }

    getAllItems () {
        return this.#fetchMethod(`${this.BASE_URL}/${this.resource}`, this.options);
    }
    
    getItemById ({itemId}) {
        return this.#fetchMethod(`${this.BASE_URL}/${this.resource}/${itemId}`, this.options);
    }

    addItem ({newItem}) {
        const options = {...this.options, method: 'POST', body: JSON.stringify(newItem)};

        return this.#fetchMethod(`${this.BASE_URL}/${this.resource}`, options);
    }

    updateItem ({itemId, newProperties}) {
        const options = {...this.options, method: 'PATCH', body: JSON.stringify(newProperties)};
        return this.#fetchMethod(`${this.BASE_URL}/${this.resource}/${itemId}`, options);
    }

    replaceItem ({itemId, newProperties}) {
        const options = {...this.options, method: 'PUT', body: JSON.stringify(newProperties)};
        return this.#fetchMethod(`${this.BASE_URL}/${this.resource}/${itemId}`,options);
    }

    removeItem ({itemId}) {
        const options = {method: 'DELETE'};
        return this.#fetchMethod(`${this.BASE_URL}/${this.resource}/${itemId}`, options);
    }
}