import { defineStore } from "pinia"
import http from "@/http-common";

const endpoint = "/users";

export const useUserStore = defineStore("user", {
    state: () => ({
        list: []
    }),
    actions: {
        async loadUsers () {
            try {
                const response = await http.get(endpoint);
                if (response.status == 200) {
                    this.list = response.data.result;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async getUser (userId) {
            try {
                return await http.get(`${endpoint}/${userId}`);
            } catch (error) {
                console.log("error", error);
            }
        },
        async createUser (userData) {
            try {
                return await http.post(endpoint, userData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async updateUser (userId, userData) {
            try {
                return await http.put(`${endpoint}/${userId}`, userData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async deleteUser (userId) {
            try {
                return await http.delete(`${endpoint}/${userId}`);
            } catch (error) {
                console.log("error", error);
            }
        }
    }
});