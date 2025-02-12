import { fetchTopics } from "@/lib/data";

export async function GET() {
    try {
        const response = await fetchTopics();
        return Response.json(response);
    } catch (error) {
        console.error("Failed to fetch topics:", error);
    }
}