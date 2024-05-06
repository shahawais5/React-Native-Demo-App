import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const myAxiosGetRequest = async (apiUrl) => {
    const res = await axios({
        method: 'get',
        url: apiUrl,
    });
    return res;
}

export const myAxiosAuthenticatedRequest = async (apiUrl, data) => {
    const res = await axios({
        method: 'post',
        url: apiUrl,
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'x-org-name': 'cloud',
            'x-app-name': 'main',
        },
        data:data,
    });
    return res;
}

export const myAxiosPostRequest = async (apiUrl, data = null) => {
    const accessToken = AsyncStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error('Access token not found. User may not be logged in.');
    }

    try {
        const res = await axios({
            method: data ? 'post' : 'get',
            url: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
                'x-org-name': 'cloud',
                'x-app-name': 'main',
                'Authorization': `Bearer ${accessToken}` // Attach the token to the Authorization header
            },
            data: data,
        });
        return res;
    } catch (error) {
        throw new Error('Error making authenticated request:', error);
    }
};
