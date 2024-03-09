import { defineStore } from "pinia"
import http from "@/http-common";

const endpoint = "/levels";

export const useLevelStore = defineStore("level", {
    state: () => ({
        list: []
    }),
    actions: {
        async loadLevels () {
            try {
                const response = await http.get(endpoint);
                if (response.status == 200) {
                    this.list = response.data;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async getLevel (levelId) {
            try {
                return await http.get(`${endpoint}/${levelId}`);
            } catch (error) {
                console.log("error", error);
            }
        },
        async createLevel (levelData) {
            try {
                return await http.post(endpoint, levelData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async updateLevel (levelId, levelData) {
            try {
                return await http.put(`${endpoint}/${levelId}`, levelData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async deleteLevel (levelId) {
            try {
                return await http.delete(`${endpoint}/${levelId}`);
            } catch (error) {
                console.log("error", error);
            }
        }
    }
});