import { defineStore } from "pinia"
import http from "@/http-common";

const endpoint = "/roles";

export const useRoleStore = defineStore("role", {
    state: () => ({
        list: []
    }),
    actions: {
        async loadRoles () {
            try {
                const response = await http.get(endpoint);
                if (response.status == 200) {
                    this.list = response.data;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async getRole (roleId) {
            try {
                return await http.get(`${endpoint}/${roleId}`);
            } catch (error) {
                console.log("error", error);
            }
        },
        async createRole (roleData) {
            try {
                return await http.post(endpoint, roleData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async updateRole (roleId, roleData) {
            try {
                return await http.put(`${endpoint}/${roleId}`, roleData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async deleteRole (roleId) {
            try {
                return await http.delete(`${endpoint}/${roleId}`);
            } catch (error) {
                console.log("error", error);
            }
        }
    }
});