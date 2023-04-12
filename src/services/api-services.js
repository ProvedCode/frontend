import axios from "axios";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import { useCookies } from "react-cookie";

const BASE_URL = "http://18.194.159.42:8081/api/";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
});

export const TalentsService = {
	async getTalents(page, size) {
		try {
			const response = await axiosInstance.get(
				`talents?page=${page}&size=${size}`
			);
			return response?.data?.content;
		} catch (error) {
			console.log(error);
			return [];
		}
	},
	async getCountOfPages() {
		try {
			const response = await axiosInstance.get(`talents`);
			return response?.data?.total_pages;
		} catch (error) {
			console.log(error);
			return 0;
		}
	},
	async getTalent(id, token) {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		try {
			const response = await axiosInstance.get(`talents/${id}`, { headers });
			return response?.data;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	async login(login, password) {
		const authString = `${login}:${password}`;
		const encodedAuthString = base64_encode(authString);
		const headers = {
			Authorization: `Basic ${encodedAuthString}`,
		};
		try {
			const response = await axiosInstance.post(
				`talents/login`,
				{},
				{ headers }
            );
			return response?.data;
		} catch (error) {
			throw error;
		}
	},
    async getNewToken(token) {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		try {
			const response = await axiosInstance.post(
                "talents/login",
                {},
				{ headers }
            );
            console.log(response?.data?.token);
			return response?.data?.token;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};
