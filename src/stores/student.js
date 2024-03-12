import { defineStore } from "pinia"
import http from "@/http-common";

const endpoint = "/students";

export const useStudentStore = defineStore("student", {
    state: () => ({
        list: []
    }),
    actions: {
        async loadStudents () {
            try {
                const response = await http.get(endpoint);
                if (response.status == 200) {
                    this.list = response.data.result;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async getStudent (studentId) {
            try {
                return await http.get(`${endpoint}/${studentId}`);
            } catch (error) {
                console.log("error", error);
            }
        },
        async createStudent (studentData) {
            try {
                return await http.post(endpoint, studentData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async updateStudent (studentId, studentData) {
            try {
                return await http.put(`${endpoint}/${studentId}`, studentData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async deleteStudent (studentId) {
            try {
                return await http.delete(`${endpoint}/${studentId}`);
            } catch (error) {
                console.log("error", error);
            }
        }
    }
});