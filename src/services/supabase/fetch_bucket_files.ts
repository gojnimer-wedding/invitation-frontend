import { supabase } from "@/lib/supabase"

export default async function fetchBucketFiles(bucketName: string, folderName = '') {
    var images: string[] = []
    const { data, error } = await supabase.storage.from(bucketName).list(folderName)
    if (!error && data.length) data.forEach(file => {
        const url = supabase.storage.from(bucketName).getPublicUrl(`carousel_invite/${file.name}`).data.publicUrl
        images.push(url)
    })
    return images
}