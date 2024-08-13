export async function fetchProject(id: string): Promise<{
    full_name: string,
    forks_count: number
    stargazers_count: number
    watchers_count: number
}> {
    console.info('Fetching project:', id)

    const response = await fetch(`/api/${id}.json`)
    await new Promise((r) => setTimeout(r, 1000))
    return await response.json()
}
