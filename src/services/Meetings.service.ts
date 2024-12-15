
const API_URL = 'https://restnode-jsproject.onrender.com/meetings';
export const MeetingService = {

      createMeeting :async (businessId: string, serviceId: string, meetingData: any) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ businessId, serviceId, meetingData }),
        });
    
        if (!response.ok) {
            throw new Error('Failed to create meeting');
        }
        return await response.json();
    }
    
     ,updateMeeting: async (meetingId: string, businessId: string, serviceId: string, meetingData: any) => {
        const response = await fetch(`${API_URL}/${meetingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ businessId, serviceId, meetingData }),
        });
    
        if (!response.ok) {
            throw new Error('Failed to update meeting');
        }
        return await response.json();
    },
    
deleteMeeting :async (meetingId: string) => {
        const response = await fetch(`${API_URL}/${meetingId}`, {
            method: 'DELETE',
        });
    
        if (!response.ok) {
            throw new Error('Failed to delete meeting');
        }
        return await response.json();
    }
    
    ,getAllMeetings : async () => {
        const response = await fetch(API_URL);
    
        if (!response.ok) {
            throw new Error('Failed to fetch meetings');
        }
        return await response.json();
    }
}