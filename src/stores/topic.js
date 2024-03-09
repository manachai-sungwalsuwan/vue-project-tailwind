import { defineStore } from "pinia"
import http from "@/http-common";

const endpoint = "/topics";

export const useTopicStore = defineStore("topic", {
    state: () => ({
        list: []
    }),
    actions: {
        async loadTopics () {
            try {
                const response = await http.get(endpoint);
                if (response.status == 200) {
                    this.list = response.data;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async getTopic (topicId) {
            try {
                return await http.get(`${endpoint}/${topicId}`);
            } catch (error) {
                console.log("error", error);
            }
        },
        async createTopic (topicData) {
            try {
                return await http.post(endpoint, topicData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async updateTopic (topicId, topicData) {
            try {
                return await http.put(`${endpoint}/${topicId}`, topicData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async deleteTopic (topicId) {
            try {
                return await http.delete(`${endpoint}/${topicId}`);
            } catch (error) {
                console.log("error", error);
            }
        }
    }
});