import { searchVolunteers } from "../../db/volunteerUtil"

export default async function GET(req) {
    try {
      const result = await searchVolunteers(req);
      
      // Check if the response indicates a successful request (status code 2xx)
      if (result && Object.keys(result).length !== 0) {
        return Response.json({ result }, {status: 200})
      } else {
        // If the response status is not successful, handle the error
        return Response.json({ error: "Entry not found"}, { status: 404 })
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle other errors and send an appropriate response
      return Response.json({ error: "Internal Server Error"},{ status: 500 })
    }
  }