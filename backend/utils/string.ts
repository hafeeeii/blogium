

export const generateSlug = (title: string) => {
    const slug = title.split(" ").join("-").toLowerCase().replace(/[^a-zA-Z0-9-]/g, "")
    return slug
}
