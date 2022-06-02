import JsonServerApiService from "./js-classes/json-server-api";

const jsonServerApiService = new JsonServerApiService({resource: 'books'});

const newBook_1 = {
    title: "The test book 1",
    author: "Me",
    genres: ["HTML"],
    rating: 7.53
}
const newBook_2 = {
    title: "The test book 2",
    author: "Me",
    genres: ["CSS"],
    rating: 7.53
}

const newPatch = {
    itemId: 4,
    newProperties: {author: "Updated Author"},
}

jsonServerApiService.getAllItems().then(handleResult).catch(console.log);

// jsonServerApiService.getItemById({itemId: 3}).then(handleResult).catch(console.log);

// jsonServerApiService.addItem({newItem: newBook_1}).then(handleResult).catch(console.log);

// jsonServerApiService.updateItem(newPatch).then(handleResult).catch(console.log);

// jsonServerApiService.replaceItem({itemId: 4, newProperties: newBook_2}).then(handleResult).catch(console.log);

// jsonServerApiService.removeItem({itemId: 5}).then(handleResult).catch(console.log);

function handleResult(data) {
    console.log(data);
}