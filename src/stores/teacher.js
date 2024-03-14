import { defineStore } from "pinia"
import http from "@/http-common";

const endpoint = "/teachers";

export const useTeacherStore = defineStore("teacher", {
    state: () => ({
        list: []
    }),
    actions: {
        async loadTeachers () {
            try {
                const response = await http.get(endpoint);
                if (response.status == 200) {
                    this.list = response.data.result;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async getTeacher (teacherId) {
            try {
                return await http.get(`${endpoint}/${teacherId}`);
            } catch (error) {
                console.log("error", error);
            }
        },
        async createTeacher (teacherData) {
            try {
                return await http.post(endpoint, teacherData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async updateTeacher (teacherId, teacherData) {
            try {
                return await http.put(`${endpoint}/${teacherId}`, teacherData);
            } catch (error) {
                console.log("error", error);
            }
        },
        async deleteTeacher (teacherId) {
            try {
                return await http.delete(`${endpoint}/${teacherId}`);
            } catch (error) {
                console.log("error", error);
            }
        }
    }
});