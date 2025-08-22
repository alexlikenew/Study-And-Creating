import supabase, {supabaseUrl} from "./supabase.jsx";

export async function getCabins() {

    const {data, error} = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error)
        throw new Error('Cabins cannot be loaded')
    }

    return data

}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
    // const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    // https://eaoovqrutckonnubrzyd.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
    // https://eaoovqrutckonnubrzyd.supabase.co/storage/v1/object/public/cabin-images/cabin-008.jpg
    // createImage

    let query = supabase.from('cabins')

    // CREATE CABIN
    if (!id) {
        query = query.insert([{...newCabin, image: imagePath}])
    }
    // EDIT CABIN

    if (hasImagePath) return data
    if (id) {
        query = query.update({...newCabin, image: imagePath})
            .eq('id', id)
            .select()
    }
    const {data, error} = await query.select().single()

    if (error) {
        console.log(error)
        throw new Error('Cabins cannot be created')
    }


    const {error: storageError} = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)

    console.log(storageError)

    console.log(newCabin.image)
    if (storageError) {
        const {data, error} = await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id)
        console.log(storageError)
        throw new Error('Cabin image could not be uploaded and cabin is deleted')


    }

    return data


}

export async function deleteCabin(id) {
    const {error} = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)


    if (error) {
        console.log(error)
        throw new Error('Cabins cannot be deleted')

        return data

    }
}