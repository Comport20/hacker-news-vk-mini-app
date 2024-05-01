
import Story from "../type"
export const getNewStories = async (): Promise<number[]> => {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");
    return response.json();
}

export const getNewStory = async (id: number): Promise<Story> => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    return response.json();
}
