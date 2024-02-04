export const dynamic = "force-dynamic";

import connectMongo from './connectMongo.js';
import Volunteer from "../models/volunteer.js";

// Search Volunteers
export async function searchVolunteers(req, res) {
    try {
        await connectMongo();

        let searchTerm = req.nextUrl.searchParams.get('nic') || "";

        const searchResult = await Volunteer.aggregate([{
            $match: {
                $text: {
                    $search: searchTerm
                }
            },
        },
        {
            $sort: {
                id: -1, // Sort by the "volunteerBody" field in descending order (most recent first)
            },
        },]).exec();
        return searchResult;
    } catch (error) {
        console.log(error);
        return null;
    }
}