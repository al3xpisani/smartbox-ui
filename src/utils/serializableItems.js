export const serializableItems = (tags, response) => {
    tags.forEach(tag => {
        delete response[tag]
    });
    return response
}