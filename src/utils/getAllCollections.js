import { getCollection } from 'astro:content';

export default async function getAllCollections(collectionNames) {
    const collections = await Promise.all(
        collectionNames.map((name) => getCollection(name, ({ data }) => !data.draft))
    );
    return collections.flat();
};