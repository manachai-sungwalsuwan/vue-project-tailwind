import { defineStore } from "pinia"
import http from "@/http-common";

const endpoint = "/stores";

export const useStoreStore = defineStore("store", {
    state: () => ({
        list: []
    }),
    actions: {
        async loadStores () {
            try {
                const response = await http.get(endpoint);
                if (response.status == 200) {
                    this.list = response.data.result;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async getStore (storeId) {
            try {
                return await http.get(`${endpoint}/${storeId}`);
            } catch (error) {
                console.log("error", error);
            }
        },
        async createStore (storeData) {
            try {
                return await http.post(endpoint, storeData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async updateStore (storeId, storeData) {
            try {
                return await http.put(`${endpoint}/${storeId}`, storeData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async deleteStore (storeId) {
            try {
                return await http.delete(`${endpoint}/${storeId}`);
            } catch (error) {
                console.log("error", error);
            }
        }
    }
});